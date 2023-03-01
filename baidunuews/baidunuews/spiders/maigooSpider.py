# -*- coding: utf-8 -*-
import datetime
import time
import json
import random
from datetime import datetime, timedelta
import re
from json import JSONDecodeError
from baidunuews.middleUA import ProxyModel
import requests
from baidunuews.settings import USER_AGENT_LIST
import execjs
import pymysql
import scrapy
from scrapy.settings.default_settings import DEFAULT_REQUEST_HEADERS
from twisted.internet.defer import DeferredLock
from pyquery import PyQuery as pq


class MaigooSpider(scrapy.Spider):
    name = 'maigoo'
    allowed_domains = ['maigoo.com']
    start_urls = ['http://maigoo.com/']
    def __init__(self):
        self.lock = DeferredLock()
        self.db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
        self.cursor = self.db.cursor()
        self.current_proxy = None
        self.urlList = [['服务相关','https://www.maigoo.com/brand/list_5176.html'],
                        ['建材/家具','https://www.maigoo.com/brand/list_7.html'],
                        ['科技/厨电','https://www.maigoo.com/brand/list_1.html'],
                        ['美妆/装扮','https://www.maigoo.com/brand/list_4.html'],
                        ['美食/饮食','https://www.maigoo.com/brand/list_8.html'],
                        ['汽车/工具','https://www.maigoo.com/brand/list_9.html'],
                        ['日用品','https://www.maigoo.com/brand/list_5.html'],
                        ['健康/保健','https://www.maigoo.com/brand/list_10.html'],
                        ['教育/母婴','https://www.maigoo.com/brand/list_5196.html'],
                        ['运动/娱乐','https://www.maigoo.com/brand/list_48.html']]
    def parse(self, response):
        for url in self.urlList:
            requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
            session = requests.session()
            session.keep_alive = False  # 关闭多余连接
            user_agent = random.choice(USER_AGENT_LIST)
            headers = {'User-Agent': user_agent, 'Connection': 'close'}
            self.process_request(False)
            session.proxies = self.current_proxy.proxy
            try:
                response = session.get(url[1], headers=headers, timeout=10)
            except requests.exceptions.RequestException as e:
                print(e)
                self.process_request(True)
                session.proxies = self.current_proxy.proxy
            doc = pq(response.text)
            Elements = doc('div[class="dbox"]')
            element =Elements.eq(1)
            subTypes = element('div[class="leval"]')
            for subType in subTypes.items():
                catid = subType.attr("data-catid")
                type = subType.html()
                try:
                    response = session.get('https://www.maigoo.com/brand/list_'+catid+'.html', headers=headers, timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                doc1 = pq(response.text)
                Elements1 = doc1('dl[data-keyname="catid"] div[class="dbox"]')
                print(Elements1)
                print(Elements1.size())
                if Elements1.size() >2:
                    self.getBrandList(Elements1.eq(2),session,headers,type,url)
                else:
                    if Elements1.size() ==2:
                        self.getBrandList(Elements1.eq(1),session,headers,type,url)
                    else:
                        continue
    def getBrandList(self,element,session,headers,type,url):
        subTypes = element('div[class="leval"]')
        for subType in subTypes.items():
            catid = subType.attr("data-catid")
            type1 = subType.html()
            if catid is not None:
                pageSize = 1
                while pageSize<100:
                    print('https://www.maigoo.com/brand/list_' + catid + '.html?page=' + format(pageSize) + '&ajax=1&maxpage=&tabnum=&sort=&defaultids=&start=&thirdaction=&subaction=resultlist&action=searchlist')
                    try:
                        response = session.get(
                            'https://www.maigoo.com/brand/list_' + catid + '.html?page=' + format(pageSize) + '&ajax=1&maxpage=&tabnum=&sort=&defaultids=&start=&thirdaction=&subaction=resultlist&action=searchlist',
                            headers=headers, timeout=10)
                    except requests.exceptions.RequestException as e:
                        print(e)
                        self.process_request(True)
                        session.proxies = self.current_proxy.proxy
                    doc = pq(response.text)
                    Elements = doc('li[class="item eee "]')
                    elementList = Elements.items()
                    print(Elements.size())
                    if Elements.size() == 0:
                        break
                    for elemet in elementList:
                        href = elemet('div[class="branddesc"] div[class="info"] a').attr('href')
                        name = elemet('div[class="branddesc"] div[class="info"] a').html()
                        compute = elemet('div[class="branddesc"] div[class="info"] span').html()
                        jianjie = elemet('div[class="branddesc"] div[class="rongyu dhidden2 c888"]').html()
                        eshops = elemet('div[class="branddesc"] div[class="btnlist"] a[rel="nofollow"]')
                        jdziying = ''
                        jdqijian = ''
                        taobaoqijian=''
                        for eshop in eshops:
                            print(pq(eshop).html())
                            print(pq(eshop)('em').html())
                            if pq(eshop)('em').html()=='JD自营店':
                                jdziying =  pq(eshop).attr('href')
                            else:
                                if pq(eshop)('em').html()=='JD旗舰店':
                                    jdqijian= pq(eshop).attr('href')
                                else:
                                    taobaoqijian = pq(eshop).attr('href')

                        info = {}
                        info['type'] = url[0]
                        if type is not None:
                            type = type.replace(' ', '').replace('\n', '')
                        info['subType'] = type
                        if type1 is not None:
                            type1 = type1.replace(' ', '').replace('\n', '')
                        info['subType1'] = type1
                        info['href'] = href
                        info['name'] = name
                        if compute is not None:
                            compute = compute.replace('(', '').replace('<em>)</em>', '')
                        info['company'] = compute
                        info['jianjie'] = jianjie
                        info['jdziying'] = jdziying
                        info['jdqijian'] = jdqijian
                        info['taobaoqijian'] = taobaoqijian
                        print(info)
                        self.processBrand(info)
                    pageSize = pageSize+1

    def processBrand(self,contentInfo):
        # 使用execute()方法执行SQL语句
        self.cursor.execute("SELECT * FROM BrandInfo where name = %s and type = %s and subType = %s and subType1 = %s",(contentInfo['name'],contentInfo['type'],contentInfo['subType'],contentInfo['subType1']))
        # 使用fetall()获取数据
        data = self.cursor.fetchone()
        if data is None:
            self.cursor.execute(
                "insert into BrandInfo(type,subType,subType1,href,name,company,jianjie,jdziying,jdqijian,taobaoqijian) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                (
                    contentInfo['type'], contentInfo['subType'], contentInfo['subType1'], contentInfo['href'],
                    contentInfo['name'], contentInfo['company'], contentInfo['jianjie'],contentInfo['jdziying'],contentInfo['jdqijian'],contentInfo['taobaoqijian']))
            self.db.commit()  # 提交数据
        else:
            self.cursor.execute(
                "update BrandInfo set  company = %s, jianjie = %s,jdziying =%s,jdqijian = %s,taobaoqijian=%s where type=%s and  subType = %s and subType1 = %s and name =%s ",
                (
                    contentInfo['company'], contentInfo['jianjie'], contentInfo['jdziying'],contentInfo['jdqijian'],contentInfo['taobaoqijian'],contentInfo['type'],
                    contentInfo['subType'], contentInfo['subType1'],contentInfo['name']))

    def process_request(self, isFause):
        # request.headers['cookie'] = 'tt_webid=6804738137366808078; WEATHER_CITY=%E5%8C%97%E4%BA%AC; tt_webid=6804738137366808078; csrftoken=0fd7f99ab3fd475b7ac5f49f37be9a1c; UM_distinctid=1713eb2715d827-0e33537604ad6a-4313f6a-100200-1713eb2715f727; CNZZDATA1259612802=1092443084-1585894420-https%253A%252F%252Fwww.toutiao.com%252F%7C1585894420; _ga=GA1.2.2069035635.1585894814; SLARDAR_WEB_ID=80869437-d09e-40c4-a6d5-5570e4ca53de; cp=5E9EB77BF1D81E1; gr_user_id=d093f480-1c1d-4018-b233-a048e0745489; grwng_uid=e359fced-b514-4e9a-a266-bfffa77fe7b8; login_flag=81dfeab6694c56da26ee8c19f97f8c17; passport_auth_status=760b3bc8a759b0f52d12dbd1e8f51a72%2C; ttcid=796db0dfdfca4744a1a63375697f92df11; s_v_web_id=verify_ka1up0ql_DjA8A5h1_ZIlr_4F3N_8j06_HLVVZR8bn3z1; tt_scid=WPHXO4a3oFz6leP7e-EfcQ-BDs9BV-X0M.f9MDxBvTrfWcbyuRtQ38JaAOpHaYihc1f3'
        if self.current_proxy is None or self.current_proxy.is_expiring or isFause:
            # if 'proxy' not in request.meta :
            # 请求代理
            self.update_proxy(isFause)

    def process_response(self, request, response, spider):
        # 如果对方重定向（302）去验证码的网页，换掉代理IP
        # 'captcha' in response.url 指的是有时候验证码的网页返回的状态码是200，所以用这个作为辨识的标志
        if response.status != 200 or 'captcha' in response.url:
            # 如果来到这里，说明这个请求已经被boss直聘识别为爬虫了
            # 所以这个请求就相当于什么都没有获取到
            # 所以要重新返回request，让这个请求重新加入到调度中
            # 下次再发送
            if not self.current_proxy.blacked: self.current_proxy.blacked = True
            self.update_proxy()
            print('%s代理失效' % self.current_proxy.proxy)
            request.meta['proxy'] = self.current_proxy.proxy
            return request

        # 如果是正常的话，记得最后要返回response
        # 如果不返回，这个response就不会被传到爬虫那里去
        # 也就得不到解析
        return response

    def update_proxy(self, isFause):
        # lock是属于多线程中的一个概念，因为这里scrapy是采用异步的，可以直接看成多线程
        # 所以有可能出现这样的情况，爬虫在爬取一个网页的时候，忽然被对方封了，这时候就会来到这里
        # 获取新的IP，但是同时会有多条线程来这里请求，那么就会出现浪费代理IP的请求，所以这这里加上了锁
        # 锁的作用是在同一时间段，所有线程只能有一条线程可以访问锁内的代码，这个时候一条线程获得新的代理IP
        # 而这个代理IP是可以用在所有线程的，这样子别的线程就可以继续运行了，减少了代理IP（钱）的浪费
        self.lock.acquire()
        # 判断换线程的条件
        # 1.目前没有使用代理IP
        # 2.到线程过期的时间了
        # 3.目前IP已经被对方封了
        # 满足以上其中一种情况就可以换代理IP了
        if not self.current_proxy or self.current_proxy.is_expiring or self.current_proxy.blacked or isFause:
            # 豌豆生成的api,但是太慢了
            url = r'http://127.0.0.1:59977/getip?price=0&word=&count=1&type=json&detail=true'
            data = self.getProxy(url)
            proxy_model = ProxyModel(data)
            print('重新获取了一个代理：%s' % proxy_model.proxy)
            self.current_proxy = proxy_model
            return proxy_model
        self.lock.release()

    def getProxy(self, url):
        try:
            response = requests.get(url=url, headers=DEFAULT_REQUEST_HEADERS)
            text = json.loads(response.text)
            if "error" in text:
                time.sleep(10)
                return self.getProxy(url)
            print(text)
            data = text[0]
        except:
            time.sleep(10)
            return self.getProxy(url)
        return data

    # 过滤表情
    def filter_emoji(self, desstr, restr):
        # 过滤表情
        co = re.compile(u'[\uD800-\uDBFF][\uDC00-\uDFFF]')
        return co.sub(restr, desstr)