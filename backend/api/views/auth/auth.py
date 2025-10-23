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


#AUTH VIEW

@api_view(['POST'])
def LogIn(request):

    if request.method == 'POST':

        username = request.data.get('username')
        password = request.data.get('password')


        user = authenticate(username = username , password = password)

        if user:

            refresh = RefreshToken.for_user(user)

            response = Response({'Message' : 'LogIn effettuato con successo' , 'username' : user.username , 'user_id' : user.id } , status=status.HTTP_200_OK)

            response.set_cookie(key='access_token' , value=str(refresh.access_token) , httponly=True , secure=False , samesite='Lax')
            response.set_cookie(key='refresh_token' , value=str(refresh) , httponly=True , secure=False , samesite='Lax')

            return response
        

        else:
            return Response({'Message' , 'Accesso negato credenziali non valide'} , status=status.HTTP_401_UNAUTHORIZED)
        
@csrf_exempt
@api_view(['POST'])
def LogOut(request):

    if request.method == 'POST':

        response = Response({'Message' : 'LogOut effettuato'} , status=status.HTTP_200_OK)

        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')

        return response
    

@api_view(['GET'])
def user_check(request):
    
    raw_token = request.COOKIES.get('access_token')

    if not raw_token:
        return Response({'loggedIn': False})

    try:

        validated_token = JWTAuthentication().get_validated_token(raw_token)
        user = JWTAuthentication().get_user(validated_token)

        return Response({
            'loggedIn': True,
            'username': user.username,
            'nome': getattr(user, 'nome', ''),
            'cognome': getattr(user, 'cognome', ''),
            'user_id': user.id
        })
    
    except Exception:
        return Response({'loggedIn': False})

    


class JWTAuthenticationFromCookie(JWTAuthentication):
    def authenticate(self, request):
        raw_token = request.COOKIES.get('access_token')
        if raw_token is None:
            return None
        validated_token = self.get_validated_token(raw_token)
        return self.get_user(validated_token), validated_token


