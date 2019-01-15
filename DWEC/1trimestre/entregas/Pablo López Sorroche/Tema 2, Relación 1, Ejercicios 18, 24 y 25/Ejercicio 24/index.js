let filas = prompt("Introduce el número de filas");
let columnas = prompt("Introduce el número de columnas");

let contador = 1;

for(let i = 1 ; i <= filas ; i++) {
	for(let j = 1 ; j <= columnas ; j++) {
		if((i + j) % 2 == 0) {
			document.write("<div class='cajaNegra'>" + contador + "</div>");
			contador++;
		}else{
			document.write("<div class='caja'>" + contador + "</div>");
			contador++;
		}
		
	}
	document.write("<br><br><br>");
}