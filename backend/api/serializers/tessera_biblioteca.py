from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models import TesseraBiblioteca


class TesseraBibStatSerializer(serializers.ModelSerializer):

    class Meta:

        model = TesseraBiblioteca

        fields = ('id_tessera' , 'nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale')



class TesseraDetailSerializer(serializers.ModelSerializer):

    utente_operatore = serializers.CharField(source = 'utente.username' , read_only = True)

    class Meta:

        model = TesseraBiblioteca

        fields = ('id_tessera' , 'nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale' , 'data_nascita' , 'telefono' , 'email' , 'indirizzo' , 'utente_operatore')
