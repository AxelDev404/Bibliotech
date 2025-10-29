from django.urls import path, include
from django.http import JsonResponse



urlpatterns = [
    path('auth/', include('api.urls.auth')),
    path('autori/', include('api.urls.autore')),
    path('libri/' , include('api.urls.libro')),
    path('postazioni/' , include('api.urls.postazione')),
    path('tessere-biblioteca/' , include('api.urls.tessera_biblioteca')),
    path('prestiti/' , include('api.urls.prestito')),
    path('categorie/' , include('api.urls.categoria')),
]