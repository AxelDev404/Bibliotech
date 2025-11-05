from django.urls import path

from ..views.libro.get import get_libri_table , get_totale_libri , get_ultimi_libri , get_libro_pagina , get_filter_libro_table
from ..views.libro.post import post_libro
from ..views.libro.patch import patch_libro

urlpatterns = [

    #GESTIONE
    path('manage-books/' , get_libri_table , name='get_libri_table'),   


    #RICERCA 
    path('book-isbn/<str:isbn>/' , get_libro_pagina , name='get_libro_pagina'),

    #STATISTICA
    path('statistics-book/' , get_totale_libri , name='get_totale_libri'),
    path('statistics-last-inserts-book/' , get_ultimi_libri , name='get_ultimi_libri'),


    #INSERIMENTO
    path('upload-book/' , post_libro , name='post_libro'),

    #MODIFICA
    path('patch-book/<str:isbn>/' , patch_libro , name='patch_libro'),

    #FILTRAGGIO
    path('filter-book-table/' , get_filter_libro_table , name='get_filter_libro_table'),
]
