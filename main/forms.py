from .models import Players
from django.forms import ModelForm, TextInput

class PlayersForm(ModelForm):
    class Meta:
        model = Players
        fields = ["IDplayer","NAMEplayer","LEVELplayer","Level","NEXTexp"]
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
            })}
