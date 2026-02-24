window.$docsify = window.$docsify || {};
window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function (hook, vm) {
    // 1. Add reading time to top of page and explicitly parse checkboxes
    hook.beforeEach(function (html) {
        // Explicitly convert task list markdown to HTML checkboxes to prevent marked.js parsing issues
        html = html.replace(/^- \[\s\] /gm, '- <input type="checkbox" disabled> ');
        html = html.replace(/^- \[x\] /gim, '- <input type="checkbox" checked disabled> ');

        var words = html.split(/\s+/).length;
        var readTime = Math.max(1, Math.ceil(words / 200));

        var timeHtml = '<div style="color: #888; font-size: 0.9em; margin-bottom: 20px;">⏱️ ' + readTime + ' min read</div>\n\n';
        return timeHtml + html;
    });

    // 2. Format "Interview Angle", "Dialogue/Scripts", and "Deal Autopsy"
    hook.afterEach(function (html, next) {

        // Format Dialogues Element: <dialogue>...</dialogue>
        html = html.replace(/<dialogue>([\s\S]*?)<\/dialogue>/g, function (match, content) {
            // Strip paragraph tags docsify might have wrapped around the content
            content = content.replace(/<\/?p>/g, '\n');
            var rows = content.trim().split('\n');
            var dialogueHtml = '<div class="roleplay-script">';

            rows.forEach(function (row) {
                if (row.trim() === '') return;
                var parts = row.split(/:\s(.+)/);
                if (parts.length > 1) {
                    var speaker = parts[0].replace(/<[^>]*>?/gm, '').trim();
                    speaker = speaker.replace(/\*/g, '');
                    var text = parts[1].trim();
                    var speakerClass = 'speaker-se';
                    var sLow = speaker.toLowerCase();
                    if (sLow.includes('prospect') || sLow.includes('buyer') || sLow.includes('customer') || sLow.includes('client')) {
                        speakerClass = 'speaker-prospect';
                    } else if (sLow.includes('ae') || sLow.includes('exec')) {
                        speakerClass = 'speaker-ae';
                    }
                    var initials = speaker.substring(0, 2).toUpperCase();
                    if (speaker.split(' ').length > 1) {
                        initials = speaker.split(' ')[0][0] + speaker.split(' ')[1][0];
                    }

                    dialogueHtml += '<div class="dialogue-row ' + speakerClass + '">';
                    dialogueHtml += '  <div class="speaker-avatar">' + initials + '</div>';
                    dialogueHtml += '  <div class="speaker-message"><strong>' + speaker + '</strong>' + text + '</div>';
                    dialogueHtml += '</div>';
                } else {
                    dialogueHtml += '<div class="dialogue-action">' + row.trim() + '</div>';
                }
            });
            dialogueHtml += '</div>';
            return dialogueHtml;
        });

        // 2b. Format Deal Autopsy <deal-autopsy>...</deal-autopsy>
        html = html.replace(/<deal-autopsy>([\s\S]*?)<\/deal-autopsy>/g, function (match, content) {
            return `
        <div class="autopsy-quiz" id="autopsy-quiz-container">
          <h3>🩺 Deal Autopsy Diagnostic</h3>
          <p style="color: #64748b; margin-bottom: 20px;">A stalled POC is rarely a technical issue. Answer these 3 questions to diagnose the actual failure point.</p>
          
          <div class="quiz-question">
            <label>1. Did the Executive Sponsor physically attend the final POC technical readout?</label>
            <div class="quiz-options">
              <button class="quiz-btn" onclick="window.selectAutopsy(1, 'yes', this)">Yes</button>
              <button class="quiz-btn" onclick="window.selectAutopsy(1, 'no', this)">No</button>
            </div>
          </div>

          <div class="quiz-question">
            <label>2. Was the Mutual Success Plan explicitly approved by the prospect before the sandbox was provisioned?</label>
            <div class="quiz-options">
              <button class="quiz-btn" onclick="window.selectAutopsy(2, 'yes', this)">Yes</button>
              <button class="quiz-btn" onclick="window.selectAutopsy(2, 'no', this)">No</button>
            </div>
          </div>

          <div class="quiz-question">
            <label>3. During the POC, did the prospect's team miss more than two scheduled syncs/stand-ups?</label>
            <div class="quiz-options">
              <button class="quiz-btn" onclick="window.selectAutopsy(3, 'yes', this)">Yes (They missed them)</button>
              <button class="quiz-btn" onclick="window.selectAutopsy(3, 'no', this)">No (They attended)</button>
            </div>
          </div>

          <button onclick="window.runAutopsy()" style="margin-top: 15px; background: #1e3a8a; color: white; border: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">Run Diagnostic</button>

          <div id="autopsy-result" class="autopsy-result">
            <h4 id="autopsy-title">Diagnostic Result</h4>
            <p id="autopsy-desc"></p>
          </div>
        </div>
      `;
        });

        // Format Objection Flashcards <objection-flashcard>...</objection-flashcard>
        html = html.replace(/<objection-flashcard>([\s\S]*?)<\/objection-flashcard>/g, function (match, content) {
            var frontMatch = content.match(/<front>([\s\S]*?)<\/front>/);
            var backMatch = content.match(/<back>([\s\S]*?)<\/back>/);
            var front = frontMatch ? frontMatch[1].trim() : '';
            var back = backMatch ? backMatch[1].trim() : '';
            return `
        <div class="objection-flashcard" onclick="this.classList.toggle('flipped')">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <div>${front}</div>
            </div>
            <div class="flashcard-back">
              <div>${back}</div>
            </div>
          </div>
        </div>
      `;
        });

        // Replace standard markdown paragraph for Interview Angle with a custom styled div
        var styledHtml = html.replace(/<p><strong>Interview Angle:<\/strong>([\s\S]*?)<\/p>/g, function (match, innerContent) {
            return '<div class="interview-angle-card"><strong>📋 Interview Angle:</strong>' + innerContent + '</div>';
        });

        // Don't add share buttons to the homepage or 404
        if (window.location.hash.match(/^#\/?$/) || window.location.hash.includes('_404')) {
            next(styledHtml);
            return;
        }

        var shareUrl = encodeURIComponent(window.location.href);
        var shareHtml = `
      <div class="share-chapter-container" style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee;">
        <h4 style="margin-bottom: 15px; color: #1e3a8a;">Share this chapter</h4>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; border-radius: 6px; background: #0a66c2; color: white; text-decoration: none; font-size: 0.9em; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
            <svg style="margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
          </a>
          <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=Check out this framework from The Enterprise Presales Playbook:" target="_blank" style="display: inline-flex; align-items: center; padding: 8px 16px; border-radius: 6px; background: #0f1419; color: white; text-decoration: none; font-size: 0.9em; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
            <svg style="margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> X (Twitter)
          </a>
        </div>
      </div>
    `;

        next(styledHtml + shareHtml);
    });

    // 3. Add Giscus commenting system at the bottom
    hook.doneEach(function () {
        var giscusContainer = document.getElementById('giscus-container');

        if (!giscusContainer) {
            giscusContainer = document.createElement('div');
            giscusContainer.id = 'giscus-container';
            giscusContainer.style.marginTop = '60px';
            giscusContainer.style.borderTop = '1px solid #eee';
            giscusContainer.style.paddingTop = '20px';

            var target = document.querySelector('.markdown-section') || document.body;
            target.appendChild(giscusContainer);

            var script = document.createElement('script');
            script.src = 'https://giscus.app/client.js';
            script.setAttribute('data-repo', 'gauravs19/presales-playbook');
            script.setAttribute('data-repo-id', 'R_kgDORVoueg');
            script.setAttribute('data-category', 'Announcements');
            script.setAttribute('data-category-id', 'DIC_kwDORVoues4C2_Vc');
            script.setAttribute('data-mapping', 'title');
            script.setAttribute('data-strict', '0');
            script.setAttribute('data-reactions-enabled', '1');
            script.setAttribute('data-emit-metadata', '0');
            script.setAttribute('data-input-position', 'bottom');
            script.setAttribute('data-theme', 'light');
            script.setAttribute('data-lang', 'en');
            script.crossOrigin = 'anonymous';
            script.async = true;
            giscusContainer.appendChild(script);
        } else {
            // Giscus uses message passing to update the active page dynamically on SPA route changes
            var iframe = document.querySelector('iframe.giscus-frame');
            if (iframe) {
                iframe.contentWindow.postMessage(
                    { giscus: { setConfig: { term: document.title } } },
                    'https://giscus.app'
                );
            }
        }
    });

    // 4. Interactive Checklists
    hook.doneEach(function () {
        var checkboxes = document.querySelectorAll('.markdown-section input[type="checkbox"]');
        var pagePath = window.location.hash.split('?')[0];

        checkboxes.forEach(function (cb, index) {
            var storageKey = 'playbook_cb_' + pagePath + '_' + index;

            // Make interactive
            cb.removeAttribute('disabled');
            cb.style.cursor = 'pointer';
            if (cb.parentElement && cb.parentElement.tagName === 'LI') {
                cb.parentElement.style.listStyleType = 'none';
            }

            // Restore state
            var savedState = localStorage.getItem(storageKey);
            if (savedState !== null) {
                cb.checked = (savedState === 'true');
            }

            // Save state automatically
            cb.addEventListener('change', function () {
                localStorage.setItem(storageKey, cb.checked);
            });
        });
    });
});
