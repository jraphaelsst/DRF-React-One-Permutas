from rest_framework.serializers import ModelSerializer

from condominio.models import Condominio


class CondominioSerializer(ModelSerializer):
    
    class Meta:
        model = Condominio
        fields = [
            'nome',
            'cep',
            'estado',
            'cidade',
            'bairro',
            'endereco',
            'numero',
            'km',
            'valor_condominio'
        ]
        extra_kwargs = {
            'nome': {
                'required': True
            },
            'cep': {
                'required': True
            },
            'endereco': {
                'required': True
            },
            'numero': {
                'required': True
            },
            'km': {
                'required': True
            }
        }
