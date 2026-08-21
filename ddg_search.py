import urllib.request
import urllib.parse
import json
import re

def search(query):
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        results = re.findall(r'<a class="result__url" href="([^"]+)">([^<]+)</a>', html)
        snippets = re.findall(r'<a class="result__snippet[^"]*"[^>]*>(.*?)</a>', html)

        for i in range(min(5, len(results))):
            print(f"URL: {results[i][0]}")
            print(f"Snippet: {snippets[i] if i < len(snippets) else ''}\n")
    except Exception as e:
        print("Error:", e)

search('browser based local video player')
