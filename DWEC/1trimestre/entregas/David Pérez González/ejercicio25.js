let datos = prompt("Dime el nombre de los campos que quieres (separa con ;) : ");
let separador = datos.split(";");

document.write("<form>");

for (let i = 0; i < separador.length; i++) {
	document.write("<div>");
    document.write("<label for='" + separador[i] + "'>" + separador[i] +":</label><br>");
    document.write("<input type='text' id='" + separador[i] + "' />");
	document.write("</div><br>");

};


document.write("<div class='button'><button type='submit'>Enviar</button></div></form>");
