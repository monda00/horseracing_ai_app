from django.db import models

class Race(models.Model):
    race_name = models.CharField(max_length=200)
    race_date = models.DateTimeField('race date')

    def __str__(self):
        return self.race_name
