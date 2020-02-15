from django.shortcuts import render
from .models import Race

def index(request):
    latest_race_list = Race.objects.order_by('-race_date')
    context = {'latest_race_list': latest_race_list,}
    return render(request, 'races/index.html', context)

