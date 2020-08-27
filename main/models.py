from django.db import models

class Players(models.Model):
    IDplayer = models.CharField('ID-игрока', max_length=100)
    NAMEplayer = models.CharField('Имя_игрока', max_length=35)
    LEVELplayer = models.IntegerField('Уровень_игрока')
    Level = models.IntegerField('Уровень_локаций')
    NEXTexp = models.IntegerField('Опыт_ДоСледУровня')
    
    def __str__(self):
        return self.IDplayer

    class Meta:
        verbose_name='Игрок'
        verbose_name_plural='Игроки'
