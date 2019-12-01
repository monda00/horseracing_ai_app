from django.db import models
from django.utils import timezone

class Race(models.Model):
    race_name = models.CharField(max_length=200)
    race_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.race_name
