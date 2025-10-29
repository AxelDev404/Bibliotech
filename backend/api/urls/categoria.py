from django.urls import path
from ..views.categoria.post import post_categoria
from ..views.categoria.get import get_categorie_helper

urlpatterns = [
    
    #CREAZIONE
    path('upload-categoria/' , post_categoria , name='post_categoria'),

    #HELPER SELECTION
    path('helper-selection-categorie/' , get_categorie_helper , name='get_categorie_helper'),
]
