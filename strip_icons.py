import os
import re

# We will recursively find all markdown files in docs/
# and remove specific emojis/icons that were generated.
icons_to_remove = [
    '🏢', '🧠', '🏗️', '📑', '🏟', '❌', '📊', '📋', '🔗', '✅', '⚡'
]

def strip_icons(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for icon in icons_to_remove:
                    new_content = new_content.replace(icon, '')
                
                # Clean up any weird double spaces let behind (like "  Mistake #1")
                new_content = new_content.replace('** Mistake', '**Mistake')
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Stripped icons from {filepath}")

if __name__ == '__main__':
    strip_icons('./docs')
