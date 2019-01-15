$(document).ready(Start);

function Start(){
	$("input[type=button]").eq(0).click(añadirArriba);
	$("input[type=button]").eq(1).click(añadirAbajo);
}

function añadirAbajo(){
	let datos=$("#datosInput").val();

	let aux = datos.indexOf(' ');

	if (datos != "" && aux == -1 ) {

		let nuevo_option=$("<option></option>");

		nuevo_option.text(datos);

		$("#datosSelect").append(nuevo_option);
	}

	
}

function añadirArriba(){
	let datos=$("#datosInput").val();

	let aux = datos.indexOf(' ');

	if (datos != "" && aux == -1) {

		let nuevo_option=$("<option></option>");

		nuevo_option.text(datos);

		$("#datosSelect").prepend(nuevo_option);
	}
	
}