$(document).ready(Start);

function Start() {

	$("input").eq(1).click(principio);
	$("input").eq(2).click(finalizar);
}

function principio() {

	let contenido=$("input").first().val();

	let espacios= $("input").first().val().indexOf(" ",0);

	let caracteres=$("input").first().val().length;

	if(espacios==-1 && caracteres>0){

		let opcion=$("<option>"+contenido+"</option>");
		opcion.attr("value",contenido);
		$("select").prepend(opcion);

	}else{

		alert("No valen espacios ni estar vacío");
	}
}

function finalizar() {

	let contenido=$("input").first().val();

	let espacios= $("input").first().val().indexOf(" ",0);

	let caracteres=$("input").first().val().length;

	if(espacios==-1 && caracteres>0){

		let opcion=$("<option>"+contenido+"</option>");
		opcion.attr("value",contenido);
		$("select").append(opcion);

	}else{

		alert("No valen espacios ni estar vacío");
	}
}