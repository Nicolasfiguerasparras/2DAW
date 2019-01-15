let data = prompt("Introduce los datos que desees recibir en el formulario, separalos por ';'");
let field = data.split(";");

document.write("<form name='form'>")
for (let i = 0; i < field.length; i++) {
	document.write(field[i]+":<br>");
	document.write("<input type='text'+ name='"+field[i]+"':<br>");
}
document.write("<br><input name='enviar' type='submit'/>");
document.write("</form>");