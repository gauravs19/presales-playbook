const fs = require('fs');
const path = require('path');

const baseUrl = 'https://gauravs19.github.io/presales-playbook/';
const docsDir = path.join(__dirname, 'docs');

function getMarkdownFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getMarkdownFiles(filePath, fileList);
        } else if (file.endsWith('.md')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const mdFiles = getMarkdownFiles(docsDir);

// Base URLs
const pages = ['#/'];

mdFiles.forEach(file => {
    // Convert physical path to route path (e.g., docs/01-intro/file.md -> #/docs/01-intro/file)
    const relativePath = path.relative(__dirname, file).replace(/\\/g, '/');
    // Don't include README files as separate pages if they are index pages, or rather map them if needed.
    // Actually, Docsify routes docs/01/README.md to #/docs/01/ 
    let route = '#/' + relativePath.replace(/\.md$/, '');

    if (route.endsWith('/README')) {
        route = route.replace(/\/README$/, '/');
    }

    pages.push(route);
});

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '#/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
console.log('sitemap.xml generated successfully with ' + pages.length + ' URLs.');
