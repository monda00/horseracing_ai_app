from rest_framework.serializers import Serializer
from .models import Race, Horse
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .serializers import RaceSerializer, HorseSerializer


class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RaceSerializer


class HorseViewSet(viewsets.ModelViewSet):
    queryset = Horse.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HorseSerializer


class HorseDetailByRaceViewSet(generics.ListAPIView):

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = HorseSerializer(queryset, many=True)
        return Response(serializer.data)

    def get_queryset(self):
        race_id = self.kwargs.get('race_id')
        return Horse.objects.filter(race_id=race_id)
