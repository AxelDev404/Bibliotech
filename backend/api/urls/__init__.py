from django.urls import path, include
from django.http import JsonResponse



urlpatterns = [
    path('auth/', include('api.urls.auth')),
    path('autori/', include('api.urls.autore')),
    path('libri/' , include('api.urls.libro')),
]