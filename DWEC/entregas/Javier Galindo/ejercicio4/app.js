$(document).ready(Inicio);

function Inicio(){
	let tabla = $("<div></div>");
	let fila, caja;
	let num = 16;

	for(let i=1;i<=15;i++){
		fila = $("<div></div>");
		for(let j=1;j<=16;j++){
			caja = $("<div>"+num+"</div>");
			caja.addClass("caja");
			caja.attr("id", "caja"+num);
			fila.append(caja);
			num++;
		}
		tabla.append(fila);
	}

	$("#contenido").append(tabla);
}