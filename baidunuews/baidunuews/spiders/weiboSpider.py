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
from pyquery import PyQuery as pq
import scrapy
from lxml import etree
from scrapy.settings.default_settings import DEFAULT_REQUEST_HEADERS
from twisted.internet.defer import DeferredLock
import http.cookiejar

class WeibospiderSpider(scrapy.Spider):
    name = 'weiboSpider'
    allowed_domains = ['weibo.com']
    start_urls = ['https://weibo.com/']
    def __init__(self):
        self.cookie = {}
        self.sub=''
        self.subp=''
        self.lock = DeferredLock()
        self.db = pymysql.connect("124.71.104.226", "root", "861201", "yanhuodb")
        self.cursor = self.db.cursor()
        self.current_proxy = None
        self.subpTimes = 0
        self.changeFoxyTimes = 0
        self.groupList = [['e-game','102803600012','102803_ctg1_600012_-_ctg1_600012','10000365'],['star','1028034288','102803_ctg1_4288_-_ctg1_4288','10000365'],
                          ['funny','1028034388','102803_ctg1_4388_-_ctg1_4388','10000365'],['emotion', '1028031988','102803_ctg1_1988_-_ctg1_1988','10000225'],
                          ['society', '1028034188','102803_ctg1_4188_-_ctg1_4188','10000365'],['movie', '1028033288','102803_ctg1_3288_-_ctg1_3288','10000365'],
                          ['lol', '102803600040', '102803_ctg1_600040_-_ctg1_600040', '10000365'],
                          ['game', '1028034888', '102803_ctg1_4888_-_ctg1_4888', '10000365'],
                          ['car', '1028035188', '102803_ctg1_5188_-_ctg1_5188', '10000365'],
                          ['news', '1028037978', '102803_ctg1_7978_-_ctg1_7978', '10000365'],
                          ['TV', '1028032488', '102803_ctg1_2488_-_ctg1_2488', '10000365'],
                          ['music', '1028035288', '102803_ctg1_5288_-_ctg1_5288', '10000365'],
                          ['food', '1028032688', '102803_ctg1_2688_-_ctg1_2688', '10000365'],
                          ['digit', '1028035088', '102803_ctg1_5088_-_ctg1_5088', '10000365'],
                          ['fashion', '1028034488', '102803_ctg1_4488_-_ctg1_4488', '10000365'],
                          ['military', '1028036688', '102803_ctg1_6688_-_ctg1_6688', '10000365'],
                          ['silm', '1028036488', '102803_ctg1_6488_-_ctg1_6488', '10000365'],
                          ['zhongcao', '102803600022', '102803_ctg1_600022_-_ctg1_600022', '10000365'],
                          ['constellatory', '1028031688', '102803_ctg1_1688_-_ctg1_1688', '10000365'],
                          ['makehealth', '1028036588', '102803_ctg1_6588_-_ctg1_6588', '10000365'],
                          ['pet', '1028032788', '102803_ctg1_2788_-_ctg1_2788', '10000365'],
                          ['makeup', '1028031588', '102803_ctg1_1588_-_ctg1_1588', '10000365'],
                          ['read', '1028034588', '102803_ctg1_4588_-_ctg1_4588', '10000365'],
                          ['sport', '1028034788', '102803_ctg1_4788_-_ctg1_4788', '10000365'],
                          ['law', '1028037388', '102803_ctg1_7388_-_ctg1_7388', '10000365'],
                          ['art', '1028035488', '102803_ctg1_5488_-_ctg1_5488', '10000365'],
                          ['baby', '1028033188', '102803_ctg1_3188_-_ctg1_3188', '10000365'],
                          ['health', '1028032188', '102803_ctg1_2188_-_ctg1_2188', '10000365'],
                          ['true', '1028036988', '102803_ctg1_6988_-_ctg1_6988', '10000365'],
                          ['residence', '1028035888', '102803_ctg1_5888_-_ctg1_5888', '10000365'],
                          ['administration', '1028035788', '102803_ctg1_5788_-_ctg1_5788', '10000365','政务'],
                          ['popularization', '1028035988', '102803_ctg1_5988_-_ctg1_5988', '10000365','科普'],
                          ['school', '1028031488', '102803_ctg1_1488_-_ctg1_1488', '10000365'],
                          ['tourism', '1028032588', '102803_ctg1_2588_-_ctg1_2588', '10000365','旅游'],
                          ['history', '1028036788', '102803_ctg1_6788_-_ctg1_6788', '10000365'],
                          ['sportsactivities', '1028031388', '102803_ctg1_1388_-_ctg1_1388', '10000365','体育'],
                          ['tech', '1028032088', '102803_ctg1_2088_-_ctg1_2088', '10000365','科技'],
                          ['show', '1028034688', '102803_ctg1_4688_-_ctg1_4688', '10000365','综艺'],
                          ['collect', '1028038189', '102803_ctg1_8189_-_ctg1_8189', '10000365','收藏'],
                          ['comic', '1028034688', '102803_ctg1_4688_-_ctg1_4688', '10000365','动漫'],
                          ['house', '1028035588', '102803_ctg1_5588_-_ctg1_5588', '10000365','房产'],
                          ['dance', '1028038788', '102803_ctg1_8788_-_ctg1_8788', '10000365'],
                          ['religion', '1028035688', '102803_ctg1_5688_-_ctg1_5688', '10000365'],
                          ['international', '1028035688', '102803_ctg1_5688_-_ctg1_5688', '10000365'],
                          ['photograph', '1028034988', '102803_ctg1_4988_-_ctg1_4988', '10000365'],
                          ['finance', '1028036388', '102803_ctg1_6388_-_ctg1_6388', '10000365'],
                          ['marry', '1028031788', '102803_ctg1_1788_-_ctg1_1788', '10000365'],
                          ['husbandman', '1028037188', '102803_ctg1_7188_-_ctg1_7188', '10000365','三农'],
                          ['Gameforpeace', '102803600004', '102803_ctg1_600004_-_ctg1_600004', '10000365', '吃鸡'],
                          ['education', '102803600080', '102803_ctg1_600080_-_ctg1_600080', '10000365', '教育'],
                          ['studiesofChinese', '102803600080', '102803_ctg1_600080_-_ctg1_600080', '10000365', '国学'],
                          ['publicwelfare', '102803600057', '102803_ctg1_600057_-_ctg1_600057', '10000365', '公益']]
    def parse(self, response):
        while True :
            for groupid in self.groupList:
                requests.adapters.DEFAULT_RETRIES = 5  # 增加重连次数
                session = requests.session()
                session.keep_alive = False  # 关闭多余连接
                user_agent = random.choice(USER_AGENT_LIST)
                headers = {'User-Agent': user_agent, 'Connection': 'close'}
                self.process_request(False)
                session.proxies = self.current_proxy.proxy
                data = {"refresh":"pulldown","group_id":groupid[1],"show_toplist":1,"extparam":"discover|new_feed","fid":groupid[2],
                        "lon":"120.210650","uicode":"10000511","count":"25","trim_level":"1","trim_page_recom":"0","containerid":groupid[2],
                        "fromlog":groupid[1],"wb_uistyle":"2","newinstall":"1","orifid":"","refresh_sourceid":groupid[3],"preAdInterval":"-1","lat":"130.313550",
                        "featurecode":"10000511","daily_total_times":"92","since_id":"0","oriuicode":"","need_jump_scheme":"1"}
                url = 'https://mapi.weibo.com/2/guest/statuses_unread_hot_timeline?skin=default&c=iphone&lang=zh_CN&s=ec73a759&ua=iPhone11,6__weibo__10.8.3__iphone__os13.6.1&aid=01A2hXIahrHdx88YBt341xm2TEa3rRupm412xCjUGdHNntFhE.&wm=3333_2001&sensors_device_id=A93E04CA-DD13-4B2C-9124-C234C2BEF886&launchid=10000365--x&sensors_is_first_day=false&sensors_mark=0&v_f=1&ft=1&uid=1014333127432&v_p=86&gsid=_2AkMoAfx7f8NhqwJRmfwdyG3kZYpazdxnEie34aQ2gJRM3HRl-wT92qhEytRV6Av31aDKQc9QZnX2mGGaFmEeAoEhk51BF&from=10A8393010&networktype=wifi&checktoken=624388c776e375cf9b4c3afb67369afe&b=0'
                try:
                    response = session.post(url, headers=headers, data=data, timeout=10)
                except requests.exceptions.RequestException as e:
                    print(e)
                    self.process_request(True)
                    session.proxies = self.current_proxy.proxy
                    continue
                try:
                    text = json.loads(response.text)
                except :
                    continue

                if "statuses" in text:
                    for status in text['statuses']:
                        try :
                            username = status['user']['name']
                            userid = status['user']['id']
                        except:
                            continue
                        datailUrl = 'https://weibo.com/u/'+format(userid)+'?is_all=1'
                        print(username)
                        print(datailUrl)
                        if self.sub == '' or self.subp == '':
                            self.getTid(session, headers)
                        try:
                            response = session.get(datailUrl, headers=headers,cookies =self.cookie,timeout=10)
                        except requests.exceptions.RequestException as e:
                            print(e)
                            self.process_request(True)
                            session.proxies = self.current_proxy.proxy
                            continue
                        resp = response.content.decode('UTF-8') # 响应文件中有粉丝和关注
                        html = etree.HTML(resp)
                        # 含有mid的html代码被隐藏在这一个json中
                        scriptList = html.xpath("//script")
                        if len(scriptList)==0 :
                            print('没有数据')
                            self.process_request(True)
                            session.proxies = self.current_proxy.proxy
                            continue
                        fensi = 0
                        guanzhu = 0
                        weibo = 0
                        for script in scriptList:
                            if  script.text is None:
                                continue
                            if script.text.find('>粉丝<') != -1:
                                mid_json = json.loads(script.text[8:-1])
                                doc = pq(mid_json['html'])
                                messageList = doc('td[class="S_line1"]')
                                for message in messageList :
                                    if pq(message)('span').html() =='粉丝' :
                                        fensi = pq(message)('strong').html()
                                    if pq(message)('span').html() =='关注' :
                                        guanzhu = pq(message)('strong').html()
                                    if pq(message)('span').html() =='微博' :
                                        weibo = pq(message)('strong').html()
                                info = {}
                                info['fans'] = fensi
                                info['userUrl'] = datailUrl
                                info['userName'] = username
                                info['createDate'] = datetime.now().strftime('%Y-%m-%d')
                                info['Type'] = groupid[0]
                                info['source'] = 1
                                print(info)
                                self.processUser(info)
                                self.processFans(info)
                            if script.text.find('WB_feed WB_feed_v3 WB_feed_v4') != -1 :
                                mid_json = json.loads(script.text[8:-1])
                                doc = pq(mid_json['html'])
                                weiboList = doc('div[action-data="cur_visible=0"]')
                                for weiboinfo in weiboList:
                                    weiboinfo = pq(weiboinfo)
                                    linkUrlList = weiboinfo('div[node-type="feed_list_content"] a[action-type="feed_list_url"]')
                                    for link in linkUrlList:
                                        linkpq = pq(link)
                                        print(linkpq)
                                        if linkpq('i[class="W_ficon ficon_cd_video"]'):
                                            print('视频')
                                            print(linkpq.attr('href'))
                                            '''try:
                                                response = session.get(linkpq.attr('href'), headers=headers,cookies=self.cookie, timeout=10)
                                            except requests.exceptions.RequestException as e:
                                                print(e)
                                                self.process_request(True)
                                                session.proxies = self.current_proxy.proxy'''
                                            videoLink = linkpq.attr('href')
                                            if len(videoLink) >200:
                                                continue
                                            '''videoLinkId = response.url.replace('https://weibo.com/tv/show/','').replace('?from=old_pc_videoshow','')
                                            videoLink = 'https://weibo.com/tv/api/component?page =' + str(('/tv/show/'+videoLinkId).encode(encoding='UTF-8',errors='strict'))
                                            videoLink = 'https://weibo.com/tv/api/component?page=' + '/tv/show/'.replace('/','%2F')+videoLinkId.replace(':','%3A')
                                            videoLink = 'https://weibo.com/tv/api/component?page=' + '/tv/show/'+videoLinkId
                                            print('videoLink')
                                            print(videoLink)
                                            try:
                                                data = {"data":{"Component_Play_Playinfo":{"oid":videoLinkId}}}
                                                print(data)
                                                print(self.cookie)
                                                response1 = session.post(videoLink, headers=headers, data = data, cookies=self.cookie,timeout=10)
                                                print(response1.url)
                                                print(response1.text)
                                                text = json.loads(response1.text)
                                                print(text)
                                            except requests.exceptions.RequestException as e:
                                                print(e)
                                                self.process_request(True)
                                                session.proxies = self.current_proxy.proxy
                                            videoMessage = pq(response.text)
                                            title = videoMessage('div[class="Detail_wrap_IZQWz"] div[class="Detail_tith3_2pyML"]').html()
                                            read = videoMessage('div[class ="woo-box-flex woo-box-alignCenter woo-box-justifyBetween Detail_tith4_3_UzS"] div[class="star-f16"]').html()
                                            forward = videoMessage('div[class="woo-box-flex woo-box-alignCenter"] i[class="star-font star-font--retweet"] span').html()
                                            comment = videoMessage('div[class="woo-box-flex woo-box-alignCenter"] i[class="star-font star-font--comment"] span').html()
                                            dig = videoMessage('div[class="woo-box-flex woo-box-alignCenter"] i[class="star-font star-font--like Detail_like_qAbgg"] span').html()
                                            '''
                                            contentInfo = {}
                                            contentInfo['title'] = ''
                                            contentInfo['url'] = videoLink
                                            contentInfo['userName'] = username
                                            contentInfo['readNumber'] = 0
                                            contentInfo['contextNumber'] = 0
                                            contentInfo['digNumber'] = 0
                                            contentInfo['date'] = datetime.now().strftime('%Y-%m-%d')
                                            contentInfo['type'] = 2
                                            contentInfo['domain'] = ''
                                            self.cursor.execute(
                                                "SELECT id FROM toutiaoUser where name = %s and source = %s",
                                                (username, 1))
                                            userid = self.cursor.fetchone()
                                            contentInfo['userid'] = userid
                                            print(contentInfo)
                                            self.processContext(contentInfo)
                                        else :
                                            if linkpq('i[class="W_ficon ficon_cd_longwb"]'):
                                                print('文章')
                                                print(linkpq.attr('href'))
                                                '''try:
                                                    response = session.get(linkpq.attr('href'), headers=headers, cookies=self.cookie, timeout=10)
                                                except requests.exceptions.RequestException as e:
                                                    print(e)
                                                    self.process_request(True)
                                                    session.proxies = self.current_proxy.proxy
                                                print(response.text)
                                                longweiboLink = pq(response.text)('A').attr('href')
                                                print(longweiboLink)
                                                try:
                                                    response = session.get(longweiboLink, headers=headers, cookies=self.cookie, timeout=10)
                                                except requests.exceptions.RequestException as e:
                                                    print(e)
                                                    self.process_request(True)
                                                    session.proxies = self.current_proxy.proxy
                                                longweiboMessage = pq(response.text)
                                                title = longweiboMessage('div[node-type="articleTitle"]').html()
                                                content = longweiboMessage('div[node-type="contentBody"]').html()
                                                date = longweiboMessage('div[class="authorinfo clearfix S_txt2"] div[class="time"]').html()
                                                readnumber = longweiboMessage('div[class="authorinfo clearfix S_txt2"] div[class="W_fr"] span').html()
                                                forward = longweiboMessage('span[node-type="forward_btn_text"]').html()
                                                comment = longweiboMessage('span[node-type="comment_btn_text"]').html()
                                                dig = longweiboMessage('span[node-type="like_status"] em').html()
                                                contentInfo = {}
                                                contentInfo['title'] = title
                                                contentInfo['url'] = longweiboLink
                                                contentInfo['userName'] = username
                                                if readnumber.find('万') != -1:
                                                    contentInfo['readNumber'] = re.findall(r"\d+\.?\d*",readnumber) * 10000
                                                else:
                                                    contentInfo['readNumber'] = re.findall(r"\d+\.?\d*", readnumber)
                                                if comment == '' or comment is None:
                                                    contextNumber = 0
                                                else :
                                                    if comment.find('万') != -1:
                                                        contextNumber = comment[0:comment.index('万')]*10000
                                                    else :
                                                        contextNumber = comment.replace('评论', '0')
    
                                                if dig == '' or dig is None:
                                                    digNumber = 0
                                                else :
                                                    if dig.find('万') != -1:
                                                        digNumber = dig[0:dig.index('万')] *10000
                                                    else :
                                                        digNumber = dig.replace('赞', '0')'''
                                                contentInfo = {}
                                                contentInfo['title'] = ''
                                                contentInfo['url'] = linkpq.attr('href')
                                                contentInfo['userName'] = username
                                                contentInfo['readNumber']=0
                                                contentInfo['contextNumber'] = 0
                                                contentInfo['digNumber'] = 0
                                                contentInfo['date'] = datetime.now().strftime('%Y-%m-%d')
                                                contentInfo['type'] = 0
                                                contentInfo['domain'] = ''
                                                self.cursor.execute(
                                                    "SELECT id FROM toutiaoUser where name = %s and source = %s",
                                                    (username, 1))
                                                userid = self.cursor.fetchone()
                                                contentInfo['userid'] = userid
                                                print(contentInfo)
                                                self.processContext(contentInfo)
                                            else :
                                                print('其他')
                                    title = weiboinfo('div[node-type="feed_list_content"]').text()
                                    date = weiboinfo('a[node-type="feed_list_item_date"]').attr('title')
                                    comment = weiboinfo('ul[class="WB_row_line WB_row_r4 clearfix S_line2"] span[node-type="comment_btn_text"] em:nth-child(2)').text()
                                    forward  =weiboinfo('ul[class="WB_row_line WB_row_r4 clearfix S_line2"] span[node-type="forward_btn_text"] em:nth-child(2)').text()
                                    dig = weiboinfo('ul[class="WB_row_line WB_row_r4 clearfix S_line2"] span[node-type="like_status"] em:nth-child(2)').text()
                                    weiboLink = weiboinfo('ul[class="WB_row_line WB_row_r4 clearfix S_line2"] li a[action-type="fl_forward"]').attr('action-data')
                                    contentInfo = {}
                                    if len(title) > 200:
                                        title = title[0:199]
                                    contentInfo['title'] = title
                                    contentInfo['url'] = re.findall('&url=(.*?)&mid=',weiboLink)[0]
                                    contentInfo['userName'] = username
                                    contentInfo['readNumber'] = 0
                                    if comment == '' or comment is None:
                                        contextNumber = 0
                                    else:
                                        if comment.find('万') != -1:
                                            contextNumber = int(comment[0:comment.index('万')]) * 10000
                                        else:
                                            contextNumber = comment.replace('评论', '0')

                                    if dig == '' or dig is None:
                                        digNumber = 0
                                    else:
                                        if dig.find('万') != -1:
                                            digNumber = int(dig[0:dig.index('万')]) * 10000
                                        else:
                                            digNumber = dig.replace('赞', '0')
                                    contentInfo['contextNumber'] = contextNumber
                                    contentInfo['digNumber'] = digNumber
                                    contentInfo['date'] = date[0:10]
                                    contentInfo['type'] = 1
                                    contentInfo['domain'] = ''
                                    self.cursor.execute("SELECT id FROM toutiaoUser where name = %s and source = %s",
                                                        (username, 1))
                                    userid = self.cursor.fetchone()
                                    contentInfo['userid'] = userid
                                    print(contentInfo)
                                    self.processContext(contentInfo)
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

    def getTid(self,session,headers):
        try:
            data1 = {"cb": "gen_callback",
                     "fp": {"os": "1", "browser": "Chrome84,0,4147,125", "fonts": "undefined", "screenInfo": "1366*768*24",
                            "plugins": "Portable Document Format::internal-pdf-viewer::Chrome PDF Plugin|::mhjfbmdgcfjbbpaeojofohoefgiehjai::Chrome PDF Viewer|::internal-nacl-plugin::Native Client"}}
            rese = session.post('https://passport.weibo.com/visitor/genvisitor', headers=headers, data=data1, timeout=20)
            rese = rese.content.decode()  # 响应文件中有粉丝和关注
            tid = re.findall("\"tid\":\"(.*?)\",\"new_tid\"", rese)[0]
            rese1 = session.get(
                'https://passport.weibo.com/visitor/visitor?a=incarnate&t=' + tid + '&w=2&c=100&gc=&cb=cross_domain&from=weibo&_rand=0.03624103785332644',
                headers=headers,timeout=10)
            text = rese1.content.decode()
            self.sub = re.findall("\"sub\":\"(.*?)\",\"subp\"", text)[0]
            self.subp = re.findall("\"subp\":\"(.*?)\"}}", text)[0]
            cookie_t1 = requests.utils.dict_from_cookiejar(rese1.cookies)
            cookie_t1.update({'sub': self.sub, 'subp': self.subp})
            self.cookie = cookie_t1
            print(self.cookie)
        except :
            print('无法获取sub')
            self.subpTimes = self.subpTimes +1
            if self.subpTimes>20 :
                if self.changeFoxyTimes >3:
                    time.sleep(600)
                self.process_request(True)
                session.proxies = self.current_proxy.proxy
                self.subpTimes = 0
                self.changeFoxyTimes = self.changeFoxyTimes +1
            self.getTid(session,headers)

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