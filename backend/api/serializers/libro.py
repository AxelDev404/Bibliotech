from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator

from datetime import date

from ..models.libro import Libro
from ..models.autore import Autore
from ..models.postazione import Postazione


class LibroManageSerializer(serializers.ModelSerializer):

    autore_libro = serializers.CharField(source = 'autore.nome_autore' , read_only=True)
    posizione_libro = serializers.CharField(source = 'postazione.posizione' , read_only = True)
    poszione_libro_numerazione = serializers.CharField(source = 'postazione.numerazione' , read_only = True)
    username = serializers.CharField(source = 'utente.username' , read_only = True)
    #RICORDA DI INSERIRE QUESTI ALIAS NEL FRONTEND

    class Meta:

        model = Libro

        fields = ('isbn' , 'titolo' , 'data_uscita' , 'editore' , 'formato' , 'lingua' ,'autore', 'autore_libro' , 'postazione' , 'posizione_libro' , 'poszione_libro_numerazione' , 'utente' , 'username')



class LibroStatisticSerializer(serializers.ModelSerializer):

    class Meta:

        model = Libro

        fields = ('isbn' , 'titolo' , 'data_uscita' , 'editore' )



class LibroPostSerializer(serializers.ModelSerializer):

    autore = serializers.PrimaryKeyRelatedField(queryset = Autore.objects.all() , required = True,

        error_messages = {
            'required' : "L'autore è obbligatorio",
            'null' : "L'autore è obbligatorio"
        }
    )

    postazione = serializers.PrimaryKeyRelatedField(queryset = Postazione.objects.all() , required = True , 
    
        error_messages = {
            'required' : "La postazione è obbligatoria",
            'null' : "La postazione è obbligatoria"
        }
    )

    class Meta:

        model = Libro
        
        fields = ('isbn' , 'titolo', 'autore' , 'data_uscita' , 'editore' , 'formato' , 'lingua' , 'postazione')
        
        extra_kwargs = {

            'isbn' :{
                
                'error_messages' : 
                {
                    'blank' : "L'isbn è obbligatorio"    
                }
            },

            'titolo' : {

                'required' : True,
                'error_messages' : 
                {   
                    'required' : "Il titolo è obligatorio",
                    'blank' : "Il titolo è obbligatorio"
                }   
            },

            'lingua' : {
                
                'error_messages' : 
                {
                    'blank' : "La lingua è obbligatoria"
                }
            },

            'formato' : {

                'error_messages' : 
                {
                    'blank' : "Il formato è obbligatorio"
                }
            },

            'editore' : {

                'error_messages' : 
                {
                    'blank' : "L'editore è obbligatorio"
                }
            }
        }


    def validate(self, attrs):

        errori = {}
        
        oggi = date.today()

        isbn = attrs.get('isbn')
        titolo = attrs.get('titolo')
        autore = attrs.get('autore')
        editore = attrs.get('editore')
        formato = attrs.get('formato')
        postazione = attrs.get('postazione')
        data_uscita = attrs.get('data_uscita')

        if len(isbn) != 13:
            errori['isbn'] = "L'isbn deve essere composto da 13 caratteri"

        if len(titolo) < 3:
            errori['titolo'] = "Il titolo è troppo corto"

        if len(editore) < 3 or len(editore) > 20:
            errori['editore'] = "L'editore non è valido"
       
        if not autore:
            errori['autore'] = "L'autore è obbligatorio"

        try: 
            if not postazione:
                errori['postazione'] = "La postazione è obbligatoria"

        except (ValueError, TypeError):
            errori['postazione'] = "Valore non valido"


        if data_uscita > oggi:
            errori['data_uscita'] = "La data non è valida"

        if errori:
            raise serializers.ValidationError(errori)


        return attrs
    


class LibroPatchSerializer(serializers.ModelSerializer):

    class Meta:

        model = Libro

        fields = ('titolo', 'autore' , 'data_uscita' , 'editore' , 'formato' , 'lingua' , 'postazione')