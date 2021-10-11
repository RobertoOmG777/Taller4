from django.db import models

# Create your models here.

class Persona(models.Model): 
    nombres = models.CharField(max_length=30) 
    apellido = models.CharField(max_length=30)
    idtipoDocumento = models.IntegerField()
    documento = models.IntegerField()
    fecha_nacimiento = models.DateField(auto_now=False, auto_now_add=False)


