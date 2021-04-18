function FGrid(id) { document.getElementById(id).style.display = "grid"; }
function FNone(id) { document.getElementById(id).style.display = "none"; }
function FBlck(id) { document.getElementById(id).style.display = "block"; }
function ReadOnly(id, bool) { document.getElementById(id).readOnly=bool; }
function HTML(id, html) { document.getElementById(id).innerHTML=html; }
function BtnVal(id, back, val) { 
	document.getElementById(id).style.background=back;
    document.getElementById(id).value=val;
}
function Id (id) { return document.getElementById(id); };
//Лечение автопроигрывания
//function Play() { document.getElementById("a1").play(); }
//setTimeOut('if (perehod<=100) { LevelsPerehod(); } else {clearInterval(setI2);}',2000);