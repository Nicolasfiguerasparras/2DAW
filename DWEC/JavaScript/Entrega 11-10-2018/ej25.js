let alerta = prompt("Escriba los nombres separados por espacios, por favor");
let name = alerta.split(" ");

document.write("<form name='formulario'");
for(let i=0;i<name.length; i++){
	document.write("<label for='"+name[i]+"'>"+name[i]+"<br><input id='"+name+"' type='text'/><br>");
}

document.write("<br><input name='enviar' type='submit'/>");
document.write("</form>");