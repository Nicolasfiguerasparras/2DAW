let campos = prompt("Introduce los campos del formulario separados por punto y coma").split(";");

document.write("<form>");
for(let i = 0; i <= campos.length-1; i++){
	document.write(campos[i]+"<br><input type=\"text\"><br><br>");
}
document.write("<input type=\"submit\"></form>")