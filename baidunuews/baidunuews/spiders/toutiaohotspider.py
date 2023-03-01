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
class ToutiaoauthorspiderSpider(scrapy.Spider):
    name = 'toutiaohotspider'
    allowed_domains = ['toutiao.com']
    start_urls = ['http://toutiao.com/']
    def __init__(self):
        self.lock = DeferredLock()
        self.db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
        self.cursor = self.db.cursor()

        self.current_proxy = None

    def parse(self, response):
        while True:
                hotUrl = 'https://api3-normal-c-lf.snssdk.com/api/feed/hotboard_online/v1/?category=hotboard_online&count=50&extra=%7B%22CardStyle%22:0,%22JumpToWebList%22:true,%22IsHotTabChannel%22:true%7D&style_type=18&client_extra_params=%7B%22hot_board_source%22%3A%22hot_board%22%2C%22style_id%22%3A%2210006%22%7D&version_code=7.7.3&tma_jssdk_version=1.64.0.4&app_name=news_article&vid=E672AB98-447D-4E05-81F0-CD344B03622B&device_id=70334497208&channel=App%20Store&resolution=1242*2688&aid=13&ab_feature=794527,1662483,1538699,1650563&ab_version=662176,1419036,668775,1640908,1474415,1529253,1190525,1157750,1549051,1419597,1629529,1469498,1484965,1576657,1593455,1742596,668779,662099,668774,1634983,1740516,1742770,660830&ab_group=794527,1662483,1538699,1650563&openudid=b15270aa8481021cc05b9fc8abb7024f0b743f8f&pos=5pe9vb/88Pzt3vTp5L+9p72/ewAweCoDeCUfv7GXvb2//vTp5L+9p72/ewAweCoDeCUfv7GXvb2/8fLz+vTp6Pn4v72nvayvrbOsq6usr6Wvra2kqKmlq7GXvb2/8fzp9Ono+fi/vae9rq2zrKWprqiuqKukpaqlqaqssZe9vb/88Pzt0fzp9Ono+fi/vae9rq2zrKWprqiuqKukpaqlqaqssZe9vb/88Pzt0fLz+vTp6Pn4v72nvayvrbOsq6usr6Wvra2kqKmlq7GXvb2/8fL+/PHC8fzp+O7pwu3y7r+9p73ml729vb2/6fTw+O7p/PDtv72nvayopKysq6iorKWzr6ikr62ppLGXvb29vb/t7/Lr9PP++L+9p72/eygEeywCegEcv7GXvb29vb/+9Onkv72nvb97ADB4KgN4JR+/sZe9vb29v/7y8u/59PP86fjL/PHo+O6/vae95pe9vb29vb2/8fLz+vTp6Pn4v72nvayvrbOsq6usr6Wvra2kqKmlq7GXvb29vb29v/H86fTp6Pn4v72nva6ts6ylqa6orqirpKWqpamqrJe9vb294LGXvb29vb/8+fnv+O7uv72nvb97KAR7LAJ6ARx7ADB4KgN4JR97JjV7LAJ4ESd7KDt7LyJ1PAp0HA56HDZ6HzF4OTp0HA6ppKV4Eiq/l7294Jfg&cdid=223A6C9E-AD30-44B8-BD36-1D723E75F8C1&update_version_code=77321&idfv=E672AB98-447D-4E05-81F0-CD344B03622B&ac=WIFI&os_version=13.4.1&ssmix=a&device_platform=iphone&iid=2400975954645117&ab_client=a1,f2,f7,e1&device_type=iPhone%20XS%20Max&idfa=44C7753B-4127-4F67-A816-62FF86342B91'
                requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
                session = requests.session()
                session.keep_alive = False  # 关闭多余连接
                user_agent = random.choice(USER_AGENT_LIST)
                headers = {'User-Agent': user_agent,'Connection': 'close'}
                self.process_request(False)
                session.proxies = self.current_proxy.proxy
                try:
                    response = session.get(hotUrl, headers=headers,timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                resp = response.json() # 响应文件中有粉丝和关注
                data = resp['data']
                for i in range(len(data)):
                    dataDetail = data[i]
                    content = dataDetail['content']
                    content = json.loads(content)
                    title = content['raw_data']['title']
                    hotvalue = content['raw_data']['hot_value']
                    print(title)
                    print(hotvalue)
                    date = datetime.now().strftime('%Y-%m-%d')
                    self.cursor.execute("SELECT * FROM yanhuodb.toutiaohot where  title= %s and date = %s", (title,date))
                    hotData = self.cursor.fetchone()
                    if hotData is None:
                        self.cursor.execute(
                            "insert into toutiaohot(title,hotvalue,date) value (%s,%s,%s)",
                            (title, hotvalue, date))
                        self.db.commit()
                    else:
                        '''print(hotvalue)
                        print(title)
                        print(datetime.now().strftime('%Y-%m-%d'))
                        self.cursor.execute("update toutiaohot set hotvalue=%s where title=%s and date =%s)",(hotvalue,title,date))
                        self.db.commit()'''
                time.sleep(1200)
            
    def process_request(self,isFause):
        #request.headers['cookie'] = 'tt_webid=6804738137366808078; WEATHER_CITY=%E5%8C%97%E4%BA%AC; tt_webid=6804738137366808078; csrftoken=0fd7f99ab3fd475b7ac5f49f37be9a1c; UM_distinctid=1713eb2715d827-0e33537604ad6a-4313f6a-100200-1713eb2715f727; CNZZDATA1259612802=1092443084-1585894420-https%253A%252F%252Fwww.toutiao.com%252F%7C1585894420; _ga=GA1.2.2069035635.1585894814; SLARDAR_WEB_ID=80869437-d09e-40c4-a6d5-5570e4ca53de; cp=5E9EB77BF1D81E1; gr_user_id=d093f480-1c1d-4018-b233-a048e0745489; grwng_uid=e359fced-b514-4e9a-a266-bfffa77fe7b8; login_flag=81dfeab6694c56da26ee8c19f97f8c17; passport_auth_status=760b3bc8a759b0f52d12dbd1e8f51a72%2C; ttcid=796db0dfdfca4744a1a63375697f92df11; s_v_web_id=verify_ka1up0ql_DjA8A5h1_ZIlr_4F3N_8j06_HLVVZR8bn3z1; tt_scid=WPHXO4a3oFz6leP7e-EfcQ-BDs9BV-X0M.f9MDxBvTrfWcbyuRtQ38JaAOpHaYihc1f3'
        if self.current_proxy is None or self.current_proxy.is_expiring or isFause:
        #if 'proxy' not in request.meta :
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
            if not self.current_proxy.blacked:self.current_proxy.blacked = True
            self.update_proxy()
            print('%s代理失效' % self.current_proxy.proxy)
            request.meta['proxy'] = self.current_proxy.proxy
            return request

        # 如果是正常的话，记得最后要返回response
        # 如果不返回，这个response就不会被传到爬虫那里去
        # 也就得不到解析
        return response

    def update_proxy(self,isFause):
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

    def getProxy(self,url):
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
    def filter_emoji(self,desstr, restr):
        # 过滤表情
        co = re.compile(u'[\uD800-\uDBFF][\uDC00-\uDFFF]')
        return co.sub(restr, desstr)
