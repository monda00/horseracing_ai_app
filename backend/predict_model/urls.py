from django.urls import path
from .views import Predict

app_name = 'predict_model'
urlpatterns = [
    path('predict/', Predict.as_view(), name='predict'),
]