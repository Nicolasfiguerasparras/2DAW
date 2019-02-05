$(document).ready(Start);

function Start(){
	let tabla=$("<div></div>");
	let fila, celda;

	let num =16
	for (let i = 1 ; i <= 16; i++) {
		fila=$("<div></div>");
		
		for (let j = 1 ; j <= 15; j++){
			celda=$("<div>"+num+"</div>");
			celda.addClass("caja")
			celda.attr("id", "caja"+num);
			fila.append(celda);
			num++;
		}
		tabla.append(fila);
	}
	$("#contenido").append(tabla);

}

