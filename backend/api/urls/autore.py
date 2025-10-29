from django.urls import path

from ..views.autore.get import get_autori 
from ..views.autore.post import post_autore


urlpatterns = [

    #VISUALIZZAZIONE
    path('get-autori/' , get_autori , name='get_autori'),

    #CREAZIONE
    path('upload-autore/' , post_autore , name='post_autore'),
]
