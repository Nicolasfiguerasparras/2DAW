$(document).ready(Start);

function Start(){

	let delante = $("input[type=button]").first();
	let detras = $("input[type=button]").last();

	delante.click(crearini);
	detras.click(crearfin);
}

function crearini()
{
	let datos =$("input[id=datos]").val();

	if(datos.length > 0 && datos.indexOf(" ")==-1){

	let valor=$("<option></option>");
	valor.text(datos);
	$("select").prepend(valor);
	}
}

function crearfin()
{
	let datos =$("input[id=datos]").val();
	if(datos.length > 0 && datos.indexOf(" ")==-1){

	let valor=$("<option></option>");
	valor.text(datos);
	$("select").append(valor);
	}

}