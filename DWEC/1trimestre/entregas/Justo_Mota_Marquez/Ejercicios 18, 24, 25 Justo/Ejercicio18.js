let direcciones = [];
let nombre = [];

direcciones = ["http://www.google.es", "http://www.elpais.com", "http://www.facebook.com"];
nombre = ["Ir a google", "Ir al pais.com", "Ir a facebook"];

for (let i = 0; i < direcciones.length; i++) {
	document.write("<a href='"+direcciones[i]+"'>"+nombre[i]+"</a><br>");
};