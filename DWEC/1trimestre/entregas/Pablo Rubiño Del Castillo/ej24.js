let filas = prompt("Introduce el número de filas");
let cols = prompt("Introduce el número de columnas");
let n = 1;

for (let i = 1; i <= filas; i++) {
	for (let j = 1; j <= cols; j++) {
		document.write("<div class='caja'>"+n+"</p></div>");
		n++;
		if (j % cols == 0) {
			document.write("<br><br><br><br>");
		}

	}
}
