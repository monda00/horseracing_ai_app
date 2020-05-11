from django.db import models

class Race(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateTimeField(null=True)
    result = models.CharField(max_length=200, null=True)
