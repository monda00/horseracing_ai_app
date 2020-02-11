from django.db import models

class PredictModel(models.Model):
    race_id = models.CharField(max_length=200)
    result = models.CharField(max_length=200)

    def __str__(self):
        return self.race_id

