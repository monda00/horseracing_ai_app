# -*- coding: utf-8 -*-
import scrapy
from datascrapy.items import RaceItem
import datetime


class ScrapyNetkeibaSpider(scrapy.Spider):
    name = 'scrapy_netkeiba'
    allowed_domains = ['https://db.sp.netkeiba.com']
    start_urls = ['https://db.sp.netkeiba.com/']

    def parse(self, response):
        item = RaceItem()
        item['race_id'] = '20201212'
        item['name'] = 'hoge'
        item['place'] = 'place'
        item['race_horse_number'] = 1
        item['distance'] = 100
        item['clockwise'] = 'c'
        item['field_type'] = 'f'
        item['field_condition'] = 'f'
        item['weather'] = 'w'
        item['date_time'] = datetime.datetime.now()

        yield item
