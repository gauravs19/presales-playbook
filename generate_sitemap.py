import re
from datetime import datetime

# GitHub Pages Base URL
BASE_URL = "https://gauravs19.github.io/presales-playbook/#/"

def generate_sitemap():
    try:
        with open('_sidebar.md', 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Extract all markdown links: [Title](relative/path.md)
        matches = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
        
        urlset = []
        today = datetime.now().strftime('%Y-%m-%d')
        
        # Add the root URL
        urlset.append(f"""  <url>
    <loc>{BASE_URL}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>""")
        
        for title, path in matches:
            # Clean path, remove trailing .md as Docsify uses /#/path
            clean_path = path.replace('.md', '')
            url = f"{BASE_URL}{clean_path}"
            
            urlset.append(f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>""")
            
        sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urlset)}
</urlset>"""
        
        with open('sitemap.xml', 'w', encoding='utf-8') as f:
            f.write(sitemap_content)
            
        print("sitemap.xml generated successfully!")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    generate_sitemap()
