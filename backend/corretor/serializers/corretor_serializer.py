from rest_framework.serializers import ModelSerializer

from corretor.models import Corretor


class CorretorSerializer(ModelSerializer):

    class Meta:
        model = Corretor
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
        
    def create(self, validated_data):
        if len(validated_data['nome'].strip()) > 0 and len(validated_data['telefone'].strip()) > 0 and len(validated_data['email'].strip()) > 0:
            corretor = Corretor.objects.create(**validated_data)
            corretor.save()
            return corretor
        else:
            raise serializers.ValidationError('Preencha todos os campos!')
        
    def list(self):
        corretor = Corretor.objects.all()
        return corretor
    
    def retrieve(self, pk=None):
        corretor = Corretor.objects.filter(corretor_id=pk)
        return corretor
    
    def update(self, instance, validated_data):
        instance.nome = validated_data['nome']
        instance.telefone = validated_data['telefone']
        instance.email = validated_data['email']
        instance.save()
        return instance
    
    def partial_update(self, instance, validated_data):
        if validated_data['nome']:
            instance.nome = validated_data['nome']
        if validated_data['telefone']:
            instance.telefone = validated_data['telefone']
        if validated_data['email']:
            instance.telefone = validated_data['email']
        instance.save()
        return instance
    
    def destroy(self, pk=None):
        corretor = Corretor.objects.filter(corretor_id=pk)
        return corretor
