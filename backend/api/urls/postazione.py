from django.urls import path

from ..views.postazione.get import get_totale_postazioni , get_selection_postazione

urlpatterns = [

    #STATISTICA API'S
    path('statistics-postazioni/' , get_totale_postazioni , name='get_totale_postazioni'),

    #HELPER API'S
    path('helper-selection-postazioni/' , get_selection_postazione , name='get_selection_postazioni'),
]
