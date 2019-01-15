let leer = prompt("Introduce los campos separados por coma");
let datos = leer.split(",");

document.write("<form>")
for (i = 0; i < datos.length; i++) {
	document.write("<label for='"+datos[i]+"'>"+datos[i]+
					"<br></label><input id='"+datos[i]+"' type='text' /><br>");
};
document.write("<br><input type='submit' />");
document.write("</form");