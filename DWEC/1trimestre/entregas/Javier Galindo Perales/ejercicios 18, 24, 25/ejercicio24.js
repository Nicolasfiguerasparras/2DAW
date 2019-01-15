let fila = prompt("Escribe una fila:");
let colum = prompt("Escribe una columna:");

document.write("<div class='caja'>");

for(let i=1;i<=fila;i++){
	document.write("<div class='caja'>");
	for(let j=1;j<=colum;j++){
		if((i+j)%2==0){
			document.write("<div class='caja' bgcolor='black'>X</div>");
		}
		else{
			document.write("<div class='caja' bgcolor='white'>X</div>");
		}
	}
}

document.write("</div>");
document.write("</div>");