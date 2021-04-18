  function Proverka() {
    //Остановка выполнения программы роботом
    var crashBreak=false;
    //"Уничтожение" робота
    function RobotDrop(){ document.getElementById("Robo").src="/static/images/"+PartImg[pt][8]; }
    //Функция уронить что-либо перед роботом
    function Drop(prm, rx, ry){
      switch (prm){
        case 1: document.getElementById("m"+(rx+1)+"_"+(ry+2)).src="/static/images/"+PartImg[pt][8]; break;
        case 2: document.getElementById("m"+(rx+2)+"_"+(ry+1)).src="/static/images/"+PartImg[pt][8]; break;
        case 3: document.getElementById("m"+(rx+1)+"_"+ry).src="/static/images/"+PartImg[pt][8]; break;
        case 4: document.getElementById("m"+rx+"_"+(ry+1)).src="/static/images/"+PartImg[pt][8]; break;
        default: break;
      }
    }
    //Перегрузка, подготовленные значения
    function Drop(mrx, mry){ document.getElementById("m"+(mrx)+"_"+(mry)).src="/static/images/"+PartImg[pt][8]; }

    //Противники, делятся на:
    /*
    1. Неубиваемые            [Пираты/Пришельцы]
    Отличительные особенности:
    - Можно обмануть правильно объехав или применив Invisibility()
    - Невозможно усыпить с помощью Attack()
    - Видят на 4 клетки вверх-вниз-влево-вправо
    - Не видят за препятствиями
    2. Сонные                 [Капитан пиратов]
    - Можно обмануть правильно объехав или применив Invisibility()
    - Невозможно усыпить с помощью Attack()
    - Видят на 2 клетки вверх-вниз-влево-вправо
    - Не видят за препятствиями
    3. Обычные                [Гоблины/Мумии]
    - Нельзя использовать Invisibility() (Пока просто нет спрайтов под это, поэтому не ясно)
    - Усыпляются с помощью Attack()
    - Видят на 3 клетки вверх-вниз-влево-вправо
    - Не видят за препятствиями
    4. Препятствия            [Кролики/Скелеты]
    - Для победы на уровне нужно всех устранить (В зависимости от уровня разными способами)
    */

    //Уронить врага
    function DropEnemy(posx,posy){
      let FoesD=["","","","Ship/S16.jpg","Cave/C10.jpg","Garden/G10.jpg","Desert/D17.jpg","","",""];
      document.getElementById("m"+(RBX+1+posx)+"_"+(RBY+1+posy)).src="/static/images/"+FoesD[pt];
    }
    //Зрение противников
    function FCheck(rbx, rby, cond, FoesD) {
      if ((LevelField[RBX][RBY+rby]==27)||(LevelField[RBX][RBY+rby]==2)) return true;
      if (LevelField[RBX][RBY+rby]==cond)
      {
        document.getElementById("m"+(1+RBX)+"_"+(1+RBY+rby)).src="/static/images/"+FoesD[pt];
        crashBreak=true;
        return true;
      }
      return false;
    }
    //Просмотр на обнаружение противниками
    function CheckIfFoes(Dist, Pow, FoeIm){
      if (RBY+Dist>=LevelField.length) for (let rby=1;rby<LevelField.length-RBY;rby++) if (FCheck(RBX, RBY+rby, Pow, FoeIm)) break;
      else for (let rby=1;rby<=Dist;rby++) if (FCheck(RBX, RBY+rby, Pow, FoeIm)) break;

      if (RBY-Dist>0) for (let rby=1;rby<=Dist;rby++) if (FCheck(RBX, RBY-rby, Pow, FoeIm)) break;
      else for (let rby=1;rby<0+RBY;rby++) if (FCheck(RBX, RBY-rby, Pow, FoeIm)) break;

      if (RBX-Dist>0) for (let rbx=1;rbx<=Dist;rbx++) if (FCheck(RBX-rbx, RBY, Pow, FoeIm)) break;
      else for (let rbx=1;rbx<0+RBX;rbx++) if (FCheck(RBX-rbx, RBY, Pow, FoeIm)) break;

      if (RBX+Dist>=LevelField.length) for (let rbx=1;rbx<LevelField.length-RBX;rbx++) if (FCheck(RBX+rbx, RBY, Pow, FoeIm)) break;
      else for (let rbx=1;rbx<=Dist;rbx++) if (FCheck(RBX+rbx, RBY, Pow, FoeIm)) break;
    }

    //Вспомогательные функции взаимодействия.

    //Простое взаимодействие
    function Interact(rx, ry, status, img, id) { LevelField[rx][ry]=status;  if (document.getElementById(id)) document.getElementById(id).src="/static/images/"+img; }
    //Взаимодействие с условием
    function Interaction (bool, s, img, rx, ry) { if (bool){ Interact(rx, ry, s, img, "m"+(rx+1)+"_"+(ry+1)); return true; } return false; }
    //Взаимодействие [2] с условием
    function Interaction2(bool, s1, s2, img1, img2, rx, ry, rx2, ry2) {
        if (bool){
          Interact(rx, ry, s1, img1, "m"+(rx+1)+"_"+(ry+1));
          Interact(rx2, ry2, s2, img2, "Robo");
          return true;
        }
        return false;
    }
    //Положить предмет
    function IPut(rx, ry) { if (Interaction((LevelField[rx][ry]==4)||(LevelField[rx][ry]==30), 5, PartImg[pt][15], rx, ry)) return true; return false; }
    //Взять предмет
    function ITook(rx,ry, rx2,ry2) { if (Interaction2((LevelField[rx][ry]==3)||(LevelField[rx][ry]==8), 0, ((LevelField[rx][ry]==8) ? 20 : 19), PartImg[pt][8], PartImg[pt][16], rx, ry, rx2, ry2)) return true; return false; }
    //Усыпление противника
    function ASleep(rbx, rby) {
      if ((LevelField[RBX+rbx][RBY+rby]==14)||(LevelField[RBX+rbx][RBY+rby]==13))
      {
        let FoesD=["","","","Ship/S16.jpg","Cave/C17.jpg","Garden/G18.jpg","Desert/D27.jpg","","",""];
        Interact(RBX+rbx,RBY+rby,0,FoesD[pt],"m"+(RBX+1+rbx)+"_"+(RBY+1+rby));
        setTimeout(DropEnemy,200,rbx,rby);
        return true;
      }
      return false;
    }
    //Открыть двери рычагом
    function OpenDoorsAuto() { for (let c=0;c<DoorsAX[lvl-2].length;c++) Interact(DoorsAX[lvl-2][c], DoorsAY[lvl-2][c], 0, PartImg[pt][8], "m"+(DoorsAX[lvl-2][c]+1)+"_"+(DoorsAY[lvl-2][c]+1)); }
    //Просмотреть были ли правильно разложены капканы
    function BonesCheck() {
        for (let r=0;r<PutAX[lvl-2].length;r++) {
          if (LevelField[PutAX[lvl-2][r]][PutAY[lvl-2][r]]==5) Interact(PutAX[lvl-2][r],PutAY[lvl-2][r], 30, PartImg[pt][30], "m"+(PutAX[lvl-2][r]+1)+"_"+(PutAY[lvl-2][r]+1));
          else { let En=["","","","","","","","Bones/B15.jpg","",""]; Interact(PutAX[lvl-2][r],PutAY[lvl-2][r], 27, En[pt], "m"+(PutAX[lvl-2][r]+1)+"_"+(PutAY[lvl-2][r]+1)); }
        }
    }
    //Хранит память о сложных перестановках
    function Memory(bool) {
      if (bool) {
          let a=18;
          let c=0;
          switch (LevelField[RBX][RBY]) { case 19: case 20: case 34: a=LevelField[RBX][RBY]; break; }
          if ((lvl>2)&&(PutAX[lvl-2].length!=0)) for (let r=0;r<PutAX[lvl-2].length;r++) if ((RBX==PutAX[lvl-2][r])&&(RBY==PutAY[lvl-2][r])) { c=30; break; } //d=30;
          LevelField[RBX][RBY]=c;
          return a;
      } else{
          crashBreak=true;
          return -1;
      }
    }
    //Опасности - угроза метеорита
    function Dangers(status, img) {
        for (let cr17=0;cr17<DangerX[lvl-2].length;cr17++){
          if ((RBX==DangerX[lvl-2][cr17])&&(RBY==DangerY[lvl-2][cr17]))
          {
            if (LevelField[RBX][RBY]==32){ DangerX[lvl-2][cr17] = DangerY[lvl-2][cr17] = 0; Interact(RBX,RBY, status,img, "Robo"); }
            else { let Wrong=["","","","","","","","","TheMoon/T8.jpg",""]; Interact(RBX,RBY, 0,Wrong[pt], "Robo"); crashBreak=true; }
            break;
          }
        }
    }
    //Проблема - подорвание робота, засечение врагами
    function Problems(a) {
        if (LevelField[RBX][RBY]==17)
          {
            let BombsD=["","","Mines/M17.jpg","","","","","","",""];
            LevelField[RBX][RBY]=0;
            document.getElementById("m"+(RBX+1)+"_"+(RBY+1)).src="/static/images/"+BombsD[pt];
            setTimeout(RobotDrop,500);
            crashBreak=true;
          }
        else
        LevelField[RBX][RBY]=a;

        if (((lvl>=10)&&(lvl<=12))||((lvl>=27)&&(lvl<=28))) {
          if ((LevelField[RBX][RBY]!=19)&&(LevelField[RBX][RBY]!=34))
            CheckIfFoes(4, 16, ["","","","Ship/S16.jpg","Cave/C16.jpg","","","","","Unknown/U6.jpg"]);
          CheckIfFoes(2, 15, ["","","","Ship/S18.jpg","","","","","",""]);
        }
        if ((lvl>=13)&&(lvl<=15)||(lvl==21)) {
          CheckIfFoes(3, 14, ["","","","Ship/S18.jpg","Cave/C16.jpg","","Desert/D23.jpg","","",""]);
        }
    }
    //Функция робота "ДвигайВправо"
    function GoToMoveRight() {
      if (lvl==26) Dangers(18, PartImg[pt][11]);
      if (!crashBreak) {
          let a=Memory((RBY<LevelField.length-1)&&(LevelField[RBX][RBY+1]!=1)&&(LevelField[RBX][RBY+1]!=27)&&(LevelField[RBX][RBY+1]!=2)&&(LevelField[RBX][RBY+1]!=3)&&(LevelField[RBX][RBY+1]!=4)&&(LevelField[RBX][RBY+1]!=5)&&(LevelField[RBX][RBY+1]!=8)&&(LevelField[RBX][RBY+1]!=10)&&(LevelField[RBX][RBY+1]!=13)&&(LevelField[RBX][RBY+1]!=11)&&(LevelField[RBX][RBY+1]!=28)&&(LevelField[RBX][RBY+1]!=12)&&(LevelField[RBX][RBY+1]!=29));
          if (a==-1) return;
          RBY++;
          document.getElementById('Robo').style.gridColumn=RBY+1;
          Problems(a);
      }
    }
    //Функция робота "ДвигайВлево"
    function GoToMoveLeft() {
      if (lvl==26) Dangers(18, PartImg[pt][11]);
      if (!crashBreak) {
        let a=Memory(((RBY>0)&&(LevelField[RBX][RBY-1]!=1)&&(LevelField[RBX][RBY-1]!=27)&&(LevelField[RBX][RBY-1]!=2)&&(LevelField[RBX][RBY-1]!=3)&&(LevelField[RBX][RBY-1]!=4)&&(LevelField[RBX][RBY-1]!=5)&&(LevelField[RBX][RBY-1]!=8)&&(LevelField[RBX][RBY-1]!=10)&&(LevelField[RBX][RBY-1]!=13)&&(LevelField[RBX][RBY-1]!=11)&&(LevelField[RBX][RBY-1]!=28)&&(LevelField[RBX][RBY-1]!=12)&&(LevelField[RBX][RBY-1]!=29)));
        if (a==-1) return;
        RBY--;
        document.getElementById('Robo').style.gridColumn=RBY+1;
        Problems(a);
      }
    }
    //Функция робота "ДвигайВперёд"
    function GoToMoveUp() {
      if (lvl==26) Dangers(18, PartImg[pt][11]);
      if (!crashBreak) {
        let a=Memory(((RBX>0)&&(LevelField[RBX-1][RBY]!=1)&&(LevelField[RBX-1][RBY]!=27)&&(LevelField[RBX-1][RBY]!=2)&&(LevelField[RBX-1][RBY]!=3)&&(LevelField[RBX-1][RBY]!=4)&&(LevelField[RBX-1][RBY]!=5)&&(LevelField[RBX-1][RBY]!=8)&&(LevelField[RBX-1][RBY]!=10)&&(LevelField[RBX-1][RBY]!=13)&&(LevelField[RBX-1][RBY]!=11)&&(LevelField[RBX-1][RBY]!=28)&&(LevelField[RBX-1][RBY]!=12)&&(LevelField[RBX-1][RBY]!=29)));
        if (a==-1) return;
        RBX--;
        document.getElementById('Robo').style.gridRow=RBX+1;
        Problems(a);
      }
    }
    //Функция робота "ДвигайНазад"
    function GoToMoveDown() {
      if (lvl==26) Dangers(18, PartImg[pt][11]);
      if (!crashBreak) {
        let a=Memory(((RBX<LevelField.length-1)&&(LevelField[RBX+1][RBY]!=1)&&(LevelField[RBX+1][RBY]!=27)&&(LevelField[RBX+1][RBY]!=2)&&(LevelField[RBX+1][RBY]!=3)&&(LevelField[RBX+1][RBY]!=4)&&(LevelField[RBX+1][RBY]!=5)&&(LevelField[RBX+1][RBY]!=8)&&(LevelField[RBX+1][RBY]!=10)&&(LevelField[RBX+1][RBY]!=13)&&(LevelField[RBX+1][RBY]!=11)&&(LevelField[RBX+1][RBY]!=28)&&(LevelField[RBX+1][RBY]!=12)&&(LevelField[RBX+1][RBY]!=29)));
        if (a==-1) return;
        RBX++;
        document.getElementById('Robo').style.gridRow=RBX+1;
       Problems(a);
      }
    }
    //Функция асинхронного "Торомоза"
    function sleep(ms) {
      ms += new Date().getTime();
      while (new Date() < ms) {}
    }
    //Функция серии "Двигай"
    function Move(direction, count) {
      while (count>0) {
        switch (direction) {
          case "right": setTimeout(GoToMoveRight,250); break;
          case "left": setTimeout(GoToMoveLeft,250); break;
          case "forward": setTimeout(GoToMoveUp,250); break;
          case "back": setTimeout(GoToMoveDown,250); break;
        }
        count--;
        sleep(100);
      }
    }
    //Проломать перед собой
    function Break(rx,ry) {
        let AnimateMine=["Laboratory/L13.jpg","","Mines/M18.jpg","","Cave/C19.jpg"];
        if (AnimateMine[pt]=="") crashBreak=true;
        if (LevelField[rx][ry]==2){
          LevelField[rx][ry]=0; 
          document.getElementById("m"+(rx+1)+"_"+(ry+1)).src="/static/images/"+AnimateMine[pt];
          setTimeout(Drop,200, rx+1, ry+1);
          return true;
        }
        return false;
    }
    //Функция "Рыть"
    function Mine() {
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1];
        let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (Break(rxs[i],rys[i])) return;
        crashBreak=true;
      }
    }
    //Функция "Взять"
    function Take() {
      if ((LevelField[RBX][RBY]==19)||(LevelField[RBX][RBY]==20)) crashBreak=true;
      if (lvl==26) Dangers(19, PartImg[pt][16]);
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (ITook(rxs[i],rys[i], RBX,RBY)) return;
        crashBreak=true;
      }
    }
    //Функция "Положить"
    function Put() {
      if ((LevelField[RBX][RBY]==18)||(LevelField[RBX][RBY]==20)) crashBreak=true;
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (IPut(rxs[i],rys[i])) { Interact(RBX, RBY, 18, PartImg[pt][11], "Robo"); return; }
        crashBreak=true;
      }
    }
    //Функция "Открыть"
    function Open () {
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (Interaction((LevelField[rxs[i]][rys[i]]==6), 9, PartImg[pt][8], rxs[i],rys[i])) return;
        crashBreak=true;
      }
    }
    //Функция "Ататататата"
    function Attack() {
      if (!crashBreak){       
          let check=false;
          if (RBY+4<LevelField.length) for (let rby=1;rby<=4;rby++) { if ((LevelField[RBX][RBY+rby]==27)||(LevelField[RBX][RBY+rby]==10)) break;
            if (ASleep(0,rby)) { check=true; break; } 
          }
          else for (let rby=1;rby<=LevelField.length-RBY;rby++) { if ((LevelField[RBX][RBY+rby]==27)||(LevelField[RBX][RBY+rby]==10)) break;
            if (ASleep(0,rby)) { check=true; break; }
          }

          if (RBY-4>=0) for (let rby=1;rby<=4;rby++) { if ((LevelField[RBX][RBY-rby]==27)||(LevelField[RBX][RBY-rby]==10)) break;
            if (ASleep(0,rby*(-1))) { check=true; break; }
          }
          else for (let rby=1;rby<=0+RBY;rby++) { if ((LevelField[RBX][RBY-rby]==27)||(LevelField[RBX][RBY-rby]==10)) break;
            if (ASleep(0,rby*(-1))) { check=true; break; }
          }

          if (RBX-4>=0) for (let rbx=1;rbx<=4;rbx++) { if ((LevelField[RBX-rbx][RBY]==27)||(LevelField[RBX-rbx][RBY]==10)) break;
            if (ASleep(rbx*(-1),0)) { check=true; break; } 
          }
          else for (let rbx=1;rbx<=0+RBX;rbx++) { if ((LevelField[RBX-rbx][RBY]==27)||(LevelField[RBX-rbx][RBY]==10)) break;
            if (ASleep(rbx*(-1),0)) { check=true; break; } 
          }

          if (RBX+4<LevelField.length) for (let rbx=1;rbx<=4;rbx++) { if ((LevelField[RBX+rbx][RBY]==27)||(LevelField[RBX+rbx][RBY]==10)) break;
            if (ASleep(rbx,0)) { check=true; break; } 
          }
          else for (let rbx=1;rbx<LevelField.length-RBX;rbx++) { if ((LevelField[RBX+rbx][RBY]==27)||(LevelField[RBX+rbx][RBY]==10)) break;
            if (ASleep(rbx,0)) { check=true; break; } 
          }
          crashBreak=!check;
        }
    }
    //Функция "Посадить"
    function Plant() {
      if ((LevelField[RBX][RBY]==18)||(LevelField[RBX][RBY]==19)) crashBreak=true;
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (Interaction2((LevelField[rxs[i]][rys[i]]==7), 10, 18, PartImg[pt][24], PartImg[pt][11], rxs[i], rys[i], RBX, RBY)) return;
        crashBreak=true;
      }
    }
    //Функция "ПостройКа"
    function Build() {
      let AnimateBuild=["","","","","","",((lvl>=20)&&(lvl<=21)) ? "Desert/D26.jpg" : "Desert/D25.jpg"];
      if (AnimateBuild[pt]=="") crashBreak=true;
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (Interaction((LevelField[rxs[i]][rys[i]]==11), 0,AnimateBuild[pt], rxs[i],rys[i])) { setTimeout(Drop,200, rxs[i]+1, rys[i]+1); return; };
        crashBreak=true;
      }
    }
    //Функция "ТяниЗаРычагКронк"
    function Pull(){
      let Pull=["","","","","","","","Bones/B19.jpg","",""];
      if (!crashBreak) {
        let rxs = [RBX,RBX+1,RBX,RBX-1]; let rys = [RBY+1,RBY,RBY-1,RBY];
        for (let i=0;i<rxs.length;i++) if (Interaction((LevelField[rxs[i]][rys[i]]==28), 29, Pull[pt], rxs[i], rys[i])) { OpenDoorsAuto(); if ((lvl>=23)&&(lvl<=24)) BonesCheck(); return; }
        crashBreak=true;
      }
    }
    //Функция "Защищайся!"
    function Defence() { let Def=["","","","","","","","","TheMoon/T10.jpg",""]; Interact(RBX, RBY, 32, Def[pt], "Robo"); }
    //Функция "Невидимость"
    function Invisibility() { let Def=["","","","","","","","","TheMoon/T10.jpg",""]; Interact(RBX, RBY, 34, PartImg[pt][32], "Robo"); }

    //Функция серии "Действие"
    function Action(act){
      if (act.indexOf("Mine")!=-1) { setTimeout(Mine,200); sleep(50); }
      else if (act.indexOf("Take")!=-1) { setTimeout(Take,200); sleep(50); }
      else if (act.indexOf("Put")!=-1) { setTimeout(Put,200); sleep(50); }
      else if (act.indexOf("Open")!=-1) { setTimeout(Open,200); sleep(50); }
      else if (act.indexOf("Attack")!=-1) { setTimeout(Attack,200); sleep(50); }
      else if (act.indexOf("Plant")!=-1) { setTimeout(Plant,200); sleep(50); }
      else if (act.indexOf("Build")!=-1) { setTimeout(Build,200); sleep(50); }
      else if (act.indexOf("Pull")!=-1) { setTimeout(Pull,200); sleep(50); }
      else if (act.indexOf("Defence")!=-1) { setTimeout(Defence,200); sleep(50); }
      else if (act.indexOf("Invisibility")!=-1) { setTimeout(Invisibility,200); sleep(50); }
    }
    function Timing(X,Y, bool, TtoAns,TimeToAnswer) {
      for (let it=0;it<X[lvl-2].length;it++) {
        if (LevelField[X[lvl-2][it]][Y[lvl-2][it]]==bool) { if (it==X[lvl-2].length-1) Alert.render((TtoAns<=TimeToAnswer[lvl]) ? win : notime); }
        else { Alert.render(lose); break; }
      }
    }
    function CheckAnswer(TtoAns,TimeToAnswer){
      if (FBY==0)
      {
        switch (lvl) {
          case 4: case 5: case 6: case 7: case 8: case 9: case 15: case 17: case 25: case 26: case 27: case 28:
            Timing(PutX,PutY, 5, TtoAns,TimeToAnswer);
          break;
          case 16:
            Timing(PlantsX,PlantsY, 10, TtoAns,TimeToAnswer);
          break;
          case 18:
            Timing(Targets1X,Targets1Y, 0, TtoAns,TimeToAnswer);
          break;
        }
      }
      else Alert.render((LevelField[FBX][FBY]==18) ? win : lose);
    }
    var ReadLineCmd;
    function LineRead() {
      let TtoAns=0;
      let TimeToAnswer=[0,0,0,0, 0,0,12000, 0,9000,0, 0,0,0, 0,0,15000, 0,0,0, 0,0,0, 0,0,0, 0,0, 0,20000];
      let st=document.getElementById("TEXT").value.toString();
      if (st.indexOf(")")!=-1){
        if ((st.indexOf("(")!=-1)&&(st.indexOf(")")!=-1))
        {
          if (TimeToAnswer[lvl]!=0) TtoAns+=500;
          if ((st.indexOf("_")<st.indexOf("("))&&(st.indexOf("_")!=-1)) Move(st.substring(st.indexOf("_")+1,st.indexOf("(")),st.substring(st.indexOf("(")+1,st.indexOf(")")));
          else Action(st.substring(0,st.indexOf("(")));
          st=st.substring(st.indexOf(")")+1,st.length);
          document.getElementById("TEXT").value=st;
        }
      } else { clearInterval(ReadLineCmd); setTimeout(CheckAnswer,1000,TtoAns,TimeToAnswer); }
    }
    function see(){ ReadLineCmd=setInterval(LineRead,500); }
    if (document.getElementById("ZAPUSK").value!="Cброс") see(); else window.location.reload(false);
    BtnVal("ZAPUSK", "#AA0000", "Cброс");
  }