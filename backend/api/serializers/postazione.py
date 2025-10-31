from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.postazione import Postazione
from ..models.categoria import Categoria


class SelectPostazioneSerializer(serializers.ModelSerializer):

    categoria_nome = serializers.CharField(source = 'categoria.nome_categoria' , read_only=True)

    class Meta:

        model = Postazione
        fields = ('id_postazione' , 'posizione' , 'numerazione' , 'categoria_nome')



class PostazionePostSerializer(serializers.ModelSerializer):

    categoria = serializers.PrimaryKeyRelatedField(queryset = Categoria.objects.all() , required = True , 
    
        error_messages = {
            'required' : "La categoria è obbligatoria",
            'null' : "La categoria è obbligatoria"
        }
    )

    class Meta:

        model = Postazione

        fields = ('posizione' , 'numerazione' , 'categoria' , 'capacita')

        extra_kwargs = {

            'posizione' : {

                'error_messages' : {
                    'blank' : "La posizione è obbligatoria"
                }
            },

            'numerazione' : {
                
                'error_messages' : {
                    'null' : "La numerazione è obbligatoria"
                }
            },

            'categoria' : {

                'error_messages' : {
                    'required' : "La categoria è obbligatoria"
                }
            },

            'capacita' : {

                'error_messages' : {
                    'null' : "La capacità è obbligatoria"
                }
            }
        }


    def validate(self, attrs):

        errori = {}

        numerazione = int(attrs.get('numerazione'))
        capacita = int(attrs.get('capacita'))

        if numerazione <= 0 :
            errori['numerazione'] = "La numerazione non può essere minore o uguale a 0" 

        if capacita <= 0:
            errori['capacita'] = "La capacità non può essere miniore o uguale a 0"

        if errori:
            raise serializers.ValidationError(errori)

        return attrs
