from django.db import models

from authsys.models import User


class Imovel(models.Model):
    criado_por = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    corretor = models.ForeignKey('corretor.Corretor', on_delete=models.DO_NOTHING)
    proprietario = models.ForeignKey('proprietario.Proprietario', on_delete=models.DO_NOTHING)
    condominio = models.ForeignKey('condominio.Condominio', on_delete=models.DO_NOTHING)
    
    ref = models.CharField(max_length=7)
    valor_venda = models.PositiveIntegerField()
    valor_aluguel = models.PositiveIntegerField()
    valor_iptu = models.PositiveIntegerField()
    ano_construcao = models.DateField()
    ano_reforma = models.DateField()
    observacoes = models.TextField()
    
    tipo_interesse = models.CharField(max_length=30)
    regiao_interesse = models.CharField(max_length=50)
    uf_interesse = models.CharField(max_length=50)
    valor_minimo_interesse = models.PositiveIntegerField()
    valor_maximo_interesse = models.PositiveIntegerField()
    
    def __self__(self) -> str:
        return self.ref
