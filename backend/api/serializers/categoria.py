from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.categoria import Categoria


class CategoriaPostSerializer(serializers.ModelSerializer):

    class Meta:
        
        model = Categoria

        fields = ('nome_categoria' , 'descrizione')