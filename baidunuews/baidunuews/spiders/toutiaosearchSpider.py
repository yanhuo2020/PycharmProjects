# -*- coding: utf-8 -*-
import scrapy
from pyquery import PyQuery as pq
from aip import AipNlp
import pymysql
import datetime
import time

class ToutiaospiderSpider(scrapy.Spider):
    name = 'toutiaoSpider'
    allowed_domains = ['toutiao.com']
    start_urls = ['http://toutiao.com/']
    # 连接数据库
    db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
    cursor = db.cursor()

    def parse(self, response):
        self.cursor.execute("SELECT id,type,keyworld FROM domaintrendmodel where type = '拼多多' order by id")
        for r in self.cursor.fetchall():
            for keyworld in r[2].split('|'):
                print(r[1] + "|" + keyworld)
                timestamp=int(round(time.time() * 1000000))
                if len(keyworld) == 0:
                    continue
                url = 'https://www.toutiao.com/api/search/content/?aid=24&app_name=web_search&offset=0&format=json&autoload=true&count=20&en_qc=1&cur_tab=1&from=search_tab&pd=synthesis&timestamp='+str(timestamp)+'&keyword='+keyworld
                request = scrapy.http.Request(url, callback=self.next, dont_filter=True)
                request.meta['domain'] = r[1]
                request.meta['keyworld'] = keyworld
                request.meta['requestUrl'] = url
                time.sleep(5)
                yield request
    def next(self, response):
        doc = pq(response.text)
        print(response.meta['requestUrl'])
        print('doc1')
        print(doc)
        Elements = doc('div[class="item-inner  y-box"]')
        for element in Elements.items():
            userUrl = element('div[class="title-box"]').children('a[class="link title"]').attr("href")
            request = scrapy.http.Request(userUrl, callback=self.next2, dont_filter=True)
            request.meta['Url'] = "https://www.toutiao.com"+userUrl
            request.meta['domain'] = response.meta['domain']
            request.meta['keyworld'] = response.meta['keyworld']
            print("userUrl")
            print(userUrl)
            print("domain")
            print(response.meta['domain'])
            print("keyworld")
            print(response.meta['keyworld'])
            yield request

    def next2(self, response):
        doc = pq(response.text)
        print('doc')
        print(doc)
        title = doc('div[class="article-box"]').children('h1[class="article-title"]').text()
        name = doc('div[class="article-box"]').children('div[class="article-sub"]').children('span:nth-child(2)').text()
        publicdate = doc('div[class="article-box"]').children('div[class="article-sub"]').children('span:nth-child(3)').text()
        content = doc('div[class = "article-content"]').text()
        if len(content) > 3000:
            content = content[0:3000]
        self.cursor.execute("SELECT id,type,keyworld FROM domaintrend where type = %s and title = %s and url=%s",
                            (response.meta['domain'], title, response.meta['Url']))
        data = self.cursor.fetchone()
        if data is None:
            APP_ID = '19787145'
            API_KEY = 'EQxDCM7KxeRkRFiLfGTGRa1V'
            SECRET_KEY = 'RDwWw7rqeEeBBiCLy4n4T0z2SgGGK04f'
            client = AipNlp(APP_ID, API_KEY, SECRET_KEY)
            print('Url')
            print(response.meta['Url'])
            print('title')
            print(title)
            print('content')
            print(content)
            keyworld = client.keyword(title, content)
            print(keyworld)
            maxSummaryLen = 300
            zaiqu = client.newsSummary(content, maxSummaryLen)
            tag = ""
            for item in keyworld['items']:
                tag = tag + '|' + item['tag']
            print(response.meta['domain'])
            print(response.meta['keyworld'])
            print(title)
            print(response.meta['Url'])
            print(tag)
            print(zaiqu)
            print(zaiqu['summary'])
            print(name)
            print(publicdate)
            self.cursor.execute(
                "insert into domaintrend(type,keyworld,title,url,flags,Summary,AuthorName,websit,date) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                (response.meta['domain'], response.meta['keyworld'], title, response.meta['Url'], tag, zaiqu['summary'],
                 name, 'Toutiao', publicdate))
            self.db.commit()
        else:
            pass