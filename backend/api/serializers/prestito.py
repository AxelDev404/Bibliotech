from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.prestito import Prestito



class PrestitoFilterSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito

        fields = ('tesserato','id_prestito' , 'libro' , 'data_inizio' , 'data_fine' , 'isRestituito' , 'isPrestato')



class PrestitoPostSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito

        fields = ('tesserato' , 'libro' , 'data_inizio' , 'data_fine')

        #KWARGS E DEF VALIDATE 


class PrestitoPatchStatusSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito
        fields = [ 'id_prestito' , 'isRestituito']


class PresittoPatchPendingStatusSerializer(serializers.ModelSerializer):

    class Meta:

        model = Prestito
        fields = ['id_prestito' , 'isPrestato']
