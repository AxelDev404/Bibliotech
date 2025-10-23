from django.urls import path

from ..views.autore.get import get_autori


urlpatterns = [
    path('get_autori/' , get_autori , name='get_autori'),
]
