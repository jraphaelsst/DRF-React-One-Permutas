from rest_framework.permissions import AllowAny#, IsAuthenticated
from rest_framework.viewsets import ModelViewSet

from authsys.serializers import RegisterSerializer


class RegisterViewSet(ModelViewSet):
    # authentication_classes = 
    permission_classes = ([AllowAny])
    
    serializer_class = RegisterSerializer
    # queryset = 
    
    
    def get_queryset(self):
        pass
