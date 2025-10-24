from django.urls import path

from ..views.prestito.get import get_totale_prestiti_attivi , get_totale_prestiti_saldati

urlpatterns = [
    path('statistics-active-prestiti/' , get_totale_prestiti_attivi , name='get_totale_prestiti_attivi'),
    path('statistics-deactive-prestiti/' , get_totale_prestiti_saldati , name='get_totale_prestiti_saldati'),
]
