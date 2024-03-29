# Generated by Django 4.2.9 on 2024-02-04 16:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("proprietario", "0001_initial"),
        ("condominio", "0001_initial"),
        ("corretor", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Imovel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ref", models.CharField(max_length=7)),
                ("valor_venda", models.PositiveIntegerField()),
                ("valor_aluguel", models.PositiveIntegerField()),
                ("valor_iptu", models.PositiveIntegerField()),
                ("ano_construcao", models.DateField()),
                ("ano_reforma", models.DateField()),
                ("observacoes", models.TextField()),
                ("tipo_interesse", models.CharField(max_length=30)),
                ("regiao_interesse", models.CharField(max_length=50)),
                ("uf_interesse", models.CharField(max_length=50)),
                ("valor_minimo_interesse", models.PositiveIntegerField()),
                ("valor_maximo_interesse", models.PositiveIntegerField()),
                (
                    "condominio",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="condominio.condominio",
                    ),
                ),
                (
                    "corretor",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="corretor.corretor",
                    ),
                ),
                (
                    "criado_por",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "proprietario",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="proprietario.proprietario",
                    ),
                ),
            ],
        ),
    ]
