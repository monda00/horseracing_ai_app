from rest_framework import routers
from django.urls import path
from .api import RaceViewSet, HorseViewSet, HorseDetailByRaceView

router = routers.DefaultRouter()
router.register('api/races', RaceViewSet, 'races')
router.register('api/horses', HorseViewSet, 'horses')

urlpatterns = [
    path('api/horses/race/<str:race_id>',
         HorseDetailByRaceView.as_view(), name='race_horse'),
]

urlpatterns += router.urls
