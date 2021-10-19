from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader 
# Create your views here.
def index(request): 
    nombre = nombres.objects.all()
    template = loader.get_template('books/index.html')
    context = {
        'nombre': nombre,
    }
    return HttpResponse(template.render(context, request))


    

