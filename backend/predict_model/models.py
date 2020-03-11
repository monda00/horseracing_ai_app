from django.db import models

class PredictModel(models.Model):
    predict = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.predict
