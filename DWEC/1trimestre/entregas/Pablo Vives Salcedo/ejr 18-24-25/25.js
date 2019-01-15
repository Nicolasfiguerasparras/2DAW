let campo1 = prompt("Introduce los campos del formulario","la separacion entre campos es con |");
let campo2 = campo1.split("|");

document.write("<form name='formulario'>");

for(let i = 0 ; i < campo2.length ; i++) {
	document.write("<label for='" + campo2[i] + "'>" + campo2[i] + "</label><br>");
	document.write("<input id='" + campo2[i] + "' type='text' name='" + campo2[i] + "'><br>");
}

document.write("<input type='submit' name='enviar'>");
document.write("</form>");