$(document).ready(Inicio);

function Inicio(){

	let principio = $("input[type=button]").first();
	let fin = $("input[type=button]").last();

	principio.click(Prin);
	fin.click(Fin);
}

function Prin(){
	let datos = $("input[id=datos]").val();
	let select = $("select[id=datos]");

	if(datos.indexOf(" ") == -1 && datos != ""){

		let valor = $("<option></option>");
	    valor.text(datos);

	    select.prepend(valor);
	}
}

function Fin(){
	let datos = $("input[id=datos]").val();
	let select = $("select[id=datos]");

	if(datos.indexOf(" ") == -1 && datos != ""){

		let valor = $("<option></option>");
	    valor.text(datos);

	    select.append(valor);
	}
}