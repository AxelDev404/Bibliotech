from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from ..views.auth import LogIn, LogOut, user_check

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', LogIn, name='LogIn'),
    path('logout/', LogOut, name='LogOut'),
    path('user_check/', user_check, name='user_check'),
]