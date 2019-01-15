let filas = parseInt(prompt("Dime cuántas filas quieres:"));
let columnas = parseInt(prompt("Dime cuántas columnas quieres:"));
let cont = 1;

for (let i = 1; i <= filas; i++) {
	
	for (let j = 1; j <= columnas; j++) {

		if (j==1) {
			document.write("<div class='bajar caja'>" + cont + "</div>");
		} else {
			document.write("<div class='caja'>" + cont + "</div>");
		}

		cont++;
	}
};








