function sub() { document.getElementById("f2").submit(); }
var lvl; var LV;
function AutoComplete() {
	document.getElementById("i1").value=document.getElementById("d1").innerHTML;
	document.getElementById("i2").value=document.getElementById("d2").innerHTML;
	document.getElementById("i3").value=document.getElementById("d3").innerHTML;
	document.getElementById("i4").value=document.getElementById("d4").innerHTML;
	document.getElementById("i5").value=document.getElementById("d5").innerHTML;
	document.getElementById("i6").value="print('A')";
}
function Unlock(id, img) { document.getElementById(id).src="/static/images/Achievements/UnLock/"+img; }
function CheckAchs() {
	LV=document.getElementById("d3").innerHTML;
	lvl=document.getElementById("d4").innerHTML;
	let lbools = [(lvl>=2), (lvl>=20), (lvl>=24), (lvl>=29), (lvl>=58), (lvl>=87)]; let limgs = ["Bugs.png","Home.png","Pull.png","Noob.png","Base.png","Last.png"];
	let lids = ["a1","a2","a3","a8","a9","a10"];
	let Lbools = [(LV>=5), (LV>=20), (LV>=35), (LV>=49)]; let Limgs = ["Lv5.png","Lv20.png","Lv35.png","Lv50.png"]; let Lids = ["a4","a5","a6","a7"];
	for (let i=0;i<lbools.length;i++) if (lbools[i]) Unlock(lids[i], limgs[i]);
	for (let i=0;i<Lbools.length;i++) if (Lbools[i]) Unlock(Lids[i], Limgs[i]);
}
AutoComplete();
CheckAchs();