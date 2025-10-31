from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator

from ..models.autore import Autore


class AutoreGetSerializer(serializers.ModelSerializer):


    class Meta:

        model = Autore
        fields = '__all__'


class AutorePostSerializer(serializers.ModelSerializer):

    class Meta:

        model = Autore
        fields = ('nome_autore' , 'cognome_autore')

        extra_kwargs = {
            'nome_autore' : {

                'error_messages' : {
                    'blank' : "Il nome è obbligatorio"
                }
            },

            'cognome_autore' : {

                'error_messages' : {
                    'blank' : "Il cognome è obbligatorio"
                }
            }
        }

    
    def validate(self, attrs):
        
        errori = {}

        nome_autore = attrs.get('nome_autore')
        cognome_autore = attrs.get('cognome_autore')

        if len(nome_autore) < 2:
            errori['nome_autore'] = "Il nome è troppo corto per essere valido"

        if len(cognome_autore) < 2:
            errori['cognome_autore'] = "Il cognome è troppo corto per essere valido"

        if errori:
            raise serializers.ValidationError(errori)
        
        return attrs