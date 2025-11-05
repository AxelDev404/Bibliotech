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

from ...models.libro import Libro
from ...serializers.libro import LibroManageSerializer , LibroStatisticSerializer
from ..auth.auth import JWTAuthenticationFromCookie


@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_libri_table(request):

    if request.method == 'GET':

        try:

            model = Libro.objects.all()
            serializer = LibroManageSerializer(model , many = True)

            if not model:
               return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST) 
            
            else:
                return Response(serializer.data , status=status.HTTP_200_OK)

        except:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_libro_pagina(request , isbn):

    if request.method == 'GET':

        try:

            model = Libro.objects.get(isbn = isbn)
            serializer = LibroManageSerializer(model)
            
            if not model:
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(serializer.data , status=status.HTTP_200_OK)
        
        except Libro.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


#GET STAT VIEW'S

@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_totale_libri(request):

    if request.method == 'GET':

        try:

            count = Libro.objects.count()

            if not count:
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response({'count' : count} , status=status.HTTP_200_OK)

        except:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_ultimi_libri(request):

    if request.method == 'GET':

        try:

            model = Libro.objects.order_by('-isbn')[:10]
            serializer = LibroStatisticSerializer(model , many = True)

            if not model.exists():
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(serializer.data , status=status.HTTP_200_OK)

        except Libro.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


#FILTER TABLE 
@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_filter_libro_table(request):

    if request.method == 'GET':

        try:

            data_uscita = request.GET.get('data_uscita')
            editore = request.GET.get('editore')
            autore = request.GET.get('autore')
            formato = request.GET.get('formato')
            postazione = request.GET.get('postazione')
            utente = request.GET.get('utente')
            isbn = request.GET.get('isbn')
            lingua = request.GET.get('lingua')

            model = Libro.objects.all()


            if data_uscita:
                model = Libro.objects.filter(data_uscita=data_uscita)

            if editore:
                model = Libro.objects.filter(editore=editore)

            if autore:
                model = Libro.objects.filter(autore__id_autore = int(autore))

            if formato:
                model = Libro.objects.filter(formato=formato)
            
            if utente:
                model = Libro.objects.filter(utente__id = int(utente))

            if isbn:
                model = Libro.objects.filter(isbn = isbn)

            if lingua:
                model = Libro.objects.filter(lingua = lingua)

            if postazione:
                model = Libro.objects.filter(postazione__id_postazione = int(postazione))


            serializer = LibroManageSerializer(model , many = True)
            return Response(serializer.data , status=status.HTTP_200_OK)
            

        except Libro.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)