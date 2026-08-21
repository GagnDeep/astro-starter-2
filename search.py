import urllib.request
import urllib.parse
from html.parser import HTMLParser

class DDGParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_result = False
        self.in_title = False
        self.in_snippet = False
        self.results = []
        self.current_result = {}

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == 'a' and 'result__url' in attrs_dict.get('class', ''):
            self.current_result['url'] = attrs_dict.get('href', '')
        elif tag == 'h2' and 'result__title' in attrs_dict.get('class', ''):
            self.in_title = True
            self.current_result['title'] = ''
        elif tag == 'a' and 'result__snippet' in attrs_dict.get('class', ''):
            self.in_snippet = True
            self.current_result['snippet'] = ''

    def handle_endtag(self, tag):
        if tag == 'h2':
            self.in_title = False
        elif tag == 'a' and self.in_snippet:
            self.in_snippet = False
            self.results.append(self.current_result)
            self.current_result = {}

    def handle_data(self, data):
        if self.in_title:
            self.current_result['title'] += data
        elif self.in_snippet:
            self.current_result['snippet'] += data

def search(query):
    url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        parser = DDGParser()
        parser.feed(html)
        for r in parser.results:
            print(f"URL: {r.get('url')}")
            print(f"Title: {r.get('title', '').strip()}")
            print(f"Snippet: {r.get('snippet', '').strip()}\n")
    except Exception as e:
        print(f"Error: {e}")

search("best food tracking apps")
