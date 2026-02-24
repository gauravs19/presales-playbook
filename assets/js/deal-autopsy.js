// Global Functions for Deal Autopsy
window.autopsyAnswers = { 1: null, 2: null, 3: null };
window.selectAutopsy = function (q, answer, btn) {
    window.autopsyAnswers[q] = answer;
    var siblings = btn.parentElement.children;
    for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove('selected');
    }
    btn.classList.add('selected');
};
window.runAutopsy = function () {
    var ans = window.autopsyAnswers;
    var res = document.getElementById('autopsy-result');
    var title = document.getElementById('autopsy-title');
    var desc = document.getElementById('autopsy-desc');

    if (!ans[1] || !ans[2] || !ans[3]) {
        alert("Please answer all 3 questions to run the diagnostic.");
        return;
    }

    res.style.display = 'block';
    res.classList.remove('autopsy-result-bad');

    if (ans[1] === 'no') {
        res.classList.add('autopsy-result-bad');
        title.innerText = "Diagnosis: The 'Free Consulting' Trap";
        desc.innerHTML = "You won the technical battle but lost the commercial war. If the executive sponsor delegated the final read-out entirely to engineers, they never intented to buy; they just wanted free validation of their architecture. <strong>Remedy:</strong> Never hand over sandbox credentials until the Executive commits to attending the final readout.";
    } else if (ans[2] === 'no') {
        res.classList.add('autopsy-result-bad');
        title.innerText = "Diagnosis: The 'Moving Goalposts' Syndrome";
        desc.innerHTML = "You ran a POC without a success criteria document. Because you didn't define what 'Winning' looked like on Day 1, the prospect was allowed to continuously invent new requirements on Day 14. <strong>Remedy:</strong> See Section 6.2.2 on the 3-Mandatory-Requirements rule.";
    } else if (ans[3] === 'yes') {
        res.classList.add('autopsy-result-bad');
        title.innerText = "Diagnosis: The 'Loss of Leverage'";
        desc.innerHTML = "The prospect missed syncs because they did not have 'Skin in the Game.' When a prospect stops showing up, the evaluation must be formally paused to force them back to the table. <strong>Remedy:</strong> Use the 'Close the Project' email from Section 6.5.1 to force an immediate response.";
    } else {
        title.innerText = "Diagnosis: Pristine Execution (External Factors)";
        desc.innerHTML = "You executed the mechanics of this POV flawlessly. You had executive alignment, a signed success plan, and active engagement. If this deal stalled, it was due to a macro-level budget freeze or an aggressive competitor. Do not change your methodology; your execution was sound.";
    }
};
