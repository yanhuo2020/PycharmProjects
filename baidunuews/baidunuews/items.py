# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class BaidunuewsItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # 名称
    name = scrapy.Field()
    # 连接
    url = scrapy.Field()
    # 粉丝数
    fans = scrapy.Field()
    # 标签
    flag = scrapy.Field()
    # 类型
    type = scrapy.Field()
    # 内容
    content = scrapy.Field()
