let campo = prompt("Introduzca los nombres de los campos separados por espacios: ");

let campos = campo.split(" ");

document.write("<form name='form'>");

for (let i = 0; i < campos.length; i++) {
	
document.write("<label for='"+i+"'>"+campos[i]+
			    "<br><input type='text' id='"+i+"'><br><br>");
}

document.write("<input type='submit' name='Enviar'>");

document.write("</form>");

