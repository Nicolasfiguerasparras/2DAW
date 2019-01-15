/*Ejercicio 18
let direcciones = ["htto://.google.es", "http://www.elpais.com", "http://facebook.com"];
let nombres = ["Ir a google", "Ir a el pais", "Ir a facebook"];

for (let i = 0; i < direcciones.length; i++) {
	document.write("<a href='"+ direcciones[i]+"'>"+nombres[i]+"</a><br>");
}*/

/*ejercicio25
let este = prompt("escriba los datos separados por espacios");
let datos = este.split(" ");

document.write("<form name='formulario'");
for (let i = 0; i < datos.length; i++) {
	document.write("<label for='"+datos[i]+"'>"+datos[i]+"<br><input id ='"+datos+"' type ='text'/><br>");
}
document.write("<br><input name'enviar' type='submit'/>");
document.write("</form>");*/

/*ejercicio 24*/
let filas = prompt("ingrese Filas de la tabla");
let columnas = prompt("Ingrese columnas de la tabla");
let contador = 1;

for (let i = 1; i <= filas; i++) {
	for (let j = 1; j <= columnas; j++) {
		document.write("<div class ='esta'>"+contador+"</div>");
		contador++;
		if (j % columnas == 0) {
			document.write("<br><br><br>");
		}
	}

}


