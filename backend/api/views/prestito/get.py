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


from ...models.prestito import Prestito
from ..auth.auth import JWTAuthenticationFromCookie
from ...serializers.prestito import PrestitoFilterSerializer

#STATISTICS GET VIEW

@api_view(['GET'])
def get_totale_prestiti_attivi(request):

    if request.method == 'GET':

        try:

            count_active = Prestito.objects.filter(isPrestato=True).count()

            if not count_active:
                return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response({'count_active' : count_active} , status=status.HTTP_200_OK)

        except Prestito.DoesNotExist:
            return Response({'Message' : 'obj not foun'} , status=status.HTTP_400_BAD_REQUEST)
        


@api_view(['GET'])
def get_totale_prestiti_saldati(request):

    if request.method == 'GET':

        try:

            count_deactive = Prestito.objects.filter(isRestituito=True).count()
            return Response({'count_deactive' : count_deactive} , status=status.HTTP_200_OK)
        
        except Prestito.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)
        


#FILTERING VIEW
@api_view(['GET'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def get_filter_prestito(request , tesserato):
    
    if  request.method == 'GET':
        
        try:

            libro = request.GET.get('libro')

            isRestituito = request.GET.get('isRestituito')
            isPrestato = request.GET.get('isPrestato')
            data_inizio = request.GET.get('data_inizio')
            data_fine = request.GET.get('data_fine')


            model = Prestito.objects.filter(tesserato=tesserato)
            
            
            if libro:
                model = Prestito.objects.filter(libro__isbn = libro)

            if isRestituito:
                isRestituito__bool = isRestituito.lower() == 'true'
                model = Prestito.objects.filter(isRestituito=isRestituito__bool)

            if isPrestato:
                isPrestato__bool = isPrestato.lower() == 'true'
                model = Prestito.objects.filter(isPrestato = isPrestato__bool)
            
            if data_inizio and data_fine:
                model = Prestito.objects.filter(data_inizio__range = [data_inizio,data_fine])

            serializer = PrestitoFilterSerializer(model , many = True)
            return Response(serializer.data , status=status.HTTP_200_OK)

        except Prestito.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)