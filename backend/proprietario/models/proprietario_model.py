from django.db import models


class Proprietario(models.Model):
    nome = models.CharField(max_length=50)
    telefone = models.CharField(max_length=50)
    email = models.EmailField()
    
    def __str__(self):
        return self.nome