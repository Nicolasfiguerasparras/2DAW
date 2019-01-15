let enlaces = ["https://www.google.es","https://www.elpais.com","https://www.facebook.com"];
let titulos = ["Ir a google","Ir a El Pais","Ir a Facebook"];

document.write("<ul>");
for (let i = 0; i <= enlaces.length-1; i++) {
	document.write("<li><a href=\""+enlaces[i]+"\">"+titulos[i]+"</a></li>");
}
document.write("</ul>");