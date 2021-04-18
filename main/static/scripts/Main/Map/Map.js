  const screenHeight = window.screen.height;
  var newsh=screenHeight/1080;
  var tr=document.getElementById("w2").innerText;
  for (let i=1;i<=6;i++) { ReadOnly("i"+i, true); }
  document.getElementById("i1").value=document.getElementById("w2").innerText;
           
document.getElementById("Code").value=document.getElementById("code1").innerHTML;
var EXP=[10,13,15,17, 21,25,27, 34,41,45, 56,67,74, 93,111,122, 153,183,202, 252,303,333, 416,499,549, 687,824, 906,1113,
         1246,1558,1870,2057,2571,3085,3393,4242,5090,5599,6999,8398,9238,11548,13858,15243,19054,22865,25151,31439,37727,41500,51875,62250,68475,85593,102712,112983,141229,169475,
         186422,233028,279633,307597,384496,461395,507534,634418,761302,837432,1046790,1256148,1381763,1727203,2072644,2279908,2849885,3419862,3761849,4702311,5642773,6207050,
         7758813,9310575,10241633,12802041,15362449,16898694,21123367,25348041];

var LV=[1,1,1,2, 2,3,3, 4,4,5, 6,7,8, 9,10,11, 12,13,14, 15,16,17, 18,19,20, 21,22, 23,24,
        25,26,27,27,28,29,29,29,30,31,31,32,32,33,33,33,34,34,34,35,35,35,36,36,37,37,37,38,38,39,
        39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,46,46,47,47,47,47,47,48,48,48,48,48,48,49,50];

var Next1=[30,40,41,55,79,49,61,72,80,99,118,130,161,193,212,264,315,347,431,516,568,707,846,931,1160,1837,3331,3636,7310,5502,
           8871,21141,31854,69082,89817,142512,158708,319198,341597,478235,683935,931876,1304626,1865695,2542188,7243673,22746927,65185705,56667820,0
           ];

//Текущий уровень
var lvl=Number(document.getElementById("ways").innerText);
//Подсчёт страниц ежедневника
//Способ 1-ый 
//var CountPages=Math.round((LV[lvl]-LV[lvl]%3)/3)-1;
//Способ 2-ой 
var CountPages=(Math.floor(LV[lvl]%3)==0) ? Math.floor(LV[lvl]/3)-1 : Math.floor(LV[lvl]/3);
//До следующего уровня
var NEXT=Number(document.getElementById("ways1").innerText);
var level=[4,7,10, 13,16,19, 22,25, 27,29, 34,37,42, 47,52,57, 60,65,70, 75,80,85,90];
var scr=[16000,15400,14800, 14200,13600,13000, 12500,11900, 11400,10900, 10200,9400,8600, 7800,6800,5800, 5400,4300,3600, 2100,1350,600,0];
//Завод: 16000 15400 14800 14200 13600 13000 12500 11900 11400 10900 10200 9400 8600 7800 6800 5800 5400  4300
document.getElementById("i2").value=document.getElementById("pass").innerText;
document.getElementById("i3").value=LV[lvl];
document.getElementById("i4").value=lvl;
document.getElementById("i5").value=document.getElementById('ways1').innerHTML;

document.getElementById("Code").maxLength=""+LV[lvl]*10+"";

  InitializePages();
  //Обновление ограничения кода
  function CodeLevel() { document.getElementById("CodeLength").innerHTML="Ограничение: "+document.getElementById("Code").value.length+"/"+document.getElementById("Code").maxLength+" символов"; }
  CodeLevel();
  //Сохранение кода
  function SaveCode1() {
      document.getElementById("i6").value=document.getElementById("Code").value;
      document.getElementById("Form1").submit();
  }
  
if ((lvl>=0)&&(LV[lvl]<5)) { FNone('Terminal'); }

var ExpPot=EXP[lvl]+NEXT;
var perehod=0;
var cuteLv=0;

function LevelsPerehod() {
  document.getElementById("example1").style.width=(EXP[lvl]/ExpPot)*perehod+"%";
  perehod+=4;
}

function LevelsIncrease(c) {
  document.getElementById("sa2").innerText=cuteLv;
  cuteLv=(cuteLv+c<=LV[lvl]) ? cuteLv+c : cuteLv + LV[lvl] - cuteLv;
}

let scroll=0;
for (let i=0;i<level.length;i++){ if (lvl<level[i]){ scroll=scr[i]*newsh; break; } }

function ScrollDown(){
if (pageYOffset==0){
  window.scrollBy({
    top:scroll,
    left:0,
    behavior:"smooth"
  });
}
}

function RealRoad(bool) {
  document.getElementById("lvp").style.gridRow=bool?1:((lvl>=29)?((lvl>=58)?1:2):3);
  document.getElementById("p0").style.gridRow=bool?2:((lvl>28)?((lvl>57)?(88-lvl)*2:(59-lvl)*2):(30-lvl)*2);
}
RealRoad(lvl>=88);
let c=1;
for (let i=0;i<50;i+=10) { if (Math.floor(LV[lvl]/i)) c++; else break; }

var setI2;
var setI3;
function SetAtLoad() {
setI2=setInterval('if (perehod<=100) { LevelsPerehod(); } else {clearInterval(setI2);}',100);
setI3=setInterval('if (cuteLv<=LV[lvl]) { LevelsIncrease(c); } else {clearInterval(setI3);}',100);
}

setTimeout(SetAtLoad, 2300);