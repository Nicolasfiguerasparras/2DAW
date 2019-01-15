let datos=prompt("Introduce los nombre de los campos que quieres para el formulario(separados por ;)");

let separador = ";";
let campos = datos.split(separador);

document.write("<form name=formu>");

for(let i=0; i<campos.length; i++) {
	document.write("<label>"+campos[i]+"<br><input type=text></input></label><br><br>");
}
document.write("<label><br><input type=submit value=Enviar></input></label><br>");
document.write("</form>");