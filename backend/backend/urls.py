from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('authsys.urls')),
    path('corretor/', include('corretor.urls')),
    path('condominio/', include('condominio.urls')),
    path('imovel/', include('imovel.urls')),
    path('proprietario/', include('proprietario.urls'))
]
