from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
import os
from django.utils import timezone
from datetime import datetime
from django.conf import settings
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError


class CustomUser(AbstractUser):

    nome = models.CharField(max_length=20)
    cognome = models.CharField(max_length=50)

    
    def __str__(self):
        return self.nome 
    

    def save(self , *args, **kwargs):



        return super().save(*args, **kwargs)
    