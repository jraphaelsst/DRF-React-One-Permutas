from django.urls import include, path
from rest_framework import routers

router = routers.SimpleRouter()
# router.register(r'register', viewsets.RegisterViewset, basename='register')


urlpatterns = [
    path('', include(router.urls))
]
