from django.urls import path
from .views import ListRaces, DetailRace

app_name = 'races'
urlpatterns = [
    path('', ListRaces.as_view()),
    path('<int:pk>/', DetailRace.as_view()),
]
