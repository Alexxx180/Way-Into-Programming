  function WonInfo() {
      let EXP=[10,13,15,17, 21,25,27, 34,41,45, 56,67,74, 93,111,122, 153,183,202, 252,303,333, 416,499,549, 687,824, 906,1113,
         1246,1558,1870,2057,2571,3085,3393,4242,5090,5599,6999,8398,9238,11548,13858,15243,19054,22865,25151,31439,37727,41500,51875,62250,68475,85593,102712,112983,141229,169475,
         186422,233028,279633,307597,384496,461395,507534,634418,761302,837432,1046790,1256148,1381763,1727203,2072644,2279908,2849885,3419862,3761849,4702311,5642773,6207050,
         7758813,9310575,10241633,12802041,15362449,16898694,21123367,25348041];
      return '<h1>Победа!</h1>\n<h2>Уровень пройден успешно!</h2>\n<h3>Получено '+EXP[lvl-29]+' очков опыта</h3>';
  }
  var nameButton1="OK", img1='/static/images/ErrorDIm.jpg';
  var lose='<h1>Ай-ай-ай!</h1>\n<h2>Похоже в коде где-то ошибка...</h2>'; var win=WonInfo();
  
  function CustomAlert() {
    let dialog1="";
  	this.render=function(dialog){
  	dialog1=dialog;
    FGrid('dialogbox');
    nameButton1 = (dialog==win) ? 'Дальше!' : 'OK';
    img1 = (dialog==win) ? '/static/images/WinDim.jpg' : '/static/images/ErrorDIm.jpg';
    document.getElementById("ZAPUSK").disabled = document.getElementById("TEXT").disabled = true;  
  	HTML('dialogboxhead',"<img width='100%' height='100%' class='whmax' src='"+img1+"'></img>");
  	HTML('dialogboxbody',"<p style='position:relative; top:-10%;'>"+dialog);
    HTML('dialogboxfoot','<button '+ ((dialog==win) ? 'type="submit"' : '') +' onclick="Alert.ok()" class="prel pnt fs150 btns" style="height:85%; width:25%; color:#FFFFFF; background: #999900">'+nameButton1+'</button>');
  }
  this.ok=function(){
  	document.getElementById("ZAPUSK").disabled = document.getElementById("TEXT").disabled = false;
    FNone('dialogbox');
    FNone('dialogoverlay');
  	
    if (nameButton1=='Дальше!') {
      let LEVELplayer1=[26,27,27,28,29,29,29,30,31,31,32,32,33,33,33,34,34,34,35,35,35,36,36,37,37,37,38,38,39,
        39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,46,46,47,47,47,47,47,48,48,48,48,48,48,49,49,50];
      let Level1=[30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
      60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
      let NEXTexp1=[886,2659,790,2369,7108,4024,630,1891,5672,73,14217,5818,28434,16886,3028,56867,37813,14948,79614,48175,10448,111460,59585,156044,87569,1976,218462,105479,305846,
      136372,428185,195157,599459,291862,839242,377847,1174939,540521,1644915,807483,2302881,1046733,6908643,5181440,3108797,828888,20725930,17306068,13544220,8841909,3199136,62177791,54418979,45108404,34866771,22064731,6702282,46471408,0
      ];
      document.getElementById("i1").value="1";
      document.getElementById("i2").value="CAHEK";
      document.getElementById("i3").value=LEVELplayer1[lvl-29];
      document.getElementById("i4").value=Level1[lvl-29];
      document.getElementById("i5").value=NEXTexp1[lvl-29];
      document.getElementById("i6").value=document.getElementById("CodePL").innerHTML;
      document.getElementById("sub").submit();
    }
  }
  }
  function Proverka() {
    var Ans1=['print("Hello, world!")',
    'print("What is your name?\\nMy name is Robo")',
    'print("Are you the programmer?"+" Yes, I am!")',
    'text="I am very smart."\nprint(text)',
    'a=2748312\nb=7238742\nprint(a+b)',
    'a=input()\nprint(a)',
    'if (7>10):\n    print(\"истина\")\nelse:\n    print("ложь")',
    'if ("Превед"=="Привет"):\n    print("Правильно")\nelse:\n    print("Неправильно")',
    'if (log):\n    print("True")\nelse:\n    print("False")',
    'num=1\nwhile (num<=10):\n    print(num)\n    num=num+1',
    'p=1\nprint("Программирование - это нечто")\np=p+3\nwhile (p<7):\n    print("Программирование - это нечто")\n    p=p+3',
    'from array import *\nj=0\nd=array(\'s\',["Илья","Светлана","Сергей"])\nwhile (j<len(d)):\n    print(d[j])\n    j=j+1',
    'h1=0\nd1=["Hello",1,False]\nwhile (h1<len(d1)):\n    print(d1[h1])\n    h1=h1+1',
    'for i in range(2,15,4):\n    print(i)',
    'B=[2,52,12,83,7]\nPr=1\nfor i in B:\n    Pr=Pr*i\nprint(Pr)',
    'a=12\nb=21\na,b=b,a\nprint(a, b)',
    'x=3256\nx=x**34\nprint(x)',
    'x,y=input().split()\nprint(x+y)',
    'print("Дружба","это","здорово",sep="-")',
    'print("Космос ",end="необъятен")',
    'b=(\'Happy\',\'days\')\nprint(b)',
    'd={"Sample":1, "text":2}\nprint(d)',
    'c=set(\"Here\")\nprint(c)',
    'txt="Друг человека"\nprint(txt[0:4])',
    'c,t=input().split()\nc,t=t,c\nprint(c, t)',
    'x=input()\ny=set(x)\nprint(y)',
    'for i in range(0,10,1):\n    print("Даю слово")',
    'G=[1,2,1,2,1,2,1,2]\nfor i in G:\n    print("Объект № "+i)',
    'declartion1="мир Заключить нами между"\nprint(declartion1[4:14]+declartion1[0:3]+declartion1[18:24]+declartion1[3:4]+declartion1[14:18])',

    '#include <iostream.h>\nusing namespace std;\nint main(){\ncout<<"Hello, world!";\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\nint a=17,b=23;\ncout<<a+b;\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\nint array[] = { 3,5,8 };\ncout<<array[0]+array[1]*array[2];\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\nchar text[] = "Sample";\ncout<<text;\n}',
    '#include <iostream.h>\nusing namespace std;\nvoid test(){\ncout<<"It\'s test";\n}\nint main(){\ntest();\n}',
    '#include <iostream.h>\nusing namespace std;\nvoid text(int *p){\ncout<<*p;\n}\nint main(){\nint t="Text";\nint *p=&t;\ntext(*p);\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\nint с=50;\nint p=50;\nif(с!=p){\ncout<<p;\n}\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\nint i=0;\ndo{\ncout<<"Language learn # "<<i<<endl;\ni++;\n}\nwhile(i<3)\n}',
    '#include <iostream.h>\nusing namespace std;\nint main(){\ncout<<"Fibonachchi: "<<endl;\nfor(int i=0;i<5;i++)\n{\ncout<<" "<<i;\n}\n}',
    '#include <iostream.h>\nusing namespace std;\nint summ(int s1, int s2){\nreturn s1+s2;\n}\nint main{\ncout<<summ(1, 10);\n}',

    'using System;\nclass World\n{\nstatic void Main(){\nConsole.WriteLine("Привет, мир!");\n}\n}',
    'using System;\nclass Friends\n{\nstatic void Main(){\nFriend(Console.ReadLine());\n}\nstatic void Friend(string s){\nif(s=="Привет")\n{\nConsole.WriteLine(s);\n}\n}\n}',
    'using System;\nclass SList\n{\nstatic void Main(){\nstring[] ToBuy={ "Яйцо 4 шт.", "Сахар 1 уп.", "Батон 2 уп." };\nPnt(ToBuy);\n}\nstatic void Pnt(string[] bys){\nfor(int i=0;i<bys.Length;i++)\n{\nConsole.WriteLine(i+". "+bys[i]);\n}\n}\n}',
    'using System;\nclass Nums\n{\nstatic void Main(){\nfor(int i=0;i<3;i++)\n{\nType(Convert.ToInt32(Console.ReadLine()));\n}\n}\nstatic void Type(int num){\nif (num%2==0)\n{\nConsole.WriteLine("Число четное");\n}\nelse\n{\nConsole.WriteLine("Число нечетное");\n}\n}\n}',
    'using System;\nclass ModIn\n{\nstatic void Main(){\nMods(Console.ReadLine());\n}\nstatic void Mods(in string phrase){\nConsole.WriteLine(phrase);\n}\n}',
    'using System;\nclass ModOut\n{\nstatic void Main(){\nint i=0;\nMods(out i);\nConsole.WriteLine(i);\n}\nstatic void Mods(out int i){\ni+=250;\n}\n}',
    'using System;\nclass ModNew\n{\nstatic void Main(){\nPnt(new string[] { "Яйцо 4 шт.", "Сахар 1 уп.", "Батон 2 уп." });\n}\nstatic void Pnt(string[] bys){\nfor(int i=0;i<bys.Length;i++)\n{\nConsole.WriteLine(i+". "+bys[i]);\n}\n}\n}',
    'using System;\nclass ModRef\n{\nstatic void Main(){\nint i=0;\nMods(ref i);\nConsole.WriteLine(i);\n}\nstatic void Mods(ref int i){\nConsole.WriteLine(i);\ni=10;\n}\n}',
    'using System;\nclass ModPar\n{\nstatic void Main(){\nPnt("Яблоко 6 шт.", "Молоко 1 уп.", "Батон 3 уп.");\n}\nstatic void Pnt(params string[] bys){\nfor(int i=0;i<bys.Length;i++)\n{\nConsole.WriteLine(i+". "+bys[i]);\n}\n}\n}',
    'using System;\nclass Adds\n{\npublic void Main(){\nConsole.WriteLine("Good Luck!")\n}\n}\nclass Final\n{\nstatic void Main(){\nAdds adds = new Adds();\nadds.Main();\n}\n}\n}',

    'Program Programma1;\nBegin\nwriteln("Привет, мир!");\nEnd.',
    'Program Programma2;\nVar A:integer;\nBegin\nread(A);\nwriteln("A = ",A);\nEnd.',
    'Program Programma3;\nVar A:integer;\nBegin\nwriteln("Пример"); { #Комментарии в Python }\nread(A); { //Комментарии в /* C++ | C# */ }\nwriteln(A);\nEnd.',
    'Program Programma4;\nVar A, B:integer;\nBegin\nA:=30;\nB:=15;\nwriteln(A/B);\nEnd.',
    'Program Programma5;\nBegin\nwriteln(cos(0.75))\nEnd.',
    'Program Programma6;\nBegin\nif not (5=7) then\nwriteln("Значит 5!=7"); else\nwriteln("Не может быть");\nEnd.',
    'Program Programma7;\nBegin\nfor j:=0 to 5 do begin\nwriteln("Итерация # ",j);\nend\nEnd.',
    
    '#include <iostream.h>\nusing namespace std;\nvoid Fact(int f){\nint n=f;\nf=1;\nfor(int i=1;i<=n;i++){\nf=f*i;\n}\nreturn f;\n}\nint main{\nfor(int i=1;i<=10;i++){\ncout<<Fact(i)\n}\n}',
    'using namespace System;\nclass Hello\n{\npublic void Hello(string s) {\nif (s=="Hello") {\nreturn "Hello";\n}\n}\n}\nclass Man\n{\nstatic void Main(){\nHello hl=new Hello();\nConsole.WriteLine(hl.Hello(Console.ReadLine()));\n}\n}',
    'Program Cos;\nBegin\nfor i:=-5 to 5 do begin\nwriteln(cos(i));\nend\nEnd.',
    ];
    let EXP=[10,13,15,17, 21,25,27, 34,41,45, 56,67,74, 93,111,122, 153,183,202, 252,303,333, 416,499,549, 687,824, 906,1113,
         1246,1558,1870,2057,2571,3085,3393,4242,5090,5599,6999,8398,9238,11548,13858,15243,19054,22865,25151,31439,37727,41500,51875,62250,68475,85593,102712,112983,141229,169475,
         186422,233028,279633,307597,384496,461395,507534,634418,761302,837432,1046790,1256148,1381763,1727203,2072644,2279908,2849885,3419862,3761849,4702311,5642773,6207050,
         7758813,9310575,10241633,12802041,15362449,16898694,21123367,25348041];
		document.getElementById("TEXT1").value=(document.getElementById("TEXT").value.toString()==Ans1[lvl-29]) ? "Succeded." : "Error. Something went wrong...";
		Alert.render((document.getElementById("TEXT").value.toString()==Ans1[lvl-29]) ? win : lose);
  }
  var Alert=new CustomAlert();