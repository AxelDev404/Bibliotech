from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
from .models.autore import Autore
from .models.categoria import Categoria
from .models.postazione import Postazione
from .models.libro import Libro
from .models.tessera_biblioteca import TesseraBiblioteca
from .models.prestito import Prestito



@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    
    model = CustomUser
    
    list_display = ('username', 'email','is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active' , 'nome' , 'cognome')

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'nome' ,'cognome')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2' , 'nome' ,'cognome' , 'is_staff', 'is_active')}
        ),
    )
   
    search_fields = ('email', 'username')
    ordering = ('username',)


admin.site.register(Autore)
admin.site.register(Categoria)
admin.site.register(Postazione)
admin.site.register(Libro)
admin.site.register(TesseraBiblioteca)
admin.site.register(Prestito)