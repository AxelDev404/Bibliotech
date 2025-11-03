from django.urls import path

from ..views.prestito.get import get_totale_prestiti_attivi , get_totale_prestiti_saldati , get_filter_prestito
from ..views.prestito.post import post_prestito
from ..views.prestito.delete import delete_prestito
from ..views.prestito.pacth import pacth_status_prestito , patch_pendig_prestiti

urlpatterns = [

    #STATISTICS
    path('statistics-active-prestiti/' , get_totale_prestiti_attivi , name='get_totale_prestiti_attivi'),
    path('statistics-deactive-prestiti/' , get_totale_prestiti_saldati , name='get_totale_prestiti_saldati'),
    
    #FILTERING
    path('filtering-table-prestiti/<int:tesserato>/' , get_filter_prestito , name='get_filter_prestito'),

    #INSERT
    path('post-prestito/', post_prestito , name='post_prestito'),

    #DELETE
    path('delete-prestito/<int:id_prestito>/', delete_prestito , name='delete_prestito'),

    #MODIFICA STATO
    path('patch-prestito-status/<int:id_prestito>/' , pacth_status_prestito , name='patch_status_prestito'),
    path('patch-pending-prestito/<int:id_prestito>/' , patch_pendig_prestiti , name='patch_pending_prestiti'),
]
