from django.db import models


class Corretor(models.Model):
    nome = models.CharField(max_length=30)
    telefone = models.CharField(max_length=20, unique=True)
    email = models.EmailField()
    
    def __str__(self):
        return self.nome
