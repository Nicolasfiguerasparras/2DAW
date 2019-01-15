/*
//Ej18
let direcciones = ["http://www.google.es","http://www.elpais.com","http://facebook.com"];
let nombres = ["Ir a google","Ir a el pais.com","Ir a facebook"];

for (let i = 0; i < direcciones.length; i++) {
	document.write("<a href='"+ direcciones[i]+"'>"+nombres[i]+"</a><br>");
}
*/


/*
//Ej24
let filas = prompt("Introduzca el numero de filas");
let col = prompt("Introduzca el numero de columnas");
let cont = 1;

for (let i = 1; i <= filas; i++) {
	for (let j = 1; j <= col; j++) {
		document.write("<div class ='caja'>"+cont+"</div>");
		cont++;
		if (j % col == 0) {
			document.write("<br><br><br>");
		}
	}
}

*/
/*
//Ej25
let info = prompt("Introduzca su NOMBRE, APELLIDOS y DNI, separados por espacios");
let dato = info.split(" ");

document.write("<form name='formulario'");

for (let i = 0; i < dato.length; i++){
	document.write("<label for='"+dato[i]+"'>"+dato[i]+"<br><input id ='"+dato+"' type ='text'/><br>");
}
document.write("<br><input name'enviar' type='submit'/>");
document.write("</form>");
*/



//Practica
let titulo = prompt("Introduzca un titulo para su curriculum");
document.write("<h1><center>"+titulo+"</center></h1>");
let imagen = prompt("Introduzca la URL de su imagen");
document.write("<div class = 'caja'><img src='" +imagen+"'</div>");




document.write("<form name='formulario'");
document.write("<br><input name'enviar' type='submit'/>");
document.write("</form>");
