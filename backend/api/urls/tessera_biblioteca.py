from django.urls import path
from ..views.tessera_biblioteca.get import get_totale_tessere , get_ultime_tessere , get_detail_tessera_biblioteca
from ..views.tessera_biblioteca.post import post_tessera_biblioteca

urlpatterns = [

    #STATISTICA
    path('statistics-tessere/' , get_totale_tessere , name='get_totale_tessere'),
    path('statistics-last-insert-card/' , get_ultime_tessere , name='get_ultime_tessere'),

    #RICERCA
    path('tessera-biblioteca-id/<int:id_tessera>/', get_detail_tessera_biblioteca , name='get_detail_tessere_bibilioteca'),

    #CREAZIONE 
    path('upload-tessera-biblioteca/' , post_tessera_biblioteca , name='post_tessera_biblioteca'),
]

