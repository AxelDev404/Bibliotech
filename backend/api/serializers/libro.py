from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.libro import Libro



class LibroManageSerializer(serializers.ModelSerializer):

    autore_libro = serializers.CharField(source = 'autore.nome_autore' , read_only=True)
    

    class Meta:

        model = Libro

        fields = ('isbn' , 'titolo' , 'data_uscita' , 'editore' , 'formato' , 'lingua' , 'autore_libro' , 'postazione')



class LibroStatisticSerializer(serializers.ModelSerializer):

    class Meta:

        model = Libro

        fields = ('isbn' , 'titolo' , 'data_uscita' , 'editore' )



class LibroPostSerializer(serializers.ModelSerializer):

    class Meta:

        model = Libro
        
        fields = ('isbn' , 'titolo' , 'data_uscita' , 'editore' , 'formato' , 'lingua' , 'postazione')