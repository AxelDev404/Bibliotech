from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError

from .autore import Autore
from .postazione import Postazione


class Libro(models.Model):

    isbn = models.CharField(max_length=13 , primary_key=True)

    titolo = models.CharField(max_length=30 , blank=False , null=False)
    data_uscita = models.DateField(blank=False , null=False)
    editore = models.CharField(max_length=20 , blank=False , null=False)

    formato = models.CharField(max_length=50 , blank=False , null=False)
    lingua = models.CharField(max_length=20 , blank=False , null=False)

    autore = models.ForeignKey(Autore , on_delete=models.CASCADE , blank=False , null=False , related_name='libro_autore')
    postazione = models.ForeignKey(Postazione , on_delete=models.CASCADE , blank=False , null=False , related_name='libro_postazione')

    utente = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE , blank=False , null=False , related_name='libro_utente')


    def __str__(self):
        return self.isbn
    

    def save(self, *args, **kwargs):


        if len(self.isbn) != 13:

            raise ValidationError("ISBN deve avere 13 caratteri")
        
        
        if len(self.titolo) < 3 or len(self.titolo) > 30:

            raise ValidationError("Il titolo non è valido")
        

        if len(self.editore) < 3 or len(self.editore) > 20:

            raise ValidationError("Editore non valido")
        

        if self.formato:
            self.formato = self.formato.upper()

        formati = {'PDF' , 'EPUB' , 'AUDIO'}

        if self.formato not in formati:
            
            raise ValidationError("Formato non valido")

         
    

        

        return super().save(*args, **kwargs)
    

