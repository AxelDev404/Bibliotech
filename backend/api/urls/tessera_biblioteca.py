from django.urls import path
from ..views.tessera_biblioteca.get import get_totale_tessere

urlpatterns = [
    path('statistics-tessere/' , get_totale_tessere , name='get_totale_tessere'),
]
