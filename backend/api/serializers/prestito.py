from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from datetime import date

from ..models.prestito import Prestito



class PrestitoFilterSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito

        fields = ('tesserato','id_prestito' , 'libro' , 'data_inizio' , 'data_fine' , 'isRestituito' , 'isPrestato')



class PrestitoPostSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito

        fields = ('tesserato' , 'libro' , 'data_inizio' , 'data_fine')

        extra_kwargs = {
            
            'libro' : {
                'error_messages' : {
                    'null' : "L'Isbn è obbligatorio"
                }
            }
        }


    def validate(self, attrs):

        errori = {}
        
        oggi = date.today()

        libro = attrs.get('libro')
        data_inizio = attrs.get('data_inizio')
        data_fine = attrs.get('data_fine')

        
        
        if data_inizio != oggi:
            errori['data_inizio'] = "La data di prenotazione deve essere odierna"

        if data_fine < data_inizio or data_fine == data_inizio:
            errori['data_fine'] = "La data di fine non è valida assicurati che sia un valore coerente alla data d'inizio"

        if errori:
            raise serializers.ValidationError(errori)

        return attrs 


class PrestitoPatchStatusSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito
        fields = [ 'id_prestito' , 'isRestituito']


class PresittoPatchPendingStatusSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito
        fields = ['id_prestito' , 'isPrestato']
