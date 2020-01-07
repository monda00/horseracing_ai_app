from django.shortcuts import render
from .models import PredictModel

def result(request, race_id):
    return render(request, 'result')
