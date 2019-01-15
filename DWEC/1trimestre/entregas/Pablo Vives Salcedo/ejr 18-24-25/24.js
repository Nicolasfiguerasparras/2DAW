let alto = prompt("Introduce el número de filas", "ejemplo : 1, 2 , 10...");
let ancho = prompt("Introduce el número de columnas", "ejemplo : 1, 2 , 10...");

let count = 1;

for(let i = 1 ; i <= alto ; i++) {
	for(let j = 1 ; j <= ancho ; j++) {
		if((i+j)%2!=0){
			document.write("<div class='caja1'>" + count + "</div>");
		}else{
			document.write("<div class='caja2'>" + count + "</div>");
		}
		
		count++;
	}
	document.write("<br><br><br>");
}