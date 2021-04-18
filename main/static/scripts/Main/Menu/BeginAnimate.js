	function Play() { document.getElementById("a1").play(); }
	var i1, j1, d1;
	function rt1() {
		j1=0;
		i1=0;
		d1=0;
	}
	rt1();
	function Click(){
		document.getElementById("i3").value=1;
		document.getElementById("i4").value=0;
		document.getElementById("i5").value=30;
		sub();
	}
	function ReSelect(id) {
		document.getElementById("New").classList.remove("Bbtn");
		document.getElementById("Con").classList.remove("Bbtn");
		document.getElementById("Ach").classList.remove("Bbtn");
		document.getElementById(id).classList.add("Bbtn");
	}

//Авторизация/Регистрация
function sub1() {
	document.getElementById("OK1").value=(document.getElementById("reg").innerText!="Регистрация") ? "Авторизация" : "Регистрация";
	document.getElementById("reg").innerText=(document.getElementById("reg").innerText!="Регистрация") ? "Регистрация" : "Авторизация";
	document.getElementById("i5").value=(document.getElementById("i5").value!=2) ? 2 : 1;
}
//Подтвердить авторизацию/регистрацию | Продолжить игру
function sub() { 
	document.getElementById("f2").submit(); 
}