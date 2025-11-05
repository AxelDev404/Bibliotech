from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view , permission_classes , parser_classes ,authentication_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from django.contrib.auth.models import User 
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import FileResponse
from django.http import HttpResponse
import mimetypes
from io import BytesIO
import zipfile
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import BasePermission
from django.contrib.auth import authenticate
from django.db.models import Prefetch
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.views.decorators.csrf import csrf_exempt
import traceback
import os

from ..auth.auth import JWTAuthenticationFromCookie

from ...models.tessera_biblioteca import TesseraBiblioteca
from ...serializers.tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer


#GET STATISTICA VIEW

@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_totale_tessere(request):

    if request.method == 'GET':

        try:

            count = TesseraBiblioteca.objects.count()

            if not count:
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response({'count' : count} , status=status.HTTP_200_OK)

        except:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_ultime_tessere(request):

    if request.method == 'GET':

        try:

            model = TesseraBiblioteca.objects.order_by('-id_tessera')
            serializer = TesseraBibStatSerializer(model , many = True)

            if not model.exists():
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response(serializer.data , status=status.HTTP_200_OK)
        
        except TesseraBiblioteca.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


#GET DETAIL VIEW

@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_detail_tessera_biblioteca(request , id_tessera):

    if request.method == 'GET':

        try:

            model = TesseraBiblioteca.objects.get(id_tessera = id_tessera)
            serializer = TesseraDetailSerializer(model)

            if not model:
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response(serializer.data , status=status.HTTP_200_OK)

        
        except TesseraBiblioteca.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


#FILTRAGGIO TESSERA

@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_filter_tesserati_table(request):

    if request.method == 'GET':

        try:

            id_tessera = request.GET.get('id_tessera')
            codice_fiscale = request.GET.get('codice_fiscale')
            email = request.GET.get('email')
            data_nascita = request.GET.get('data_nascita')
            utente = request.GET.get('utente')   
            
            model = TesseraBiblioteca.objects.all()


            if id_tessera:
                model = TesseraBiblioteca.objects.filter(id_tessera = int(id_tessera))

            if codice_fiscale:
                model = TesseraBiblioteca.objects.filter(codice_fiscale = codice_fiscale)

            if email:
                model = TesseraBiblioteca.objects.filter(email = email)

            if data_nascita:
                model = TesseraBiblioteca.objects.filter(data_nascita = data_nascita)

            if utente:
                model = TesseraBiblioteca.objects.filter(utente__id = int(utente))

            serializer = TesseraDetailSerializer(model , many = True)
            return Response(serializer.data , status=status.HTTP_200_OK)


        except TesseraBiblioteca.DoesNotExist:
            return Response({'Messages' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)