/*
//EJERCICIO 18

let url=["http://www.google.es","http://www.elpais.com","http://facebook.com"];
let nom=["Ir a google","Ir a el pais.com","Ir a facebook"];

for (let i=0; i<url.length; i++) {
	document.write("<a href='"+ url[i]+"'>"+nom[i]+"</a><br>");
}

//EJERCICIO 24

let filas=prompt("Dime filas:");
let colu=prompt("Dime columnas:");
let contador=1;

for(let i=1; i<=filas; i++){
	for (let j=1; j<=colu; j++){
		
		document.write("<div class ='clase'>"+contador+"</div>");
		contador++;
		
		if (j%colu==0){
			document.write("<br><br><br>");
		}
	}
}

EJERCICIO 25

let titulo = prompt("Escriba los nombres separados por espacios, por favor");
let nombres = titulo.split(" ");

document.write("<form name='formu'");

for(let i=0;i<nombres.length; i++){
	document.write("<label for='"+nombres[i]+"'>"+nombres[i]+"<br><input id='"+nombres+"' type='text'/><br>");
}

document.write("<br><input name'enviar' type='submit'/>");
document.write("</form>");
*/
