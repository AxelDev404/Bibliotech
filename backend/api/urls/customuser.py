from django.urls import path

from ..views.customuser.get import get_user_helper_select

urlpatterns = [
    
    path('helper-selection-user/' , get_user_helper_select , name='get_user_helper_select'),
]
