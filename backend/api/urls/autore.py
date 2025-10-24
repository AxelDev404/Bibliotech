from django.urls import path

from ..views.autore.get import get_autori


urlpatterns = [
    path('get-autori/' , get_autori , name='get_autori'),
]
