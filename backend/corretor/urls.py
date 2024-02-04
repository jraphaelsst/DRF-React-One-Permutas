from django.urls import include, path
from rest_framework import routers

from corretor.viewsets import CorretorViewSet

router = routers.SimpleRouter()
router.register(r'', CorretorViewSet, basename='corretor')


urlpatterns = [
    path('', include(router.urls))
]
