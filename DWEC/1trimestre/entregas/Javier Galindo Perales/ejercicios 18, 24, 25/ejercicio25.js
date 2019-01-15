let datos = prompt("Escribe los datos que deseas para el formulario(,):");
let dato = datos.split(",");

for(let i=0;i<dato.length;i++){
	document.write("<label>"+dato[i]+"</label>");
	document.write("<br>");
	document.write("<input type='text'/>");
	document.write("<br>");
	document.write("<br>");
};
document.write("<input type='submit' name='Enviar'/>");
