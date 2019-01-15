let informacion = prompt("Introduce los campos del formulario");
let informacion_array = informacion.split(" ");

document.write("<form name='formulario'>");

for(let i = 0 ; i < informacion_array.length ; i++) {
	document.write("<label for='" + informacion_array[i] + "'>" + informacion_array[i] + "</label><br>");
	document.write("<input id='" + informacion_array[i] + "' type='text' name='" + informacion_array[i] + "'><br>");
}

document.write("<input type='submit' name='enviar'>");
document.write("</form>");