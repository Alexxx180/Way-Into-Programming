from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Players
from .forms import PlayersForm
from collections import deque
# Create your views here.
"""
class Collecting:
    def __init__(self, user_text):
        self.directions = deque()  # очередь, содержащая необработанные действия игрока
        self.user_text = user_text
        self.directions.appendleft(self.user_text)
        print(self.directions)
 
 
class Treatmenting:
    def __init__(self, general_deque):
        self.player_x = 0
        self.player_y = 0
        self.directions = general_deque
 
    def _do_command(self):
        global ty, tx
        current_item = self.directions.pop()
        first_bracket = current_item.index('(')  # первое вхождение скобки, чтобы потом удалить её и всё, что за ней
 
        repeat_number = 0
        for element in list(current_item):  # ищем цифру - кол-во повторений команды
            if element.isdigit():
                repeat_number += int(element)

         #"_"+
        current_item = "_"+current_item[:first_bracket]  # теперь наша команда без скобок и цифры
         
        for method in dir(Treatmenting):
            if current_item == method:
                exec('self.{}({})'.format(current_item, repeat_number))
        ty=ty+self.player_y
        tx=tx+self.player_x
 
    def _move_forward(self, repeat=1):
        for time in range(repeat):
            self.player_y += 1
 
    def _move_back(self, repeat=1):
        for time in range(repeat):
            self.player_y -= 1
 
    def _move_left(self, repeat=1):
        for time in range(repeat):
            self.player_x -= 1
 
    def _move_right(self, repeat=1):
        for time in range(repeat):
            self.player_x += 1
 
    def _take(self):
        flag_take = True
 
    def _put(self):
        flag_put = True
 
    def _mine(self):
        flag_mine = True
 
    def _open(self):
        flag_open = True
 
    def _plant(self):
        flag_plant = True
 
    def _attack(self):
        flag_attack = True
 
    def _build(self):
        flag_build = True
 
    def _pull(self):
        flag_pull = True
 
    def _defense(self):
        flag_defense = True
 
    def _invisibility(self):
        flag_invisibility = True
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
            #post = request.POST.copy() # to make it mutable
            #post['IDplayer'] = ret1
            #post['NAMEplayer'] = ret2
# or set several values from dict
            #post.update({'IDplayer': ret1, 'NAMEplayer': ret2})
# or set list
        #post.setlist('list_var', ['some_value', 'other_value']))

# and update original POST in the end
            #request.POST = post
        form = PlayersForm(request.POST)
        if form.is_valid():
            ret1=form.cleaned_data['IDplayer']
            if (int(form.cleaned_data['NEXTexp'])==2):
                    form.save()
                    Players.objects.filter(IDplayer=ret1).update(LEVELplayer=1,Level=0,NEXTexp=30)
                    #return redirect('/about-us')
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
                #pop=int(form.cleaned_data['STATE'])
                ret1=form.cleaned_data['IDplayer']
                ret2=form.cleaned_data['NAMEplayer']
                if int(form.cleaned_data['NEXTexp'])!=1:
                    ret1=form.cleaned_data['IDplayer']
                    ret2=form.cleaned_data['NAMEplayer']
                    form.cleaned_data['NEXTexp']
                    p1=int(form.cleaned_data['Level'])
                    if (p1<1):
                #Players.objects.get(IDplayer='1').NAMEplayer='CAHEK'
                #Players.objects.get(IDplayer='1').LEVELplayer=int(form.cleaned_data['LEVELplayer'])
                #Players.objects.get(IDplayer='1').Level=int(form.cleaned_data['Level'])
                #Players.objects.get(IDplayer='1').NEXTexp=int(form.cleaned_data['NEXTexp'])
                        if (Players.objects.filter(IDplayer=ret1)):
                            Players.objects.filter(IDplayer=ret1).update(LEVELplayer=1,Level=0,NEXTexp=30)
                            return redirect('path1', pk=ret1)
                        else:
                    #form.IDplayer=ret
                    #form.NAMEplayer=ret
                            #form.save()
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
    #Player=Players.objects.all()
    return render(request, 'main/GameDevBegin.html', context)

def about(request,pk):
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
    return render(request, 'main/GameDevMap.html', context)

def dialog(request, pk):
    tr=pk
    ret=get_client_ip(request)
    Player1=Players.objects.get(IDplayer=tr).IDplayer
    Player2=Players.objects.get(IDplayer=tr).Level
    return render(request, 'main/dialog.html',{'Player1':Player1,'Player2':Player2})

def mecha(request, pk):
    #global ty, tx
    #ty=0
    #tx=0
    tr=pk
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        #b1=Players.objects.get(IDplayer='1')
        if form.is_valid():
            #if form.cleaned_data['NAMEplayer']==Players.objects.get(IDplayer=tr).NAMEplayer:
            #Players.objects.get(IDplayer='1').NAMEplayer='CAHEK'
            #Players.objects.get(IDplayer='1').LEVELplayer=int(form.cleaned_data['LEVELplayer'])
            #Players.objects.get(IDplayer='1').Level=int(form.cleaned_data['Level'])
            #Players.objects.get(IDplayer='1').NEXTexp=int(form.cleaned_data['NEXTexp'])
            Players.objects.filter(IDplayer=tr).update(LEVELplayer=int(form.cleaned_data['LEVELplayer']),Level=int(form.cleaned_data['Level']),NEXTexp=int(form.cleaned_data['NEXTexp']))
            return redirect('path1',pk=tr)
            #else:
             #   lines=form.cleaned_data['NAMEplayer']
                #lines=
                #lines=lines.replace('TY','\r\n')
               # k=lines.find(')')
              #  A=[]
                #while (k>0):
                #    A.append(lines[0:k])
                 #   lines=lines[k+1:len(lines)]
                #    k=lines.find(')')
               # for line in A:
                #    collect_directions = Collecting(line)
                #    treat_directions = Treatmenting(collect_directions.directions)
                #    treat_directions._do_command()
               # Players1 = PlayersForm()
    
               # Player=Players.objects.get(IDplayer=tr).Level
                #Player1=Players.objects.get(IDplayer=tr).NAMEplayer
               # rty=ty
                #rtx=tx
               # context = {
               # 'form':Players1,
                #'player':Player,
                #'player1':Player1,
               # 'rty':rty,
                #'rtx':rtx
              #  }
               # return render(request, 'main/GameDevDialogueMech.html',context)
                
    Players1 = PlayersForm()
    
    Player=Players.objects.get(IDplayer=tr).Level
    Player1=Players.objects.get(IDplayer=tr).NAMEplayer
    context = {
    'form':Players1,
    'player':Player,
    'player1':Player1,
    }
    return render(request, 'main/GameDevDialogueMech.html',context)

def mecha2(request,pk):
    tr=pk
    #pop=0
    ret=get_client_ip(request)
    if request.method == 'POST':
        form = PlayersForm(request.POST)
        #b1=Players.objects.get(IDplayer='1')
        if form.is_valid():
            #if form.cleaned_data['NAMEplayer']==Players.objects.get(IDplayer=tr).NAMEplayer:
            #Players.objects.get(IDplayer='1').NAMEplayer='CAHEK'
            #Players.objects.get(IDplayer='1').LEVELplayer=int(form.cleaned_data['LEVELplayer'])
            #Players.objects.get(IDplayer='1').Level=int(form.cleaned_data['Level'])
            #Players.objects.get(IDplayer='1').NEXTexp=int(form.cleaned_data['NEXTexp'])
            Players.objects.filter(IDplayer=tr).update(LEVELplayer=int(form.cleaned_data['LEVELplayer']),Level=int(form.cleaned_data['Level']),NEXTexp=int(form.cleaned_data['NEXTexp']))
            if (int(form.cleaned_data['Level'])==58):
                return redirect('/end')
            else:
                return redirect('path1',pk=tr)
            #else:
               # ctxt = {}
               # exec(form.cleaned_data['NAMEplayer'],ctxt)
               # pop=ctxt
                #Players1 = PlayersForm()
    #
               # Player=Players.objects.get(IDplayer=tr).Level
               # context = {
                #'form':Players1,
                #'player':Player,
               # 'pop':pop
                #}
                #return render(request, 'main/GameDevDialogueMech2.html',context)
        #else:
            #pop=1234

    Players1 = PlayersForm()
    Player=Players.objects.get(IDplayer=tr).Level
    context = {
    'form':Players1,
    'player':Player,
    #'pop':pop
    }
    return render(request, 'main/GameDevDialogueMech2.html',context)

def end(request):
    return render(request, 'main/GameDevEnd.html')
