var lvl=Number(document.getElementById("CurPlayer").innerText);
//Сообщения победителю
function WonInfo() {
  let EXP=[10,13,15,17, 21,25,27, 34,41,45, 56,67,74, 93,111,122, 153,183,202, 252,303,333, 416,499,549, 687,824, 906,1113];
  return '<h1>Победа!</h1>\n<h2>Уровень пройден успешно!</h2>\n<h3>Получено '+EXP[lvl]+' очков опыта</h3>';
}
//Надпись кнопки и изображение по умолчанию
var nameButton1="OK", img1='/static/images/ErrorDIm.jpg';
//Сообщения проигрыш/победа/время вышло
var lose='<h1>Ай-ай-ай!</h1>\n<h2>Похоже в коде где-то ошибка...</h2>'; var win=WonInfo(); var notime = '<h1>Ой-ой-ой!</h1>\n<h2>Кажется мы опоздали...</h2>';
//Вызов диалоговых окон
function CustomAlert() {
this.render=function(dialog){
FGrid('dialogbox');
nameButton1 = (dialog==win) ? 'Дальше!' : 'OK';
img1 = (dialog==win) ? '/static/images/WinDim.jpg' : '/static/images/ErrorDIm.jpg';
document.getElementById("ZAPUSK").disabled = document.getElementById("TEXT").disabled = true;  
HTML('dialogboxhead',"<img width='100%' height='100%' class='whmax' src='"+img1+"'></img>");
HTML('dialogboxbody',"<p style='position:relative; top:-10%;'>"+dialog);
HTML('dialogboxfoot', '<button '+ ((dialog==win) ? 'type="submit"' : '') +' onclick="Alert.ok()" class="prel pnt fs150 btns" style="height:85%; width:25%; color:#FFFFFF; background: #999900">'+nameButton1+'</button>');
    //Функция нажатия кнопки ОК/Дальше
    this.ok=function(){
        document.getElementById("ZAPUSK").disabled = document.getElementById("TEXT").disabled = false;
        FNone('dialogbox');
        FNone('dialogoverlay');
        if (nameButton1=='Дальше!') {
          let LEVELplayer1=[1,1,2,2,3,3,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
          let Level1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
          let NEXTexp1=[20,8,33,17,36,12,40,6,44,48,53,58,64,71,78,86,94,104,114,125,138,152,167,183,202,222,244,269,295];
          document.getElementById("i1").value = document.getElementById("i2").value = "1";
          document.getElementById("i3").value=LEVELplayer1[lvl];
          document.getElementById("i4").value=Level1[lvl];
          document.getElementById("i5").value=NEXTexp1[lvl];
          document.getElementById("sub").submit();
        } else window.location.reload(false);
    }
 }
}
var Alert=new CustomAlert();
for (let i=1;i<=6;i++) ReadOnly('i'+i, true);
  //Кнопка "Установить"
  function SetCustomSettings() {
    if ((document.getElementById("CLV").innerHTML!="")&&(document.getElementById("CNEXT").innerHTML!=""))
    {
      document.getElementById("i1").value="127.0.0.1";
      document.getElementById("i2").value="127.0.0.1";
      document.getElementById("i3").value=document.getElementById("CLV").innerHTML;
      document.getElementById("i4").value=document.getElementById("SelectCustom").value;
      document.getElementById("i5").value=document.getElementById("CNEXT").innerHTML;
      document.getElementById("i6").value="print(\"A\")";
    }
  }

  //При изменении показателей
  function ChangeCustoms() {
    let EXP=[10,13,15,17, 21,25,27, 34,41,45, 56,67,74, 93,111,122, 153,183,202, 252,303,333, 416,499,549, 687,824, 906,1113,
         1246,1558,1870,2057,2571,3085,3393,4242,5090,5599,6999,8398,9238,11548,13858,15243,19054,22865,25151,31439,37727,41500,51875,62250,68475,85593,102712,112983,141229,169475,
         186422,233028,279633,307597,384496,461395,507534,634418,761302,837432,1046790,1256148,1381763,1727203,2072644,2279908,2849885,3419862,3761849,4702311,5642773,6207050,
         7758813,9310575,10241633,12802041,15362449,16898694,21123367,25348041];
    let Next1=[30,20,8,33,17,36,12,40,6,44,48,53,58,64,71,78,86,94,104,114,125,138,152,167,183,202,222,244,269,295,
           886,2659,790,2369,7108,4024,630,1891,5672,73,14217,5818,28434,16886,3028,56867,37813,14948,79614,48175,10448,111460,59585,156044,87569,1976,218462,105479,305846,
           136372,428185,195157,599459,291862,839242,377847,1174939,540521,1644915,807483,2302881,1046733,6908643,5181440,3108797,828888,20725930,17306068,13544220,8841909,
           3199136,62177791,54418979,45108404,34866771,22064731,6702282,46471408,25348041];
    let l1=Number(document.getElementById("SelectCustom").value);
    document.getElementById("CLV").innerHTML=LV[l1];
    document.getElementById("CNEXT").innerHTML=Next1[l1];
    document.getElementById("CMisc").innerHTML="127.0.0.1<br><br>127.0.0.1<br><br>print(\"A\")<br><br>Данные значения сгенерированы автоматически";
  }
  var lvl=Number(document.getElementById("CurPlayer").innerText);
  document.getElementById("i6").value="1";
  document.getElementById("Code").value=document.getElementById("CodePL").innerHTML;
  document.getElementById("CurPlayer").innerText="";
   var oggs=["Fone-Mus_Laboratory.ogg",
    "BattleField.ogg",
    "Fone-Mus_Mine1.ogg",
    "Fone-Mus_Pirates_Boat.ogg",
    "Fone-Mus_Goblins1.ogg",
    "Fone-Mus_Field1.ogg",
    "Desert0.ogg",
    "Scary.ogg",
    "Moon.ogg",
    "UnknownPlanet.ogg"
    ];

    //Работа с уровнем

    //Инициализация положения робота
    var LevelField;
    var RobotStampY=[2,3,2,1, 2,2,6, 3,2,2, 2,4,4, 2,2,2, 6,7,3, 3,1,4, 5,9,7, 4,5, 6,7];
    var RobotStampX=[3,5,6,6, 6,2,2, 6,2,6, 7,7,7, 7,7,7, 6,1,7, 7,8,7, 8,8,1, 8,7, 5,9];
    var RBX=RobotStampX[lvl];
    var RBY=RobotStampY[lvl];
    //Инициализация положения финиша
    var FinishStampY=[4,3,3,3, 0,0,0, 0,0,0, 4,4,4, 3,3,0, 0,0,0, 6,8,4, 5,5,5, 0,0, 0,0];
    var FinishStampX=[2,2,2,3, 0,0,0, 0,0,0, 0,0,0, 1,1,0, 0,0,0, 2,7,1, 0,0,0, 0,0, 0,0];
    var FBX=FinishStampX[lvl];
    var FBY=FinishStampY[lvl];

    //Полные изображения карт
    var FullImg=[
      "Laboratory1.jpg","Laboratory2.jpg","Laboratory3.jpg","Laboratory4.jpg",
      "BattleField1.jpg","BattleField2.jpg","BattleField3.jpg",
      "Mines1.jpg","Mines2.jpg","Mines3.jpg",
      "PirateShip1.jpg","PirateShip2.jpg","PirateShip3.jpg",
      "GoblinCave1.jpg","GoblinCave2.jpg","GoblinCave3.jpg",
      "Garden1.jpg","Garden2.jpg","Garden3.jpg",
      "Desert1.jpg","Desert2.jpg","Desert3.jpg",
      "BonesHome1.jpg","BonesHome2.jpg","BonesHome3.jpg",
      "TheMoon1.jpg","TheMoon2.jpg",
      "TheUnknownPlanet1.jpg","TheUnknownPlanet2.jpg",
    ];
    //Изображения участков карт
    var PartImg=[
      ["Laboratory/L1.jpg","Laboratory/L2.jpg","Laboratory/L3.jpg","Laboratory/L4.jpg","Laboratory/L5.jpg","Laboratory/L5.jpg","Laboratory/L6.jpg","Laboratory/L6.jpg","Laboratory/L10.jpg","Laboratory/L12.jpg","Laboratory/L7.jpg","Laboratory/L11.jpg","Laboratory/L91.jpg","","","","","","","","","","","","","","","","","","","",""],
      ["War/W1.jpg","War/W2.jpg","War/W3.jpg","War/W4.jpg","War/W5.jpg","War/W14.jpg","War/W6.jpg","War/W13.jpg","War/W15.jpg","","","War/W16.jpg","War/W9.jpg","War/W17.jpg","War/W7.jpg","War/W8.jpg","War/W18.jpg","","","","","","","","","","","","","","","",""],
      ["Mines/M1.jpg","Mines/M2.jpg","Mines/M3.jpg","Mines/M4.jpg","Mines/M23.jpg","Mines/M24.jpg","Mines/M20.jpg","Mines/M21.jpg","Mines/M10.jpg","Mines/M13.jpg","","Mines/M11.jpg","Mines/M12.jpg","Mines/M19.jpg","Mines/M7.jpg","Mines/M8.jpg","Mines/M22.jpg","Mines/M9.jpg","","","","","","","","","","","","","","",""],
      ["Ship/S3.jpg","Ship/S29.jpg","Ship/S30.jpg","Ship/S4.jpg","Ship/S13.jpg","Ship/S14.jpg","Ship/S27.jpg","Ship/S28.jpg","Ship/S10.jpg","","","Ship/S11.jpg","Ship/S6.jpg","","","","","","Ship/S15.jpg","Ship/S9.jpg","Ship/S17.jpg","","","","","","","","","","","",""],
      ["Cave/C1.jpg","Cave/C2.jpg","Cave/C3.jpg","Cave/C4.jpg","Cave/C5.jpg","Cave/C8.jpg","Cave/C6.jpg","Cave/C9.jpg","Cave/C10.jpg","Cave/C12.jpg","Cave/C7.jpg","Cave/C18.jpg","Cave/C11.jpg","Cave/C13.jpg","Cave/C14.jpg","Cave/C13.jpg","Cave/C20.jpg","","Cave/C15.jpg","","","Cave/C15.jpg","","","","","","","","","","",""],
      ["Garden/G1.jpg","Garden/G2.jpg","Garden/G3.jpg","Garden/G4.jpg","Garden/G5.jpg","Garden/G13.jpg","Garden/G6.jpg","Garden/G14.jpg","Garden/G10.jpg","","","Garden/G11.jpg","Garden/G12.jpg","Garden/G20.jpg","Garden/G17.jpg","Garden/G19.jpg","Garden/G21.jpg","","","","","","Garden/G7.jpg","Garden/G9.jpg","Garden/G8.jpg","Garden/G22.jpg","Garden/G16.jpg","","","","","",""],
      (((lvl>=20)&&(lvl<=21)) ? ["Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg","Desert/D16.jpg", "Desert/D17.jpg", "","Desert/D18.jpg", "Desert/D22.jpg", "Desert/D16.jpg","","","","","","","","","Desert/D20.jpg","","","","","", "Desert/D24.jpg", "","","","",""] : ["Desert/D1.jpg","Desert/D2.jpg","Desert/D3.jpg","Desert/D4.jpg","Desert/D8.jpg","Desert/D6.jpg","Desert/D5.jpg","Desert/D7.jpg","Desert/D10.jpg","","Desert/D18.jpg","Desert/D21.jpg","Desert/D16.jpg","","","","","","","","","Desert/D20.jpg","","","","","","Desert/D9.jpg","","","","",""]),
      ["Bones/B1.jpg","Bones/B2.jpg","Bones/B3.jpg","Bones/B4.jpg","Bones/B5.jpg","Bones/B8.jpg","Bones/B6.jpg","Bones/B9.jpg","Bones/B10.jpg","","","Bones/B17.jpg","Bones/B18.jpg","Bones/B12.jpg","","Bones/B14.jpg","Bones/B20.jpg","","","","","","","","","","","","Bones/B7.jpg","Bones/B11.jpg","Bones/B13.jpg","",""],
      ["TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T1.jpg","TheMoon/T2.jpg","","","TheMoon/T7.jpg","TheMoon/T1.jpg","TheMoon/T3.jpg","TheMoon/T4.jpg","TheMoon/T5.jpg","TheMoon/T9.jpg","","","","","","","","","","","","","","","TheMoon/T6.jpg",""],
      ["Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U1.jpg","Unknown/U10.jpg","","","Unknown/U7.jpg","Unknown/U1.jpg","Unknown/U2.jpg","Unknown/U3.jpg","Unknown/U4.jpg","Unknown/U16.jpg","","Unknown/U5.jpg","","","","","","","","","","","","","","Unknown/U13.jpg"]
      ];
    //Построитель карт
    function BuildMAP() {
      document.getElementById("LevelTitle").innerHTML="Уровень 1-"+(lvl+1);
      LevelField[RBX][RBY]=18;
      if (FBY!=0) LevelField[FBX][FBY]=9;
      switch (lvl) {
        case 0: break;
        case 1: LevelField[4][3]=27; break;
        default:
          for (let cr = 0;cr <UnBreakableX[lvl-2].length;cr++) { LevelField[UnBreakableX[lvl-2][cr]][UnBreakableY[lvl-2][cr]]=27; }
          for (let cr1=0;cr1<BreakableX[lvl-2].length; cr1++ ) { LevelField[BreakableX[lvl-2][cr1]][BreakableY[lvl-2][cr1]]=2; }
          for (let cr2 = 0; cr2 < TakeX[lvl-2].length; cr2++ ) { LevelField[TakeX[lvl-2][cr2]][TakeY[lvl-2][cr2]]=3; }
          for (let cr3 = 0; cr3 < PutX[lvl-2].length;  cr3++ ) { LevelField[PutX[lvl-2][cr3]][PutY[lvl-2][cr3]]=4; }
          for (let cr4 = 0;cr4 < BombsX[lvl-2].length; cr4++ ) { LevelField[BombsX[lvl-2][cr4]][BombsY[lvl-2][cr4]]=17; }
          for (let cr5 = 0;cr5<EnemiesX[lvl-2].length; cr5++ ) { LevelField[EnemiesX[lvl-2][cr5]][EnemiesY[lvl-2][cr5]]=16; }
          for (let cr6 = 0;cr6 < DoorsX[lvl-2].length; cr6++ ) { LevelField[DoorsX[lvl-2][cr6]][DoorsY[lvl-2][cr6]]=6; }
          for (let cr7 = 0;cr7<PowFoesX[lvl-2].length; cr7++ ) { LevelField[PowFoesX[lvl-2][cr7]][PowFoesY[lvl-2][cr7]]=15; }
          for (let cr8 = 0;cr8<MedFoesX[lvl-2].length; cr8++ ) { LevelField[MedFoesX[lvl-2][cr8]][MedFoesY[lvl-2][cr8]]=14; }
          for (let cr9 = 0; cr9<PlantsX[lvl-2].length; cr9++ ) { LevelField[PlantsX[lvl-2][cr9]][PlantsY[lvl-2][cr9]]=7; }
          for (let cr10=0;cr10<ToPlantX[lvl-2].length; cr10++) { LevelField[ToPlantX[lvl-2][cr10]][ToPlantY[lvl-2][cr10]]=8; }
          for (let cr11=0;cr11<PlantedX[lvl-2].length; cr11++) { LevelField[PlantedX[lvl-2][cr11]][PlantedY[lvl-2][cr11]]=10; }
          for (let cr12=0;cr12<Targets1X[lvl-2].length;cr12++) { LevelField[Targets1X[lvl-2][cr12]][Targets1Y[lvl-2][cr12]]=13; }
          for (let cr13= 0;cr13<RepairX[lvl-2].length; cr13++) { LevelField[RepairX[lvl-2][cr13]][RepairY[lvl-2][cr13]]=11; }
          for (let cr14= 0;cr14<DoorsAX[lvl-2].length; cr14++) { LevelField[DoorsAX[lvl-2][cr14]][DoorsAY[lvl-2][cr14]]=12; }
          for (let cr15 = 0;cr15<PullAX[lvl-2].length; cr15++) { LevelField[PullAX[lvl-2][cr15]][PullAY[lvl-2][cr15]]=28; }
          for (let cr16 = 0;cr16< PutAX[lvl-2].length; cr16++) { LevelField[PutAX[lvl-2][cr16]][PutAY[lvl-2][cr16]]=30; }
          for (let cr17= 0;cr17<DangerX[lvl-2].length; cr17++) { LevelField[DangerX[lvl-2][cr17]][DangerY[lvl-2][cr17]]=31; }
          break;
      }
    }
    //Построить изображения по карте
    function BuildIMAGE() {
        //Полное изображение
        document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/Locations/"+FullImg[lvl]+"' id='MapFullImage' class='whmax' style='minimum-height:0; minimum-width:0; grid-column-start:1; grid-column-end:"+(LevelField.length+1)+";  grid-row-start:1; grid-row-end:"+(LevelField.length+1)+"; '  />";
        for(let i=0;i<LevelField.length;i++) {
            for(let j=0;j<LevelField[0].length;j++) {
                switch (LevelField[i][j]){
                    //Стена, неразрушимый блок
                    /*case 1:
                    if (i==0) { if ((j!=0)&&(j!=LevelField[0].length-1)) document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][4]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:1; height:100%; width: 100%;' />"; }
                    else if (i==LevelField.length-1) { if ((j!=0)&&(j!=LevelField[0].length-1)) document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][5]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; }
                    else document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][(j==0) ? 6 : 7]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";
                    break;*/
                    //Платформа для езды
                    //case 0: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][8]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Разрушимый блок
                    case 2: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][9]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Линия финиша
                    //case 9: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][10]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Робот
                    case 18: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/1.png' id='Robo' class='whmax z5' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+";' />"; break;
                    //Неразрушимый блок
                    //case 27: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][12]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Объект для взятия
                    case 3: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][13]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Поле для кладки
                    case 4: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][14]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Поле для кладки, заполненное
                    case 5: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][15]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Робот с грузом
                    case 19: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][16]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Бомбы
                    case 17: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][17]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Достаточно настырный противник, видит на 4 клетки во всех направлениях
                    case 16: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][18]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Спасительная дверь
                    case 6: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][19]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Противник с более плохим зрением, видит на 2 клетки во всех направлениях
                    case 15: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][20]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Средний противник, видит на 3 клетки во всех направлениях
                    case 14: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][21]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Грядки
                    case 7: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][22]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Растения
                    case 8: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][23]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />";  break;
                    //Заполненные грядки
                    case 10: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][24]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Противники-цели, безобидны, убираются с помощью Attack()
                    case 13: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][26]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Сломанные проходы для ремонта
                    case 11: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][27]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Автодвери для открытия рычагом
                    case 12: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][28]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Рычаги
                    case 28: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][29]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Поле для кладки и езды
                    case 30: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][30]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Поле под угрозой столкновения метеорита
                    case 31: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][31]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                    //Невидимый робот
                    case 34: document.getElementById("CurImg").innerHTML=document.getElementById("CurImg").innerHTML+"<img src='/static/images/"+PartImg[pt][32]+"' id='m"+(i+1)+"_"+(j+1)+"' style='grid-column:"+(j+1)+"; grid-row:"+(i+1)+"; height:100%; width: 100%;' />"; break;
                }
            }  
        }
    }
    var LV=[1,1,1,2, 2,3,3, 4,4,5, 6,7,8, 9,10,11, 12,13,14, 15,16,17, 18,19,20, 21,22, 23,24,
        25,26,27,27,28,29,29,29,30,31,31,32,32,33,33,33,34,34,34,35,35,35,36,36,37,37,37,38,38,39];
    var level=[4,7,10,13,16,19,22,25,27,29];
    var pt=0;
    for (i=0;i<level.length;i++) { if (lvl<level[i]) { pt=i; document.getElementById("a1").src="/media/"+oggs[i]; break; } }

    //Площадь карты
    if (lvl<level[0]) {
    //Выяснилось : auto auto auto auto auto auto auto auto < 0.125fr < 12.5%
    document.getElementById("CurImg").style.gridTemplateRows="repeat(8, 12.5%)";
    document.getElementById("CurImg").style.gridTemplateColumns="repeat(8, 12.5%)";
    LevelField=[[1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1]];
    BuildMAP();
    BuildIMAGE();
    } else if (lvl<level[4]) {
    document.getElementById("CurImg").style.gridTemplateRows="repeat(9, 11.11111%)";
    document.getElementById("CurImg").style.gridTemplateColumns="repeat(9, 11.11111%)";
    LevelField=[[1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1]];
    BuildMAP();
    BuildIMAGE();
    } else if (lvl<level[6]) {
    document.getElementById("CurImg").style.gridTemplateRows="repeat(10, 10%)";
    document.getElementById("CurImg").style.gridTemplateColumns="repeat(10, 10%)";
    LevelField=[[1,1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1]];
    BuildMAP();
    BuildIMAGE();
    } else if (lvl<level[8]) {
    document.getElementById("CurImg").style.gridTemplateRows="repeat(11, 9.0909%)";
    document.getElementById("CurImg").style.gridTemplateColumns="repeat(11, 9.0909%)";
    LevelField=[[1,1,1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1]];
    BuildMAP();
    BuildIMAGE();
    } else {
    document.getElementById("CurImg").style.gridTemplateRows="repeat(12, 8.33333%)";
    document.getElementById("CurImg").style.gridTemplateColumns="repeat(12, 8.33333%)";
    LevelField=[[1,1,1,1,1,1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,0,0,0,0,0,0,0,0,0,0,1],
                [1,1,1,1,1,1,1,1,1,1,1,1]];
    BuildMAP();
    BuildIMAGE();
    }

//Задания
var dialogs=["Задание: попробуйте создать программу, которая поможет роботу пойти на 2 шага вправо и на 1 шаг вперёд.\n\nПример\nmove_left(5)\nmove_back(3)\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу объехать препятствие и добраться до финиша\n\nПример\nmove_right(2)\nmove_forward(1)\nmove_right(2)\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу выехать из ограждения и добраться до финиша\n\nПример\nmove_right(1)\nmove_back(2)\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу выбраться из лабиринта и добраться до финиша\n\nПример\nmove_right(1)\nmove_back(2)\nmove_left(3)\nmove_forward(2)\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доставить все боеприпасы до укрытия\n\nПример\nTake()\nmove_back(2)\nPut()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доставить все боеприпасы до укрытия без столкновений\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу как можно быстрее доставить все боеприпасы до укрытия без столкновений\n\nВремя выполнения:\n12 секунд",
"Задание: попробуйте создать программу, которая поможет роботу добыть и разложить всю руду по тележкам\n\nПример\nMine()\nTake()\nPut()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу добыть и разложить все ископаемые по тележкам как можно быстрее\n\nВремя выполнения:\n9 секунд",
"Задание: попробуйте создать программу, которая поможет роботу добыть и разложить все ископаемые по тележкам, не попавшись на бомбы\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доехать до двери и открыть её незамеченным\n\nПример\nmove_left(2)\nmove_forward(3)\nOpen()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доехать до двери и открыть её незамеченным\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу незамеченным выбраться с пиратского корабля\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доехать до выхода и одолеть гоблинов по пути\n\nПример\nmove_right(2)\nAttack()\nmove_forward(3)\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу доехать до выхода и одолеть гоблинов (или остаться незамеченным) по пути\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу не пойманным собрать все пропажи и оставить их у входа как можно быстрее\n\nВремя выполнения:\n15 секунд",
"Задание: попробуйте создать программу, которая поможет роботу посадить все растения на отведённые участки землии\n\nПример\nTake()\nmove_forward(5)\nPlant()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу избавиться от мешающих камней и посадить все растения\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу отпугнуть всех кроликов\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу отремонтировать вход\n\nПример\nmove_forward(1)\nBuild()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу отремонтировать путь в гробнице и двигаться дальше\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу избавиться от мумий и прийти к выходу\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу потянуть за рычаг\n\nПример\nmove_forward(1)\nPull()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу расставить капканы в правильной последовательности и доехать до выхода\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу убрать скелетов на пути\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу переместить все образцы в указанные резервуары\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу целым доставить все образцы на базу\n\nПример\nmove_forward(3)\nDefence()\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу пробраться незамеченным и взять образцы топлива\n\nВремя выполнения:\nНеограниченно",
"Задание: попробуйте создать программу, которая поможет роботу забрать последний образец топлива как можно быстрее\n\nВремя выполнения:\n20 секунд"
];
document.getElementById("CurText").innerText=dialogs[lvl];

//Активация кнопки "Код"
if (LV[lvl]>=5) { FBlck('CodeButton'); }

//Блокнот
var CountPages=(Math.floor(LV[lvl]%3)==0) ? Math.floor(LV[lvl]/3)-1 : Math.floor(LV[lvl]/3);
var CurrentPage=0;
var Pages=[["Страница 1/", "Новые вехи робототехники...", "Дорогой дневник, скоро мне предстоит заняться програм-","мированием. Если честно, мне очень страшно. Однако то","что творится сейчас во всём мире намного страшнее.", "Команды для робота", "Недавно профессор показал команды передвижения:","move_left - движение влево | move_right - вправо ","move_forward - двж. вперёд | move_back - назад", "Перемена обстановки", "Да, непохоже что моё путешествие будет таким","радужным. Хорошо что почти не осталось никого,","кто боролся друг с другом. А может и плохо?", "День 1","День 2","День 3"],
["Страница 2/", "Тяжёлая ноша шахтёров", "Пока в лаборатории проводятся исследования,","добыча полезных ископаемых ведётся полным ходом.","Изобрели даже какой-то суперминерал 'ВсеРод'", "Разрушения", "Шахтёр рассказал довольно много о разрушении препятствий.","Во время добычи ископаемых пригодилась команда: Mine().","Также похоже что не все стены разрушаемы.", "Корабли и пираты", "Откуда я знал что ступил на борт пиратского корабля?","Оказывается в наше время они существуют, как и те,","кто борется с ними. Пусть даже такими методами.", "День 4","День 5","День 6"],
["Страница 3/", "Открытие дверей", "На борту корабля узнал о новой интересной","комманде, позволяющей открывать двери: Open()","Осталось только найти двери для её работы", "Поле зрения", "Я выяснил, что пираты видят на расстоянии не больше","4 плиток. Однако, их командир впал в дрёму и вряд ли","увидит чуть больше 2 плиток.", "Страх гоблинов", "На этот раз меня занесло в пещеры гоблинов. Хоть"," учёный Генетикус мне и не по нраву, но он","оснастил робота методом дальней атаки: Attack()", "День 7","День 8","День 9"],
["Страница 4/", "Поле зрения гоблинов", "Как выяснилось каждый гоблин видит только на 3 клетки.","Этого оказывается более чем достаточно для работы метода","атаки. Как же здесь сыро...", "Орды гоблинов и побрякушки", "Оказывается, что гоблины намного опаснее, чем кажется на","первый взгляд. Они любят собираться стаями, если учуят какую-то","диковинку. Интересно, что же за оборудование у учёного?", "Свежий воздух", "Как же прекрасно снова видеть свет! Теперь займёмся","садоводством. Весь ручной труд конечно же на роботе. Но","что-то мне подсказывает, что работа будет не из лёгких.", "День 10","День 11","День 12"],
["Страница 5/", "Садоводство", "Оказывается положить и посадить растение не одно и то же.","Благо для такого случая в роботе предусмотрена функция посадки:","Plant(). Правда чтобы посадить растение, нужна грядка к нему", "Камни и вредители", "Фух, похоже я был прав насчёт тяжести работ. Код становится","писать всё сложнее и сложнее. Даже разложить камни по корзинам","заняло не так уж и мало строк.", "Пустыня", "Познакомился с одним приятным археологом, объясняет очень","интересно и доступно. Правда какое-то время мне придётся","ремонтировать завалы и поможет мне в этом комманда - Build()", "День 13","День 14","День 15"],
["Страница 6/", "Загадки гробницы", "По секрету не так давно узнал от археолога о легенде нахождения","данной гробницы. Когда-то её нашёл неизвестный человек,","который просто передал карту её нахождения и древние чертежи.", "Мумии", "Похоже, что я видел более чем достаточно, чем","просто брать и удивляться спокойно шастающим по гробнице","воскресшим мертвецам. Когда же это закончится?", "Игрушечный домик", "От данного места мне явно становится не по себе. Говорят,","что после окончания работ здесь, я попаду на станцию,","откуда на Луну. Команда, которая тянет рычаги - Pull()", "День 16","День 17","День 18"],
["Страница 7/", "Предметы декора", "Скелеты здесь часть декораций. Было бы очень кстати, если","бы они не выпрыгивали неизвестно откуда при нажатии на","рычаг. Крайне мешают проезду робота и моей работе.", "Польза капканов", "Капканы просто превосходно сбивают с ног. Это становится","очевидно, видя как по костяшкам разлетаются скелеты. Надеюсь","хозяин дома не сильно обидится - хотя признаюсь, это забавно", "Луна", "Похоже нужно обратиться к коммандам, изученным у военного.","Оказывается до сих пор ведутся исследования пород на луне.","С их помощью можно лучше понять структуру остальных планет.", "День 19","День 20","День 21"],
["Страница 8/", "Назойливые астероиды!", "На помеченных территориях предположительно будут падать","астероиды. Лучшая тактика - защита с помощью Defence().","Но нельзя забывать, что перегрев робота уничтожает камни", "Неизвестное далёко...", "Пока летели в поисках мирной-разумной цивилизации, совершили","аварийную посадку. Теперь тихо набрать достаточно топлива,","и домой! Наконец последняя команда - невидимость: Invisibility()", "Домой!", "Прошло всего несколько дней высадки на неизвестной планете,","как нас обступили со всех сторон! Самое главное в этой","миссии осторожность, скорости у робота достаточно.", "День 22","День 23","День 24"],
["Страница 9/", "Комманда print()", "Запись... Инициализировано как 'print()'","print() - комманда языка Python, выводит в окно отладки", "текст, указанный как аргумент. Пример: print(\"Проверка\")","Конкатенация (Сложение) строк", "В ЯП Python можно складывать строки. Так из строк","'Я -' и ' Робо', при сложении можно получить 'Я - Робо'.","Пример с выводом в окно: print(\"Я -\"+\" Робо\")", "Переменные", "В ЯП переменные служат основным узлом для выполнения","разных операций в зависимости от их типа. Примеры","объявления переменных: example=555; text=\"Текст\"", "День 25","День 26","День 27"],
["Страница 10/", "Условия", "Одно из средств, позволяющих разбить выполнение кода на 2","линии. Если условие выполнено или нет. От начала следующей", "строки от условия 4 пробела. Пример синтаксиса: if (...): ... else: ...","Цикл while", "Цикл - конструкция, позволяющая выполнять действия","определённое/неопределённое количество раз. Цикл while","является неопределённым и выполняется, пока условие истинно", "Цикл for", "Определённый цикл. Выполняется определённое в блоке условий","количество раз. Можно использовать с массивами или использовать","конструкцию range(..,..,..) для задания абстрактной версии массива", "День 28","День 29","День 30"],
["Страница 11/", "Ввод данных", "Осуществить ввод данных в Python можно с помощью команды","input() напротив переменной, в которую идёт запись значения.", "Пример: a=input()","Массивы", "Совокупность связанных между с собой значений одного типа, к которым","можно обратиться с помощью числового ключа. Нумерация ключа с 0.","Пример: from array import *; arr=('s',\"1234\",\"Шире\")", "Списки", "То же, что и массив, но может содержать значения разного типа.","Можно обратиться с помощью числового ключа. Нумерация ключа с 0.","Пример: A=[\"12\",0,True]; print(A[0],A[1],A[2])", "День 31","День 32","День 33"],
["Страница 12/", "Ввод данных, метод разделения", "Для одновременного ввода 2 значений используется метод split().","Вводят в таком случае 2 значения через пробел.", "Пример: a,b=input().split()","Обмен значений", "В ЯП Python используется самая простая конструкция","обмена значений переменных. Пример: a,b=input().split()","a,b=b,a; print(a, b)", "Словарь", "Конструкция, похожая на массив и список, но обладающая собственными","указанными ключами, а также рядом методов работы с ней.","Пример: d={\"Sample\":1, \"text\":2}", "День 34","День 35","День 36"],
["Страница 13/", "Множество", "Особая совокупность значений, получаемая из имеющихся величин.","Устанавливает метод set и устраняет повторения в таких типах как строка.", "Пример: a=set(\'hello\')'","Срезы", "Срезы позволяют получать части строк, представляя их","в виде массива символов. Пример среза: a=\"Я друг ч\"","a=a[0:5]", "Портал","Кажется, я наконец полностью освоил человеческую речь.", "После выполнения всех указаний хозяина, он отпустил меня. Передо мной","возникла межпространственная расщелина. Прилечу ли я?", "День 37","День 38","День 39"],
["Страница 14/", "Язык С++. Вывод.", "Внезапно я встретил старца (?) по пути и он поведал мне,","что есть другие языки программирования. Так,", " я понял, что вывод в С++ отличается - cout<<\"text\"", "Директивы и пространства","Изучая С++, заметил: для доступа к методам нужны:","#include ...","using namespace ...", "Строки - массив символов","Оказывается строки все это время были преобразован-","ным массивом символов, который в С++ записан так:","char[] = \"\"", "День 40","День 41","День 42"],
["Страница 15/", "Указатели","В С++ есть переменные, которые ссылают на другие:","int *p=&t;","cout<<*p;", "Функции","Методы которые возвращают значения - функции их","использование просто:","int a = Sample(10)", "Возврат значения","Для возврата значения из функции, необходимо","вызвать оператор return со значением типа функции","return 20;", "День 43","День 44","День 45"],
["Страница 16/", "Классы и объекты","Для создания класса используется class, для","создания его объекта такая запись:","Class1 cl1 = new Class1();", "Модификаторы C#","new - создать новый объект ","in - вход параметр функции | ref - вход/выход параметр","out - выходной параметр ф. | params - массив параметр", "Комментарии","/*// (JS, C++, C#...) В разных ЯП есть комментарии, они */ ","# (Python, PHP) необходимы для понимания написанного","{ (Pascal) кода другими людми для уменьшения проблем } ", "День 46","День 47","День 48"],
["Страница 17/", "Математические функции","В Pascal существуют встроенные мат. функции, по типу:","sin(), cos(), abs() и т.д","В остальных ЯП их можно подключить библиотеками.", "Конец?", "Дорогой читатель, помни мы ценим каждое","мгновение, проведённое тобой здесь.","В путь, программист!", "День 49","День 50","Финал"]];
var graphs=["SheetHeader", "NoteHeader1", "Note1_1","Note1_2","Note1_3", "NoteHeader2", "Note2_1","Note2_2","Note2_3", "NoteHeader3", "Note3_1","Note3_2","Note3_3", "NoteUnlock1","NoteUnlock2","NoteUnlock3"];
//Проверка граф блокнота
function CheckGraphs() {
  for (let gr=0;gr<graphs.length;gr++){
    let allLV=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
    document.getElementById(graphs[gr]).innerHTML = (((LV[lvl]>=allLV[(1+CurrentPage)*3-3])&&(((gr>=0)&&(gr<5))||(gr==13)))||((LV[lvl]>=allLV[(1+CurrentPage)*3-2])&&(((gr>=5)&&(gr<9))||(gr==14)))||((LV[lvl]>=allLV[(1+CurrentPage)*3-1])&&(((gr>=9)&&(gr<13))||(gr==15)))) ? Pages[CurrentPage][gr] : "";
  }
}
//На следующую страницу
function ToNextPage(){
  CurrentPage=(CurrentPage<CountPages) ? CurrentPage + 1 : 0;
  CheckGraphs();
}
//На предыдущую страницу
function ToPrevPage(){
  CurrentPage=(CurrentPage>0) ? CurrentPage - 1 : CountPages;
  CheckGraphs();
}
//Задание параметров страниц Блокнота
function InitializePages() {
for (let pg=0;pg<Pages.length;pg++) { Pages[pg][0]+=(1+CountPages); }
CheckGraphs();
}
InitializePages();