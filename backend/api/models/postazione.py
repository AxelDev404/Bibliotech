from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError


from .categoria import Categoria

class Postazione(models.Model):

    id_postazione = models.AutoField(primary_key=True , auto_created=True)

    posizione = models.CharField(max_length=2)
    numerazione = models.PositiveIntegerField()
    categoria = models.ForeignKey(Categoria , on_delete=models.CASCADE , blank=True , null=True , related_name='postazione_categoria')

    capacita = models.PositiveIntegerField()


    def __str__(self):
        return f"POSIZIONE : {self.posizione} LIBRERIA N° : {self.numerazione}"
    

    def save(self, *args, **kwargs):

        
        if len(self.posizione) != 2:

            raise ValidationError("Poszione non valida")

        
        if self.numerazione < 0 :

            raise ValidationError("La numerazion non è valida")


        if self.capacita < 0:
            raise ValidationError("Capacità non valida")
        

        return super().save(*args, **kwargs)