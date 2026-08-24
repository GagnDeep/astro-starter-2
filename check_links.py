import os
import sys
from bs4 import BeautifulSoup
from urllib.parse import urlparse

def get_html_files(directory):
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
    return html_files

def run():
    dist_dir = 'dist'
    if not os.path.exists(dist_dir):
        print(f"Directory {dist_dir} does not exist.")
        sys.exit(1)

    html_files = get_html_files(dist_dir)
    print(f"Found {len(html_files)} HTML files.\n")

    pages = {}
    for file in html_files:
        if '404.html' in file: continue
        path = file.replace(dist_dir, '')
        url = path[:-10] if path.endswith('/index.html') else path
        if url == '': url = '/'
        if not url.endswith('/'): url += '/'
        pages[url] = {'inbound': [], 'outbound': [], 'inbound_content': [], 'file': file}

    for url, data in pages.items():
        with open(data['file'], 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
            for a in soup.find_all('a', href=True):
                href = a['href']
                text = a.get_text().strip()
                if href.startswith('/') or href.startswith('https://instituteofria.com/'):
                    target_url = urlparse(href).path
                    if not target_url.endswith('/') and not target_url.endswith('.xml'): target_url += '/'
                    if target_url in pages:
                         pages[url]['outbound'].append(target_url)
                         pages[target_url]['inbound'].append((url, text))
                         if not a.find_parent('nav') and not a.find_parent('footer') and not a.find_parent('header'):
                              pages[target_url]['inbound_content'].append((url, text))

    print("\n--- LINK GRAPH VALIDATION ---")
    orphans = [u for u, d in pages.items() if len(d['inbound']) == 0]
    under_three = [(u, len(d['inbound_content'])) for u, d in pages.items() if len(d['inbound_content']) < 3]

    print(f"Orphans: {len(orphans)}")
    print(f"Pages with < 3 content inbound links: {len(under_three)}")
    for u, c in under_three: print(f"  - {u} ({c})")

run()
