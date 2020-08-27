#C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64\Scripts\new\Scripts\new\main
from django import template

register = template.Library()

@register.assignment_tag
def hello_world(name):
    salute = 'Hello' + name

    return salute
