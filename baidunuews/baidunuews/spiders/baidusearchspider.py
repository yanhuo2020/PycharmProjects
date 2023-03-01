# -*- coding: utf-8 -*-
import scrapy
from pyquery import PyQuery as pq
from aip import AipNlp
import pymysql
import datetime
import time

class BaiduspiderSpider(scrapy.Spider):
    name = 'baidusearchspider'
    allowed_domains = ['baidu.com']
    start_urls = ['http://www.baidu.com/']
    # 连接数据库
    db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
    cursor = db.cursor()
    def parse(self, response):
        self.cursor.execute("SELECT id,type,keyworld FROM domaintrendmodel order by id")
        for r in self.cursor.fetchall():
            for keyworld in r[2].split('|'):
                print(r[1]+ "|"+keyworld)
                if len(keyworld) == 0 :
                    continue
                url = "https://www.baidu.com/s?ie=utf-8&cl=2&medium=2&rtt=1&bsst=1&rsv_dl=news_t_sk&tn=news&word=%E5%8D%8E%E4%B8%BA+%E8%81%94%E5%8F%91%E7%A7%91&rsv_sug3=1&rsv_sug4=142&rsv_sug1=1&rsv_sug2=0&inputT=2&rsv_sug=1"
                request = scrapy.http.Request(url,callback=self.next,dont_filter=True)
                request.meta['domain'] = r[1]
                request.meta['keyworld'] =keyworld
                yield request
    def next(self, response):
        doc = pq(response.text)
        Elements = doc('div[class = "result"]')
        print(doc)
        for element in Elements.items():
            print("1")
            userUrl =  element('h3[class = "c-title"]').children('a').attr("href")
            request = scrapy.http.Request(userUrl,callback=self.next2, dont_filter=True)
            request.meta['Url'] = userUrl
            request.meta['domain'] = response.meta['domain']
            request.meta['keyworld'] = response.meta['keyworld']
            print("userUrl"+userUrl)
            print("domain" + response.meta['domain'])
            print("keyworld" + response.meta['keyworld'])
            yield request
    def next2(self, response):
        doc = pq(response.text)
        print(doc)
        title = doc('div[class = "anci_header_content"]').children('div[class = "article-title"]').children('h2').text()
        name = doc('div[class = "article-desc clearfix"]').children('div[class = "author-txt"]').children('p[class = "author-name"]').text()
        publicdate = doc('div[class = "article-source article-source-bjh"]').children('span[class = "date"]').text()
        publictime = doc('div[class = "article-source article-source-bjh"]').children('span[class = "time"]').text()
        if (publicdate[len(publicdate)-8 : len(publicdate)-6]).isdigit():
            publicdate = '20'+ publicdate[len(publicdate) - 8: len(publicdate)]
        else:
            publicdate = str(datetime.datetime.now().year) + '-' + publicdate[len(publicdate) - 5: len(publicdate)]
        content = doc('div[class = "article-content"]').text()
        if len(content)>3000:
            content = content[0:3000]
        self.cursor.execute("SELECT id,type,keyworld FROM domaintrend where type = %s and title = %s and url=%s",
                            (response.meta['domain'], title, response.meta['Url']))
        data = self.cursor.fetchone()
        if data is None:
            APP_ID = '19787145'
            API_KEY = 'EQxDCM7KxeRkRFiLfGTGRa1V'
            SECRET_KEY = 'RDwWw7rqeEeBBiCLy4n4T0z2SgGGK04f'
            client = AipNlp(APP_ID, API_KEY, SECRET_KEY)
            keyworld = client.keyword(title, content)
            print(keyworld)
            maxSummaryLen = 300
            zaiqu = client.newsSummary(content, maxSummaryLen)
            tag = ""
            for item in keyworld['items']:
                tag = tag+'|'+item['tag']
            self.cursor.execute(
                "insert into domaintrend(type,keyworld,title,url,flags,Summary,AuthorName,websit,date) values (%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                ( response.meta['domain'],response.meta['keyworld'],title,response.meta['Url'],tag,zaiqu['summary'],name,'Baidu',publicdate))
            self.db.commit()
        else:
            pass