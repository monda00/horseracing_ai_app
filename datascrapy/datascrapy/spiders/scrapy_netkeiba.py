# -*- coding: utf-8 -*-
import scrapy


class ScrapyNetkeibaSpider(scrapy.Spider):
    name = 'scrapy_netkeiba'
    allowed_domains = ['https://db.sp.netkeiba.com']
    start_urls = ['http://https://db.sp.netkeiba.com/']

    def parse(self, response):
        pass
