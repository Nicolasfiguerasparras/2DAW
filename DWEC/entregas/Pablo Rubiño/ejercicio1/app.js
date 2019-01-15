$(document).ready(Start);

function Start(){
	$("input[type=button]").eq(0).click(Principio);
	$("input[type=button]").eq(1).click(Final);
}

function Principio(){
	let select=$("select");
	let datos=$("#datos").val();
	if ((datos.indexOf(" ") == -1) && datos != "") {
		let nuevo_option=$("<option></option>");
		nuevo_option.text(datos);
		select.prepend(nuevo_option);
	}else{
		alert("No puede contener espacios ni quedar vacío");
	}
	
}

function Final(){
	let select=$("select");
	let datos=$("#datos").val();
	if ((datos.indexOf(" ") == -1) && datos != "") {
		let nuevo_option=$("<option></option>");
		nuevo_option.text(datos);
		select.append(nuevo_option);
	}else{
		alert("No puede contener espacios ni quedar vacío");
	}
}