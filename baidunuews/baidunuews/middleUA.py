import json
from pip._vendor import requests
from scrapy.settings.default_settings import DEFAULT_REQUEST_HEADERS
from twisted.internet.defer import DeferredLock
from datetime import datetime, timedelta

class RandomProxy(object):
    def __init__(self):
        self.current_proxy = None
        self.lock = DeferredLock()
        self.update_proxy(False)
    def update_proxy(self,isFauce):
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
        if not self.current_proxy or self.current_proxy.is_expiring or self.current_proxy.blacked or isFauce:
            # 豌豆生成的api,但是太慢了
            url = r'http://127.0.0.1:59977/getip?price=0&word=&count=1&type=json&detail=true'
            response = requests.get(url=url, headers=DEFAULT_REQUEST_HEADERS)
            text = json.loads(response.text)
            print(text)
            data = text[0]
            proxy_model = ProxyModel(data)
            print('重新获取了一个代理：%s' % proxy_model.proxy)
            self.current_proxy = proxy_model

class ProxyModel(object):
    def __init__(self, data):
        self.ip = data['ip']
        self.port = data['port']
        self.expire_str = int(data['expires_time'])
        dateArray = datetime.fromtimestamp(self.expire_str)
        self.expire_str = dateArray.strftime("%Y-%m-%d %H:%M:%S")
        self.proxy ={'https':'http://' + '%s:%s' % (self.ip, self.port),'http':'http://' + '%s:%s' % (self.ip, self.port)}
        self.expire_time = self.detail_time
        # 代理是否已经被拉入黑名单了
        self.blacked = False
    # 这个函数用于把str格式的过期时间（expire_time）转化为datetime格式，方便我们来
    # 根据过期时间换新的代理
    def setBlacked(self,isBlacked):
        self.blacked = isBlacked
    @property
    def detail_time(self):
        date_str, time_str = self.expire_str.split(" ")
        print(date_str)
        print(time_str)
        year, month, day = date_str.split('-')
        hour, minute, second = time_str.split(':')
        expire_time = datetime(
            year=int(year),
            month=int(month),
            day=int(day),
            hour=int(hour),
            minute=int(minute),
            second=int(second),
        )
        return expire_time
    # 比较代理的过期时间和现在的时间
    # 如果这个代理的存活时间少于10，那么就要准备更换代理IP了
    @property
    def is_expiring(self):
        now = datetime.now()
        if (self.expire_time - now) < timedelta(seconds=10):
            return True
        else:
            return False