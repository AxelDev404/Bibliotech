from django.urls import path
from ..views.categoria.post import post_categoria

urlpatterns = [
    
    #CREAZIONE
    path('upload-categoria/' , post_categoria , name='post_categoria'),
]
