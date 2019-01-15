let direcciones = ["http://www.google.es","http://www.elpais.com","http://www.facebook.com"];
let nombres = ["Ir a Google","Ir a El Pais","Ir a Facebook"];

for(let i = 0; i < 3; i++){
	document.write("<p><a href='"+direcciones[i]+"'>"+nombres[i]+"</a></p>");
}
