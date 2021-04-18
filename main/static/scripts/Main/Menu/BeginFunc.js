document.getElementById("i6").value="print(1)";
	if (Number(document.getElementById("d4").innerText)){
		//document.getElementById("i1").value=document.getElementById("d1").innerText;
		//document.getElementById("i2").value=document.getElementById("d2").innerText;
		document.getElementById("i3").value=Number(document.getElementById("d3").innerText);
		document.getElementById("i4").value=Number(document.getElementById("d4").innerText);
		document.getElementById("i5").value=Number(document.getElementById("d5").innerText);
	} else {
		//document.getElementById("i1").value=document.getElementById("d1").innerText;
		//document.getElementById("i2").value=document.getElementById("d2").innerText;
		document.getElementById("i3").value=1;
		document.getElementById("i4").value=0;
		document.getElementById("i5").value=30;
	}
	if (Number(document.getElementById("d4").innerText)>=1) {
		document.getElementById("Con").disabled=false;
	}
	if (Number(document.getElementById("pop").innerText)==1) {
		document.getElementById("i1").value=document.getElementById("d1").innerText;
		document.getElementById("i2").value=document.getElementById("d2").innerText;
		document.getElementById("i3").value=Number(document.getElementById("d3").innerText);
		document.getElementById("i4").value=Number(document.getElementById("d4").innerText);
		document.getElementById("i5").value=Number(document.getElementById("d5").innerText);
		document.getElementById("f2").hidden=true;
	} else {
		document.getElementById("i3").value=1;
		document.getElementById("i4").value=1;
		document.getElementById("i5").value=1;
	}