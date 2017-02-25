from django.http import HttpResponse, Http404
from django.shortcuts import render
import json

def homepage(request):
    return render(request, "html/index.html", {})

def apitest(request):
    data = {'name':'DeveloperC','age':12,'games':['game1','game2','game3']}
    return HttpResponse(json.dumps(data), content_type="application/json")