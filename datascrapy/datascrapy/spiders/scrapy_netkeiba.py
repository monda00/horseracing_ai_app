# -*- coding: utf-8 -*-
import scrapy
from datascrapy.items import RaceItem


class ScrapyNetkeibaSpider(scrapy.Spider):
    name = 'scrapy_netkeiba'
    allowed_domains = ['https://db.sp.netkeiba.com']
    start_urls = ['https://db.sp.netkeiba.com/']

    def parse(self, response):
        item = RaceItem()
        item['name'] = 'hoge'

        yield item
