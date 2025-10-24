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


from ...models.postazione import Postazione


@api_view(['GET'])
def get_totale_postazioni(request):
    
    if request.method == 'GET':

        try:

            count = Postazione.objects.count()

            if not count:
                return Response({'Message' : 'obj not foun'} , status=status.HTTP_400_BAD_REQUEST)
            
            else:
                return Response({'count' : count} , status=status.HTTP_200_OK)

        except Postazione.DoesNotExist:
            return Response({'Message' : 'obj not found'} , status=status.HTTP_400_BAD_REQUEST)