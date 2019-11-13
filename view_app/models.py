from django.db import models

class Race(models.Model):
    race_name = models.CharField(max_length=200)

    def __str__(self):
        return self.race_name
