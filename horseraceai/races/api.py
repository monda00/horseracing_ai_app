from races.models import Race
from rest_framework import viewsets, permissions
from .serializers import RaceSerializer

class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RaceSerializer
