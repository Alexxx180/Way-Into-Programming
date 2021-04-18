from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Players
from .forms import PlayersForm
from collections import deque
# Create your views here.
"""
Здесь происходит передвижение по запросам сервера и клиента
"""

def get_client_ip(request):
    x_forwarded_for=request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip=x_forwarded_for.split(',')[0]
    else:
        ip=request.META.get('REMOTE_ADDR')
    return ip

def index(request):
    global uty
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        if form.is_valid():
            ret1=form.cleaned_data['IDplayer']
            if (int(form.cleaned_data['NEXTexp'])==2):
                    form.save()
                    Players.objects.filter(IDplayer=ret1).update(LEVELplayer=1,Level=0,NEXTexp=30)
                    ret1=form.cleaned_data['IDplayer']
                    Players1 = PlayersForm()
                    Player=Players.objects.get(IDplayer=ret1).IDplayer
                    Player1=Players.objects.get(IDplayer=ret1).NAMEplayer
                    Player2=Players.objects.get(IDplayer=ret1).LEVELplayer
                    Player3=Players.objects.get(IDplayer=ret1).Level
                    Player4=Players.objects.get(IDplayer=ret1).NEXTexp
                    pop=1
                    context = {
                        'form':Players1,
                        'player':Player,
                        'player1':Player1,
                        'player2':Player2,
                        'player3':Player3,
                        'player4':Player4,
                        'pop':pop
                    }
                    return render(request, 'main/GameDevBegin.html', context)
            if Players.objects.filter(IDplayer=ret1):
                ret1=form.cleaned_data['IDplayer']
                ret2=form.cleaned_data['NAMEplayer']
                if int(form.cleaned_data['NEXTexp'])!=1:
                    ret1=form.cleaned_data['IDplayer']
                    ret2=form.cleaned_data['NAMEplayer']
                    form.cleaned_data['NEXTexp']
                    p1=int(form.cleaned_data['Level'])
                    if (p1<1):
                        if (Players.objects.filter(IDplayer=ret1)):
                            Players.objects.filter(IDplayer=ret1).update(LEVELplayer=1,Level=0,NEXTexp=30)
                            return redirect('path5', pk=ret1)
                        else:
                            return redirect('path1', pk=ret1)
                    else:
                        return redirect('path1', pk=ret1)
                if (Players.objects.get(IDplayer=ret1).NAMEplayer==ret2):
                    ret1=form.cleaned_data['IDplayer']
                    Players1 = PlayersForm()
                    Player=Players.objects.get(IDplayer=ret1).IDplayer
                    Player1=Players.objects.get(IDplayer=ret1).NAMEplayer
                    Player2=Players.objects.get(IDplayer=ret1).LEVELplayer
                    Player3=Players.objects.get(IDplayer=ret1).Level
                    Player4=Players.objects.get(IDplayer=ret1).NEXTexp
                    pop=1
                    context = {
                        'form':Players1,
                        'player':Player,
                        'player1':Player1,
                        'player2':Player2,
                        'player3':Player3,
                        'player4':Player4,
                        'pop':pop
                    }
                    return render(request, 'main/GameDevBegin.html', context)
                
        
            
    Players1 = PlayersForm()
    Player=Players.objects.get(IDplayer='127.0.0.1').IDplayer
    Player1=Players.objects.get(IDplayer='127.0.0.1').NAMEplayer
    Player2=Players.objects.get(IDplayer='127.0.0.1').LEVELplayer
    Player3=Players.objects.get(IDplayer='127.0.0.1').Level
    Player4=Players.objects.get(IDplayer='127.0.0.1').NEXTexp
    pop=0
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    'player2':Player2,
    'player3':Player3,
    'player4':Player4,
    'pop':pop
    }
    return render(request, 'main/GameDevBegin.html', context)

def achs(request,pk):
    tr=pk
    form = PlayersForm(request.POST)
    if form.is_valid():
        ret1=form.cleaned_data['IDplayer']
        Players1 = PlayersForm()
        Player=Players.objects.get(IDplayer=ret1).IDplayer
        Player1=Players.objects.get(IDplayer=ret1).NAMEplayer
        Player2=Players.objects.get(IDplayer=ret1).LEVELplayer
        Player3=Players.objects.get(IDplayer=ret1).Level
        Player4=Players.objects.get(IDplayer=ret1).NEXTexp
        pop=1
        context = {
               'form':Players1,
               'player':Player,
               'player1':Player1,
               'player2':Player2,
               'player3':Player3,
               'player4':Player4,
               'pop':pop
        }
        return redirect('/')
    Players1 = PlayersForm()
    Player=Players.objects.get(IDplayer=tr).IDplayer
    Player1=Players.objects.get(IDplayer=tr).NAMEplayer
    Player2=Players.objects.get(IDplayer=tr).LEVELplayer
    Player3=Players.objects.get(IDplayer=tr).Level
    Player4=Players.objects.get(IDplayer=tr).NEXTexp
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    'player2':Player2,
    'player3':Player3,
    'player4':Player4,
    }
    return render(request, 'main/Achievements.html', context)

def about(request,pk):
    tr=pk
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        if form.is_valid():
            ret1=form.cleaned_data['IDplayer']
            ret2=form.cleaned_data['Code']
            Players.objects.filter(IDplayer=ret1).update(Code=ret2)
            
    Players1=PlayersForm()
    Player=Players.objects.get(IDplayer=tr).IDplayer
    Player1=Players.objects.get(IDplayer=tr).NAMEplayer
    Player2=Players.objects.get(IDplayer=tr).LEVELplayer
    Player3=Players.objects.get(IDplayer=tr).Level
    Player4=Players.objects.get(IDplayer=tr).NEXTexp
    Player5=Players.objects.get(IDplayer=tr).Code
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    'player2':Player2,
    'player3':Player3,
    'player4':Player4,
    'player5':Player5,
    }
    return render(request, 'main/GameDevMap.html', context)

def dialog(request, pk):
    tr=pk
    ret=get_client_ip(request)
    Player1=Players.objects.get(IDplayer=tr).IDplayer
    Player2=Players.objects.get(IDplayer=tr).Level
    return render(request, 'main/dialog.html',{'Player1':Player1,'Player2':Player2})

def mecha(request, pk):
    tr=pk
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        if form.is_valid():
            Players.objects.filter(IDplayer=tr).update(LEVELplayer=int(form.cleaned_data['LEVELplayer']),Level=int(form.cleaned_data['Level']),NEXTexp=int(form.cleaned_data['NEXTexp']))
            if (int(form.cleaned_data['Level'])==29):
                return redirect('path5',pk=tr)
            else:
                return redirect('path1',pk=tr)
                
    Players1 = PlayersForm()
    
    Player=Players.objects.get(IDplayer=tr).Level
    Player1=Players.objects.get(IDplayer=tr).NAMEplayer
    Player2=Players.objects.get(IDplayer=tr).Code
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    'player2':Player2,
    }
    return render(request, 'main/GameDevDialogueMech.html',context)

def mecha2(request,pk):
    tr=pk
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        if form.is_valid():
            Players.objects.filter(IDplayer=tr).update(LEVELplayer=int(form.cleaned_data['LEVELplayer']),Level=int(form.cleaned_data['Level']),NEXTexp=int(form.cleaned_data['NEXTexp']))
            if (int(form.cleaned_data['Level'])==58):
                return redirect('path5',pk=tr)
            else:
                return redirect('path1',pk=tr)

    Players1 = PlayersForm()
    Player=Players.objects.get(IDplayer=tr).Level
    Player1=Players.objects.get(IDplayer=tr).Code
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    }
    return render(request, 'main/GameDevDialogueMech2.html',context)

def mecha3(request,pk):
    tr=pk
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        if form.is_valid():
            Players.objects.filter(IDplayer=tr).update(LEVELplayer=int(form.cleaned_data['LEVELplayer']),Level=int(form.cleaned_data['Level']),NEXTexp=int(form.cleaned_data['NEXTexp']))
            if (int(form.cleaned_data['Level'])==88):
                return redirect('/end')
            else:
                return redirect('path1',pk=tr)

    Players1 = PlayersForm()
    Player=Players.objects.get(IDplayer=tr).Level
    Player1=Players.objects.get(IDplayer=tr).Code
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    }
    return render(request, 'main/GameDevDialogueMech3.html',context)

def history(request, pk):
    tr=pk
    ret=get_client_ip(request)
    Player=Players.objects.get(IDplayer=tr).IDplayer
    Player1=Players.objects.get(IDplayer=tr).NAMEplayer
    Player2=Players.objects.get(IDplayer=tr).LEVELplayer
    Player3=Players.objects.get(IDplayer=tr).Level
    Player4=Players.objects.get(IDplayer=tr).NEXTexp
    context = {
    'player':Player,
    'player1':Player1,
    'player2':Player2,
    'player3':Player3,
    'player4':Player4,
    }
    return render(request, 'main/History.html',context)

def end(request):
    return render(request, 'main/GameDevEnd.html')
