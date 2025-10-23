from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError

from .customuser import CustomUser


class TesseraBiblioteca(models.Model):

    id_tessera = models.AutoField(primary_key=True , auto_created=True)

    nome_tesserato = models.CharField(max_length=20)
    cognome_tesserato = models.CharField(max_length=50)
    data_nascita = models.DateField(blank=False , null=False)
    codice_fiscale = models.CharField(max_length=11 , blank=False , null=False)

    telefono = models.CharField(max_length=10 , blank=False , null=False)
    email = models.EmailField(blank=True , null=True)
    indirizzo = models.CharField(max_length=120 , blank=False , null=False)

    utente = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE , blank=False , null=False , related_name='tesserabiblioteca_utente')

    def __str__(self):
        return str(self.id_tessera)