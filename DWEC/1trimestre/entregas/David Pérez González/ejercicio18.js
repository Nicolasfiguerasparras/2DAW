let direcciones = ["http://www.google.es", "http://www.elpais.com", "http://www.facebook.com"];
let nombres = ["Ir a google", "Ir a el pais.com", "Ir a facebook"];

for (let i = 0; i < nombres.length; i++) {
	document.write("<a href='" + direcciones[i] + "' target='_blank'>" + nombres[i] + "</a><br>");
};