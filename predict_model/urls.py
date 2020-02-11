from django.urls import path
from . import views

app_name = 'predict_model'
urlpatterns = [
  path('<str:race_id>/', views.result, name='result')
]