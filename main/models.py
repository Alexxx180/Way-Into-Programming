from django.db import models

class Achievements(models.Model):
    IDp = models.CharField('ID-игрока', max_length=100)
    AchieveBugs = models.BooleanField(default=0)
    AchieveHome = models.BooleanField(default=0)
    AchievePull = models.BooleanField(default=0)
    Achieve5level = models.BooleanField(default=0)
    Achieve20level = models.BooleanField(default=0)
    Achieve35level = models.BooleanField(default=0)
    Achieve50level = models.BooleanField(default=0)
    AchieveNoob = models.BooleanField(default=0)
    AchieveBase = models.BooleanField(default=0)
    AchieveLast = models.BooleanField(default=0)
    
    def __str__(self):
        return self.IDp

    class Meta:
        verbose_name='Достижение'
        verbose_name_plural='Достижения'

class Players(models.Model):
    IDplayer = models.CharField('ID-игрока', max_length=100)
    NAMEplayer = models.CharField('Имя_игрока', max_length=35)
    LEVELplayer = models.IntegerField('Уровень_игрока')
    Level = models.IntegerField('Уровень_локаций')
    NEXTexp = models.IntegerField('Опыт_ДоСледУровня')
    Code = models.TextField('Код_игрока', max_length=500, null=True)
    
    def __str__(self):
        return self.IDplayer

    class Meta:
        verbose_name='Игрок'
        verbose_name_plural='Игроки'


