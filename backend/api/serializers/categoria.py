from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.categoria import Categoria



class CategoriaHlperSerializer(serializers.ModelSerializer):

    class Meta:

        model = Categoria
        fields = ('id_categoria' , 'nome_categoria')



class CategoriaPostSerializer(serializers.ModelSerializer):

    class Meta:
        
        model = Categoria

        fields = ('nome_categoria' , 'descrizione')

        extra_kwargs = {

            'nome_categoria' : {

                'error_messages' : {

                    'blank' : "Il nome categoria è obbligatorio"
                }
                
            },

            'descrizione' : {
                
                'error_messages' : {
                    'blank' : "La descrizione è obbligatoria"
                }
            }
        }

    
    def validate(self, attrs):
        
        errori = {}

        nome_categoria = attrs.get('nome_categoria')
        descrizione = attrs.get('descrizione')

        if len(nome_categoria) < 4:
            errori['nome_categoria'] = "Il nome della categoria è troppo corto"

        if len(descrizione) < 10:
            errori['descrizione'] = "La descrizione è troppo corta deve contenere almeno 10 caratteri"

        if errori:
            raise serializers.ValidationError(errori)

        
        
        return attrs
