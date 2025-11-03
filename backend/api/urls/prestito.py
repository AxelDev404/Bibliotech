from django.urls import path

from ..views.prestito.get import get_totale_prestiti_attivi , get_totale_prestiti_saldati , get_filter_prestito
from ..views.prestito.post import post_prestito

urlpatterns = [

    #STATISTICS
    path('statistics-active-prestiti/' , get_totale_prestiti_attivi , name='get_totale_prestiti_attivi'),
    path('statistics-deactive-prestiti/' , get_totale_prestiti_saldati , name='get_totale_prestiti_saldati'),
    
    #FILTERING
    path('filtering-table-prestiti/<int:tesserato>/' , get_filter_prestito , name='get_filter_prestito'),

    #INSERT
    path('post-prestito/', post_prestito , name='post_prestito'),
]
