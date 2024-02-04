from django.db import models


class Condominio(models.Model):
    nome = models.CharField(max_length=50)
    cep = models.CharField(max_length=20)
    estado = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    bairro = models.CharField(max_length=50)
    endereco = models.CharField(max_length=100)
    numero = models.PositiveIntegerField()
    km = models.PositiveIntegerField()
    valor_condominio = models.PositiveIntegerField()
    
    def __str__(self):
        return self.nome
