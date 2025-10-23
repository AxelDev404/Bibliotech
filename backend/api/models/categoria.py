from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError


class Categoria(models.Model):

    id_categoria = models.AutoField(primary_key=True , auto_created=True)

    nome_categoria = models.CharField(max_length=30 , blank=False , null=False)
    descrizione = models.CharField(max_length=100 , blank=False , null=False)


    def __str__(self):

        return self.nome_categoria
    

    def save(self ,*args, **kwargs):

        
        if len(self.nome_categoria) < 4 or len(self.nome_categoria) > 30:
            
            raise ValidationError("Nome categoria non valido")
        

        if len(self.descrizione) < 10 or len(self.descrizione) > 100:

            raise ValidationError("Descrizione categoria non valida") 


        return super().save(*args, **kwargs)