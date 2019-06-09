import requests
import urllib
import time
from bs4 import BeautifulSoup

def set_misc():
    l = []
    url = 'https://www.theverge.com/tech'
    resp = requests.get(url)
    soup = BeautifulSoup(resp.text, "html.parser")
    for ext in soup.body.div.main.div.div.div.find_all('div'):
        if ext.get('class') in [['c-entry-box--compact', 'c-entry-box--compact--featured', 'c-entry-box--compact--hero'],['c-entry-box--compact','c-entry-box--compact--article','c-entry-box--compact--hero']]:
            l.append(ext.a['href'])
    for ext in soup.body.div.main.find('div',{'class':"l-reskin l-hub-wrapper has-group-header"}).div.div.div.div.find_all('div'):
        try:
            if ext.div.a.get('class') == ["c-entry-box--compact__image-wrapper"]:
                l.append(ext.div.a['href'])
        except:
            t=1
    return l

def get_misc():
    news = []
    for url in set_misc():
        resp = requests.get(url)
        soup = BeautifulSoup(resp.text, "html.parser")
        try:
            titl = soup.body.main.article.div.div.find('div', {'class':"c-entry-hero__header-wrap"}).h1.text.strip()
            subt = soup.body.main.article.div.div.p.text.strip()
            auth = str(soup.body.main.article.div.div.find('div', {'class':"c-byline"}).span.a)
            imag = soup.body.main.article.find('div',{'class':"l-sidebar-fixed l-segment l-article-body-segment"}).div.figure.span.span['data-original']
            date = soup.body.main.article.div.div.find('div', {'class':"c-byline"}).span.nextSibling.nextSibling.time['datetime'].split('T')
            date = date[0]+' '+date[1].split('+')[0]
            body = soup.body.main.article.find('div',{'class':"l-sidebar-fixed l-segment l-article-body-segment"}).div.div.p.text
            news.append({'type_id':0, 'title':titl,'subtitle':subt,'autor':auth,'source':"The Verge",'img':imag,'txt':body,'link':url,'dat':date})
        except:
            t=1
    return news