from rest_framework import serializers
from .models import Race, Horse


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = '__all__'


class HorseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horse
        fields = '__all__'
