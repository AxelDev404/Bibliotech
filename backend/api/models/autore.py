from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError


class Autore(models.Model):

    id_autore = models.AutoField(primary_key=True , auto_created=True)

    nome_autore = models.CharField(max_length=20 , blank=False , null=False)
    cognome_autore = models.CharField(max_length=50 , blank=False , null=False)

    
    def __str__(self):
        return f"NOME : {self.nome_autore} COGNOME : {self.cognome_autore}"
    

    def save(self , *args, **kwargs):
        
        
        if len(self.nome_autore) < 2 or len(self.nome_autore) > 20:
            raise ValidationError("Nome non valido")
        
                
        if len(self.cognome_autore) < 2 or len(self.cognome_autore) > 50:
            raise ValidationError("Cognome non validoo")
        

        return super().save(*args, **kwargs)