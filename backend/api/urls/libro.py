from django.urls import path

from ..views.libro.get import get_libri_table , get_totale_libri

urlpatterns = [

    #GESTIONE
    path('manage-books/' , get_libri_table , name='get_libri_table'),   

    #STATISTICA
    path('statistics-book/' , get_totale_libri , name='get_totale_libri'),

]
