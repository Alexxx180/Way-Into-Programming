# Generated by Django 3.1 on 2020-08-16 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IDplayer', models.CharField(max_length=100, verbose_name='ID-игрока')),
                ('NAMEplayer', models.CharField(max_length=35, verbose_name='Имя_игрока')),
                ('LEVELplayer', models.IntegerField(verbose_name='Уровень_игрока')),
                ('Level', models.IntegerField(verbose_name='Уровень_локаций')),
                ('NEXTexp', models.IntegerField(verbose_name='Опыт_ДоСледУровня')),
            ],
            options={
                'verbose_name': 'Игрок',
                'verbose_name_plural': 'Игроки',
            },
        ),
    ]
