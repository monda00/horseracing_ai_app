from rest_framework import routers
from .api import RaceViewSet

router = routers.DefaultRouter()
router.register('api/races', RaceViewSet, 'races')

urlpatterns = router.urls
