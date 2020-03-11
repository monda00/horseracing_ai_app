from django.urls import path
from .views import Predict

app_name = 'predict_model'
urlpatterns = [
    path('', Predict.as_view()),
]