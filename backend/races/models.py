from django.db import models
from django.utils import timezone

class Race(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateTimeField(null=True)
    result  = models.CharField(max_length=200, null=True)
    predict = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name
