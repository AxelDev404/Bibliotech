from django.urls import path

from ..views.postazione.get import get_totale_postazioni

urlpatterns = [
    path('statistics-postazioni/' , get_totale_postazioni , name='get_totale_postazioni'),
]
