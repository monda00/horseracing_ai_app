# -*- coding: utf-8 -*-
from races.models import Race


class DatascrapyPipeline:
    def open_spider(self, spider):
        '''
        スクレイピングする起点となるレースを求める
        '''
        spider.start_raceid = Race.objects.all().order_by("date_time")[0]
        print(spider.start_raceid)

    def process_item(self, item, spider):
        '''
        スクレイピングしたデータとdjangoのmodelデータから過去のレースデータを探し出す
        '''
        item.save()
        return item
