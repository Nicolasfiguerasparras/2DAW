let direcciones = ["http://www.google.es", "http://www.elpais.com", "http://www.facebook.com"];
let nombres = ["Ir a Google", "Ir a elpais.com", "Ir a Facebook"];

for (let i = 0; i < direcciones.length; i++) {
	
	document.write("<a href='"+direcciones[i]+"'>"+nombres[i]+"</a><br>");
	
}