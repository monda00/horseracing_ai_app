from django.urls import path
from .views import predict_race

urlpatterns = [
    path('api/predict', predict_race)
]
