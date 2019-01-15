$(document).ready(Inicio);

function Inicio() {
	$("input[type='button']").eq(0).click(Principio);
	$("input[type='button']").eq(1).click(Final);
}

function Principio() {
	let datos = $("#datos").eq(0).val();
	if(datos!="" && datos.indexOf(" ")==-1){
		let nuevo_dato = "<option>"+datos+"</option>";
		let select = $("select#datos");
		select.prepend(nuevo_dato);
	}else{
		alert("Los datos no pueden estar vacíos ni tener espacios.")
	}
}

function Final() {
	let datos = $("input#datos").eq(0).val();
	if(datos!="" && datos.indexOf(" ")==-1){
		let nuevo_dato = "<option>"+datos+"</option>";
		let select = $("select#datos");
		select.append(nuevo_dato);
	}else{
		alert("Los datos no pueden estar vacíos ni tener espacios.")
	}
}