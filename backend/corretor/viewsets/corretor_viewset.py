from rest_framework.viewsets import ModelViewSet

from corretor.models import Corretor
from corretor.serializers import CorretorSerializer


class CorretorViewSet(ModelViewSet):
    serializer_class = CorretorSerializer
    queryset = Corretor.objects.all()
