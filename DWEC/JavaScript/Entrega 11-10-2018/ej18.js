let direcciones=["http://www.google.es","http://www.elpais.com","http://www.facebook.com"];
let nombres=["Ir a google","Ir a el pais.com","Ir a facebook"];

for (let i=0; i<direcciones.length; i++) {
	document.write("<a href='"+ direcciones[i]+"'>"+nombres[i]+"</a><br>");
}