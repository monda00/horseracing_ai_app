from django.shortcuts import render
from .models import PredictModel

def result(request, race_id):
    predict_result = "buy now!!"
    context = {'result': predict_result,}
    return render(request, 'predict_model/index.html', context)
