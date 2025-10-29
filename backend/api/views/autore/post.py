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

from ...serializers.autore import AutorePostSerializer


@api_view(['POST'])
@authentication_classes([JWTAuthenticationFromCookie])
@permission_classes([IsAuthenticated])
def post_autore(request):

    if request.method == 'POST':

        try:

            serializer = AutorePostSerializer(data = request.data)
            
            if serializer.is_valid():

                serializer.save()
                return Response(serializer.data , status=status.HTTP_200_OK)

            else:
                return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:

            traceback.print_exc()
            return Response({'Message' : 'Internal Server Error'} , status=status.HTTP_500_INTERNAL_SERVER_ERROR)