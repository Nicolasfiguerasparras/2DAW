let url = ["http://www.google.es" , "http://www.elpais.com" , "http://www.facebook.com"];
let enlaces = ["Ir a google" , "Ir a el pais.com" , "Ir a Facebook"];

for(var i = 0 ; i < url.length ; i++) {
	document.write("<a href='" + url[i] + "'>" + enlaces[i] + "</a><br>");
}