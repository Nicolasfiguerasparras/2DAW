let direcciones = ["http://www.google.es" , "http://www.elpais.com" , "http://www.facebook.com"];
let nombre = ["Ir a google" , "Ir a el pais.com" , "Ir a Facebook"];

for(let i = 0 ; i < direcciones.length ; i++) {
	document.write("<a href='" + direcciones[i] + "'>" + nombre[i] + "</a><br>");
}