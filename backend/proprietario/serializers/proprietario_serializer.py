from rest_framework.serializers import ModelSerializer

from proprietario.models import Proprietario


class ProprietarioSerializer(ModelSerializer):
    
    class Meta:
        model = Proprietario
        fields = ['nome', 'telefone', 'email']
        extra_kwargs = {
            'nome': {
                'required': True
            },
            'telefone': {
                'required': True
            },
            'email': {
                'required': True
            }
        }
