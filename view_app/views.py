from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    latest_race_list = Race.objects.order_by('-race_date')[:5]
    template = loader.get_template('view_app/index.html')
    context = {
        'latest_race_list': latest_race_list,
    }
    return HttpResponse(template.render(context, request))
