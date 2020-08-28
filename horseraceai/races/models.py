from django.db import models


class Race(models.Model):
    '''
    レース情報
    '''
    race_id = models.CharField(max_length=50)
    name = models.CharField(max_length=200)
    place = models.CharField(max_length=50)
    race_horse_number = models.IntegerField()
    distance = models.IntegerField()
    clockwise = models.CharField(max_length=1)
    field_type = models.CharField(max_length=1)
    field_condition = models.CharField(max_length=1)
    weather = models.CharField(max_length=1)
    date_time = models.DateTimeField(null=True)
    result = models.CharField(max_length=200, null=True)


class Horse(models.Model):
    '''
    馬情報
    '''
    race = models.ForeignKey(Race, on_delete=models.CASCADE)
    horse_number = models.IntegerField()
    frame_number = models.IntegerField()
    age = models.IntegerField()
    gen = models.CharField(max_length=1)
    weight = models.IntegerField()
    weight_diff = models.IntegerField()
    burden_weight = models.IntegerField()
