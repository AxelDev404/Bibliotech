from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from datetime import date

from ..models import TesseraBiblioteca


class TesseraBibStatSerializer(serializers.ModelSerializer):

    class Meta:

        model = TesseraBiblioteca

        fields = ('id_tessera' , 'nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale')



class TesseraDetailSerializer(serializers.ModelSerializer):

    utente_operatore = serializers.CharField(source = 'utente.username' , read_only = True)

    class Meta:

        model = TesseraBiblioteca

        fields = ('id_tessera' , 'nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale' , 'data_nascita' , 'telefono' , 'email' , 'indirizzo' , 'utente' , 'utente_operatore')



class TesseraBibliotecaPostSerializer(serializers.ModelSerializer):

    class Meta:

        model = TesseraBiblioteca
        fields = ('nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale' , 'data_nascita' , 'telefono' , 'email' , 'indirizzo' )

        extra_kwargs = {

            'nome_tesserato' : {
                
                'error_messages' : {
                    'blank' : "Il nome è obbligatorio"
                }
            },

            'cognome_tesserato' : {

                'error_messages' : {
                    'blank' : "Il cognome è obbligatorio"
                }
            },

            'codice_fiscale' : {

                'error_messages' : {
                    'blank' : "Il CF è obbligatorio"
                }
            },

            'telefono' : {

                'error_messages' : {
                    'blank' : "Il nr. di telefono è obbligatorio"
                }
            },

            'indirizzo' : {

                'error_messages' : {
                    'blank' : "L'indirizzo è obbligatorio"
                }
            }
        }


    def validate(self, attrs):

        errori = {}

        oggi = date.today()

        nome_tesserato = attrs.get('nome_tesserato')
        cognome_tesserato = attrs.get('cognome_tesserato')
        codice_fiscale = attrs.get('codice_fiscale')
        telefono = attrs.get('telefono')
        indirizzo = attrs.get('indirizzo')
        data_nascita = attrs.get('data_nascita')


        if len(nome_tesserato) < 2:
            errori['nome_tesserato'] = "Il nome non è valido"

        if len(cognome_tesserato) < 2:
            errori['cognome_tesserato'] = "Il cognome non è valido" 
        
        if len(codice_fiscale) != 11:
            errori['codice_fiscale'] = "Il codice fiscale deve avere 11 caratteri"

        if len(telefono) != 10:
            errori['telefono'] = "Il numero di telefono non è valido"

        if len(indirizzo) < 5 or len(indirizzo) > 120:
            errori['indirizzo'] = "L'indirizzo è troppo corto"

        if data_nascita >= oggi:
            errori['data_nascita'] = "La data di nascita non è valida"

        
        if errori:
            raise serializers.ValidationError(errori)

        return attrs


class TesseraBibliotecaPatchSerializer(serializers.ModelSerializer):

    class Meta:

        model = TesseraBiblioteca

        fields = ('nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale' , 'data_nascita' , 'telefono' , 'email' , 'indirizzo' )