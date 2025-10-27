from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User 
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator


from ..models.postazione import Postazione



class SelectPostazioneSerializer(serializers.ModelSerializer):

    class Meta:

        model = Postazione
        fields = ('id_postazione' , 'posizione' , 'numerazione' , 'categoria')