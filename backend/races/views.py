from rest_framework import generics
from .models import Race
from .serializers import RaceSerializer

class ListRaces(generics.ListAPIView):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer

class DetailRace(generics.RetrieveAPIView):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer
