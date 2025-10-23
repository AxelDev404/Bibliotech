from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError

from .tessera_biblioteca import TesseraBiblioteca
from .libro import Libro

class Prestito(models.Model):

    id_prestito = models.AutoField(primary_key=True , auto_created=True)

    tesserato = models.ForeignKey(TesseraBiblioteca , on_delete=models.CASCADE , blank=False , null=False , related_name='prestito_tesserato')
    libro = models.ForeignKey(Libro , on_delete=models.CASCADE , blank=False , null=False , related_name='prestito_libro')

    data_inizio = models.DateField(blank=False , null=False)
    data_fine = models.DateField(blank=False , null=False)

    isRestituito = models.BooleanField(default=False)
    isPrestato = models.BooleanField(default=True) 

    utente = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE , blank=False , null=False , related_name='prestito_utente')

    
    def __str__(self):
        return str(self.id_prestito)
    

    def save(self , *args, **kwargs):


        

        return super().save(*args, **kwargs)