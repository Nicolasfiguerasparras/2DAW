$(document).ready(Inicio);

function Inicio() {
	$("input").eq(1).click(principio);
	$("input").eq(2).click(final);

}

function final() {
	
	let campoTexto = $("input").first().val();
	let espacios = $("input").first().val().indexOf(" ", 0);
	let letras = $("input").first().val().length;
	let opcion;

	if (espacios==-1 && letras>0) {
		
		opcion = $("<option>" + campoTexto + "</option>");
		opcion.attr("value", contenido);
		$("select").append(opcion);
	} else {

		alert("ERROR. No puede haber espacios en blanco");

	}
}

function principio() {

	let campoTexto = $("input").first().val();
	let espacios = $("input").first().val().indexOf(" ", 0);
	let letras = $("input").first().val().length;
	let opcion;

	if (espacios==-1 && letras>0) {
		
		opcion = $("<option>" + campoTexto + "</option>");
		opcion.attr("value", contenido);
		$("select").prepend(opcion);
	} else {

		alert("ERROR. No puede haber espacios en blanco");

	}
}