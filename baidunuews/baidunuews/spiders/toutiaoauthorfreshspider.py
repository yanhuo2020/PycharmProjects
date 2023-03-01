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
    name = 'toutiaoauthorfreshspider'
    allowed_domains = ['toutiao.com']
    start_urls = ['http://toutiao.com/']
    def __init__(self):
        self.lock = DeferredLock()
        self.db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
        self.cursor = self.db.cursor()
        with open("sign1.js", "r", encoding='utf-8') as f:
            js3 = f.read()
            self.ctx3 = execjs.compile(js3)
        self.current_proxy = None
    def parse(self, response):
        while True:
            self.cursor.execute("SELECT * FROM toutiaouser where updateDate is null or to_days(%s)-to_days(updateDate)>7 order by updateDate", (datetime.now().strftime('%Y-%m-%d')))
            results = self.cursor.fetchall()
            for row in results:
                authoridurl = row[1]
                userid = row[6]
                authorid = re.findall("/c/user/(.*?)/", authoridurl)[0]
                session = requests.session()
                user_agent = random.choice(USER_AGENT_LIST)
                headers = {'User-Agent': user_agent}
                detail_url = authoridurl
                self.process_request(False)
                session.proxies=self.current_proxy.proxy
                try:
                    response = session.get(detail_url, headers=headers,timeout=20)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                resp = response.content.decode()  # 响应文件中有粉丝和关注
                if len(re.findall("\"name\">(.*?)</span>", resp))==0:
                    continue
                if len(re.findall("/c/user/token/(.*?)/\">", resp)) == 0:
                    continue
                token = re.findall("/c/user/token/(.*?)/\">", resp)[0]
                userName = re.findall("\"name\">(.*?)</span>", resp)[0]
                fans_url = "https://www.toutiao.com/api/pc/user/fans_stat"
                fans_urlSign = "https://www.toutiao.com/toutiao/api/pc/user/fans_stat"
                fans_url = self.ctx3.call("getsign1", fans_url, fans_urlSign, user_agent, 'False','True','token='+token)  # 时间戳翻页
                data = {"token": token}
                try:
                    response = session.post(fans_url, headers=headers, data=data,timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                fansResp = response.content.decode()  # 响应文件中有粉丝和关注
                print(fansResp)
                fansJSON = json.loads(fansResp)
                fans = fansJSON["data"]["fans"]
                if fans.find("万") != -1:
                    fans = float(re.search(r"\d+\.?\d*", fans).group(0)) * 10000
                info={}
                info['fans'] = fans
                info['userUrl'] = detail_url
                info['userName'] = userName
                info['createDate'] =datetime.now().strftime('%Y-%m-%d')
                info['userid'] =userid
                print(info)
                now = datetime.strptime(info['createDate'], '%Y-%m-%d')
                self.processUser(info)
                self.processFans(info)
                # 文章列表
                artile_url = 'https://www.toutiao.com/api/pc/feed/?category=pc_profile_article&utm_source=toutiao&visit_user_id=' + format(
                    authorid) + '&max_behot_time=' + format(0)
                artile_urlSign = 'https://www.toutiao.com/toutiao/api/pc/feed/?category=pc_profile_article&utm_source=toutiao&visit_user_id=' + format(
                    authorid) + '&max_behot_time=' + format(0)
                artile_url = self.ctx3.call("getsign1",artile_url, artile_urlSign,user_agent,'False','False','')  # 时间戳翻页
                self.process_request(False)
                session.proxies = self.current_proxy.proxy
                try:
                    response = session.get(artile_url, headers=headers,timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                response.close()
                artile_resp = response.content  # 响应文件中有粉丝和关注
                try:
                    artile_respJson = json.loads(artile_resp)
                except JSONDecodeError:
                    print("Error:"+authorid+"文章抓取失败")
                else:
                    if "data" in artile_respJson:
                        print(authorid + "-文章处理")
                        self.processWenZhang(artile_respJson,now)
                # 文章列表
                '''artile_url1 = 'https://www.toutiao.com/toutiao/c/user/article/?page_type=' + format(
                    1) + '&user_id=' + format(authorid) + '&max_behot_time=' + format(max_behot_time) + '&count=' + format(20)
                artile_url1 = self.ctx3.call("getsign1",artile_url1,artile_url1, user_agent,True)  # 时间戳翻页
                artile_resp1 = session.get(artile_url1, headers=headers).content.decode('unicode_escape')
                print("artile_resp1")
                print(artile_resp1)
                artile_resp1 = json.loads(artile_resp1)
                self.processWenZhang(artile_resp1,now)'''
                # 微头条列表
                weitoutiao_url = 'https://www.toutiao.com/api/pc/feed/?category=pc_profile_ugc&utm_source=toutiao&visit_user_id='+format(authorid)+'&max_behot_time='+format(0)
                weitoutiao_urlSign = 'https://www.toutiao.com/toutiao/api/pc/feed/?category=pc_profile_ugc&utm_source=toutiao&visit_user_id='+format(authorid)+'&max_behot_time='+format(0)
                weitoutiao_url = self.ctx3.call("getsign1",weitoutiao_url, weitoutiao_urlSign,user_agent,False)  # 时间戳翻页
                self.process_request(False)
                session.proxies = self.current_proxy.proxy
                try:
                    response = session.get(weitoutiao_url, headers=headers,timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                response.close()
                weitoutiao_resp = response.content  # 响应文件中有粉丝和关注
                try:
                    weitoutiao_respJson = json.loads(weitoutiao_resp)
                except JSONDecodeError:
                    print("Error:" + authorid + "微头条抓取失败")
                else:
                    if "data" in weitoutiao_respJson:
                        print(authorid + "-微头条处理")
                        self.processWeitoutiao(weitoutiao_respJson, now)
                # 微头条列表
                '''weitoutiao_url1 = 'https://www.toutiao.com/api/pc/feed/?category=pc_profile_ugc&utm_source=toutiao&visit_user_id=' + format(
                    authorid) + '&max_behot_time=' + format(max_behot_time)
                weitoutiao_urlSign1 = 'https://www.toutiao.com/toutiao/api/pc/feed/?category=pc_profile_ugc&utm_source=toutiao&visit_user_id=' + format(
                    authorid) + '&max_behot_time=' + format(max_behot_time)
                weitoutiao_url1 = self.ctx3.call("getsign1",weitoutiao_url1,weitoutiao_urlSign1,user_agent,False)  # 时间戳翻页
                weitoutiao_resp1 = session.get(weitoutiao_url1, headers=headers).content.decode()
                weitoutiao_resp1 = json.loads(weitoutiao_resp1)
                self.processWeitoutiao(weitoutiao_resp1, now, type)'''
                # 视频列表
                video_url = 'https://www.toutiao.com/toutiao/c/user/article/?page_type=' + format(
                    0) + '&user_id=' + format(authorid) + '&max_behot_time=' + format(0) + '&count=' + format(20)
                video_url = self.ctx3.call("getsign1",video_url,video_url, user_agent,True)  # 时间戳翻页
                self.process_request(False)
                session.proxies = self.current_proxy.proxy
                try:
                    response = session.get(video_url, headers=headers,timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                response.close()
                video_resp = response.content  # 响应文件中有粉丝和关注
                try:
                    video_respJson = json.loads(video_resp)
                except JSONDecodeError:
                    print("Error:" + authorid + "视频抓取失败")
                else:
                    if "data" in video_respJson:
                        print(authorid + "-视频处理")
                        self.processVideo(video_respJson,now)
                # 视频列表
                '''video_url1 = 'https://www.toutiao.com/toutiao/c/user/article/?page_type=' + format(
                    1) + '&user_id=' + format(authorid) + '&max_behot_time=' + format(max_behot_time) + '&count=' + format(20)
                video_url1 = self.ctx3.call("getsign1",video_url1,video_url1, user_agent)  # 时间戳翻页
                video_resp1 = session.get(video_url1, headers=headers).content.decode('unicode_escape')
                video_resp1 = json.loads(video_resp1)
                self.processVideo(video_resp1,now)'''
                self.cursor.execute("delete FROM authorid where authorid = %s", ({authorid}))
                self.db.commit()

    def processUser(self, info):
        # 使用execute()方法执行SQL语句
        self.cursor.execute("SELECT * FROM toutiaouser where  url = %s and source = %s",
                            (info['userUrl'], info['source']))
        # 使用fetall()获取全部数据
        data = self.cursor.fetchone()
        if data is None:
            self.cursor.execute(
                "insert into toutiaouser(name,url,flag,fans,type,updateDate,source) values (%s,%s,%s,%s,%s,%s,%s)",
                (
                    info['userName'], info['userUrl'], '0', info['fans'], info['Type'], info['createDate'],
                    info['source']))
        else:
            if (data[4]).find(info['Type']) == -1:
                info['Type'] = data[4] + '|' + info['Type']
            else:
                info['Type'] = data[4]
            self.cursor.execute(
                "update toutiaouser set name = %s ,fans = %s , updateDate = %s,type = %s where   url = %s",
                (info['userName'], info['fans'], info['createDate'], info['Type'], info['userUrl']))
        self.db.commit()  # 提交数据

    def processContext(self, contentInfo):
        # 使用execute()方法执行SQL语句
        self.cursor.execute("SELECT * FROM toutiaocontext where title = %s and url = %s",
                            (contentInfo['title'], contentInfo['url']))
        # 使用fetall()获取数据
        data = self.cursor.fetchone()
        if data is None:
            self.cursor.execute(
                "insert into toutiaocontext(title,url,userName,readNumber,contentNumber,digNumber,date,type,domain,userid) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                (
                    contentInfo['title'], contentInfo['url'], contentInfo['userName'], contentInfo['readNumber'],
                    contentInfo['contextNumber'], contentInfo['digNumber'], contentInfo['date'], contentInfo['type'],
                    contentInfo['domain'], contentInfo['userid']))
        else:
            self.cursor.execute(
                "update toutiaocontext set readnumber = %s , contentnumber = %s ,dignumber = %s, type=%s where title = %s and url = %s",
                (
                    contentInfo['readNumber'], contentInfo['contextNumber'], contentInfo['digNumber'],
                    contentInfo['type'], contentInfo['title'],
                    contentInfo['url']))
        self.db.commit()  # 提交数据

    def processFans(self, contentInfo):
        # 使用execute()方法执行SQL语句
        self.cursor.execute("SELECT id FROM toutiaoUser where name = %s and source = %s",
                            (contentInfo['userName'], contentInfo['source']))
        userid = self.cursor.fetchone()
        self.cursor.execute("SELECT * FROM toutiaoUserFans where userid = %s and date = %s",
                            (userid, contentInfo['createDate']))
        # 使用fetall()获取数据
        data = self.cursor.fetchone()
        if data is None:
            self.cursor.execute("insert  into toutiaoUserFans values(%s,%s,%s)", (
                userid, contentInfo['fans'], contentInfo['createDate']))
        else:
            self.cursor.execute(
                "update toutiaoUserFans set fans = %s  where userid = %s and date = %s", (
                    contentInfo['fans'], userid, contentInfo['createDate']))
        self.db.commit()  # 提交数据

    def processWenZhang(self, artile_resp, now):
        for content in artile_resp['data']:
            if 'go_detail_count' not in content or 'comments_count' not in content or 'behot_time' not in content:
                continue
            readNumber = content['go_detail_count']
            contextNumber = content['comments_count']
            date = content['behot_time']
            contentTitle = content['title']
            if re.search(r"\d+\.?\d*", readNumber) == None or re.search(r"\d+\.?\d*", contextNumber) == None:
                continue
            if readNumber.find("万") != -1:
                readNumber = float(re.search(r"\d+\.?\d*", readNumber).group(0)) * 10000
            else:
                readNumber = re.search(r"\d+\.?\d*", readNumber).group(0)

            if contextNumber.find("万") != -1:
                contextNumber = float(re.search(r"\d+\.?\d*", contextNumber).group(0)) * 10000
            else:
                contextNumber = re.search(r"\d+\.?\d*", contextNumber).group(0)
            if len(contentTitle) > 200:
                contentTitle = contentTitle[0:199]
            contentTitle = self.filter_emoji(contentTitle, '').replace('\n', '').replace('\r', '')
            try:
                dateResult = datetime.strptime(date, "%Y-%m-%d")
            except:
                if date.find("1天内") != -1:
                    dateResult = now + timedelta(days=-1)
                else:
                    if date.find("1周内") != -1:
                        moverDays = - random.randint(2, 7)
                        dateResult = now + timedelta(days=moverDays)
                    else:
                        if date.find("天前") != -1:
                            dateResult = now + timedelta(days=-int(date[0:date.find("天前")]))
                        else:
                            continue
            contentInfo = {}
            contentInfo['title'] = contentTitle
            contentInfo['url'] = "www.toutiao.com" + content['source_url']
            contentInfo['userName'] = content['source']
            contentInfo['readNumber'] = readNumber
            contentInfo['contextNumber'] = contextNumber
            contentInfo['digNumber'] = 0
            contentInfo['date'] = dateResult.strftime('%Y-%m-%d')
            contentInfo['type'] = 0
            contentInfo['domain'] = content['tag']
            self.cursor.execute("SELECT id FROM toutiaoUser where name = %s and source = %s",
                                (content['source'], 0))
            userid = self.cursor.fetchone()
            contentInfo['userid'] = userid
            self.processContext(contentInfo)

    def processVideo(self, artile_resp, now):
        for content in artile_resp['data']:
            if 'go_detail_count' not in content or 'comments_count' not in content or 'title' not in content:
                continue
            readNumber = content['go_detail_count']
            contextNumber = content['comments_count']
            contentTitle = content['title']
            date = content['behot_time']
            if re.search(r"\d+\.?\d*", readNumber) == None or re.search(r"\d+\.?\d*", contextNumber) == None:
                continue
            if readNumber.find("万") != -1:
                readNumber = float(re.search(r"\d+\.?\d*", readNumber).group(0)) * 10000
            else:
                readNumber = re.search(r"\d+\.?\d*", readNumber).group(0)

            if contextNumber.find("万") != -1:
                contextNumber = float(re.search(r"\d+\.?\d*", contextNumber).group(0)) * 10000
            else:
                contextNumber = re.search(r"\d+\.?\d*", contextNumber).group(0)
            if len(contentTitle) > 200:
                contentTitle = contentTitle[0:199]
            contentTitle = self.filter_emoji(contentTitle, '').replace('\n', '').replace('\r', '')
            try:
                dateResult = datetime.strptime(date, "%Y-%m-%d")
            except:
                if date.find("1天内") != -1:
                    dateResult = now + timedelta(days=-1)
                else:
                    if date.find("1周内") != -1:
                        moverDays = - random.randint(2, 7)
                        dateResult = now + timedelta(days=moverDays)
                    else:
                        if date.find("天前") != -1:
                            dateResult = now + timedelta(days=-int(date[0:date.find("天前")]))
                        else:
                            continue
            contentInfo = {}
            contentInfo['title'] = contentTitle
            contentInfo['url'] = "www.toutiao.com" + content['source_url']
            contentInfo['userName'] = content['source']
            contentInfo['readNumber'] = readNumber
            contentInfo['contextNumber'] = contextNumber
            contentInfo['digNumber'] = 0
            contentInfo['date'] = dateResult.strftime('%Y-%m-%d')
            contentInfo['type'] = 2
            contentInfo['domain'] = content['tag']
            self.cursor.execute("SELECT id FROM toutiaoUser where name = %s and source = %s",
                                (content['source'], 0))
            userid = self.cursor.fetchone()
            contentInfo['userid'] = userid
            self.processContext(contentInfo)

    def processWeitoutiao(self, artile_resp, now, type):
        for content in artile_resp['data']:
            if 'concern_talk_cell' not in content:
                continue
            concern_talk_cell = content['concern_talk_cell']
            if concern_talk_cell is None:
                continue
            packed_json_str = json.loads(concern_talk_cell['packed_json_str'])
            contentTitle = packed_json_str['content']
            contextNumber = packed_json_str['comment_count']
            digNumber = packed_json_str['digg_count']
            readNumber = packed_json_str['display_count']
            date = packed_json_str['create_time']
            id = concern_talk_cell['id']
            userName = packed_json_str['user']['name']
            if re.search(r"\d+\.?\d*", readNumber) == None or re.search(r"\d+\.?\d*", contextNumber) == None:
                continue
            if digNumber.find("万") != -1:
                digNumber = float(re.search(r"\d+\.?\d*", digNumber).group(0)) * 10000
            else:
                digNumber = re.search(r"\d+\.?\d*", digNumber).group(0)
            if readNumber.find("万") != -1:
                readNumber = float(re.search(r"\d+\.?\d*", readNumber).group(0)) * 10000
            else:
                readNumber = re.search(r"\d+\.?\d*", readNumber).group(0)
            if contextNumber.find("万") != -1:
                contextNumber = float(re.search(r"\d+\.?\d*", contextNumber).group(0)) * 10000
            else:
                contextNumber = re.search(r"\d+\.?\d*", contextNumber).group(0)
            if len(contentTitle) > 200:
                contentTitle = contentTitle[0:199]
            contentTitle = self.filter_emoji(contentTitle, '').replace('\n', '').replace('\r', '')
            try:
                dateResult = datetime.strptime(date, "%Y-%m-%d")
            except:
                if date.find("1天内") != -1:
                    dateResult = now + timedelta(days=-1)
                else:
                    if date.find("1周内") != -1:
                        moverDays = - random.randint(2, 7)
                        dateResult = now + timedelta(days=moverDays)
                    else:
                        if date.find("天前") != -1:
                            dateResult = now + timedelta(days=-int(date[0:date.find("天前")]))
                        else:
                            continue
            contentInfo = {}
            contentInfo['title'] = contentTitle
            contentInfo['url'] = "www.toutiao.com/a" + format(id)
            contentInfo['userName'] = userName
            contentInfo['readNumber'] = readNumber
            contentInfo['contextNumber'] = contextNumber
            contentInfo['digNumber'] = digNumber
            contentInfo['date'] = dateResult.strftime('%Y-%m-%d')
            contentInfo['type'] = 1
            contentInfo['domain'] = type
            self.cursor.execute("SELECT id FROM toutiaoUser where name = %s and source = %s",
                                (content['source'], 0))
            userid = self.cursor.fetchone()
            contentInfo['userid'] = userid
            self.processContext(contentInfo)
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
