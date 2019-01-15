$(document).ready(Inicio);

function Inicio(){

	$("input[type=button]").eq(0).click(alPrincipio);
	$("input[type=button]").eq(1).click(alFinal);

}

function alPrincipio(){

	let numero = $("#datos").val().indexOf(" ");

	if ($("#datos").val() != "" && numero == -1) {

		let select = $("select");

		let opcion = $("<option></option>");

		opcion.text($("#datos").val());

		select.prepend(opcion);

	}

} 

function alFinal(){

	let numero = $("#datos").val().indexOf(" ");

	if ($("#datos").val() != "" && numero == -1) {

		let select = $("select");

		let opcion = $("<option></option>");

		opcion.text($("#datos").val());

		select.append(opcion);

	}

} 