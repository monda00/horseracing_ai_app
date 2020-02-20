from django.urls import path
from rest_framework import routers
from . import views

app_name = 'predict_model'
urlpatterns = [
    path('predict/', views.Predict.as_view(), name='predict'),
]