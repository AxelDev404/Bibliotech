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

from auth.auth import JWTAuthenticationFromCookie



@authentication_classes([IsAuthenticated , JWTAuthenticationFromCookie])
@api_view(['POST'])
def post_libro(request):

    if request.method == 'POST':

        pass