from .models import Players
from .models import Achievements
from django.forms import ModelForm, TextInput, Textarea

class PlayersForm(ModelForm):
    class Meta:
        model = Players
        fields = ["IDplayer","NAMEplayer","LEVELplayer","Level","NEXTexp","Code"]
        widgets = {"IDplayer":TextInput(attrs={
            'id':'i1'
            }),
            "NAMEplayer":TextInput(attrs={
            'id':'i2',
            'type':'password'
            }),
            "LEVELplayer":TextInput(attrs={
            'id':'i3'
            }),
            "Level":TextInput(attrs={
            'id':'i4'
            }),
            "NEXTexp":TextInput(attrs={
            'id':'i5'
            }),
            "Code":Textarea(attrs={
            'id':'i6'
            })}
        widgets

class AchieveForm(ModelForm):
    class Meta:
        model = Achievements
        fields = ["IDp","AchieveBugs","AchieveHome","AchievePull","Achieve5level","Achieve20level","Achieve35level","Achieve50level","AchieveNoob","AchieveBase","AchieveLast"]
        widgets = {"IDp":TextInput(attrs={
            'id':'j1'
            }),
            "AchieveBugs":TextInput(attrs={
            'id':'j2'
            }),
            "AchieveHome":TextInput(attrs={
            'id':'j3'
            }),
            "AchievePull":TextInput(attrs={
            'id':'j4'
            }),
            "Achieve5level":TextInput(attrs={
            'id':'j5'
            }),
            "Achieve20level":TextInput(attrs={
            'id':'j6'
            }),
            "Achieve35level":TextInput(attrs={
            'id':'j7'
            }),
            "Achieve50level":TextInput(attrs={
            'id':'j8'
            }),
            "AchieveNoob":TextInput(attrs={
            'id':'j9'
            }),
            "AchieveBase":TextInput(attrs={
            'id':'j10'
            }),
            "AchieveLast":TextInput(attrs={
            'id':'j11'
            })}
