let libros={
		"978-0062511409":{
			Titulo: "El Alqumista",
			Nombre_Autor: "Paulo",
			Apellido_Autor: "Coelho",
			Precio: 8.46
		},
		"978-0307744593":{
			Titulo: "Aleph",
			Nombre_Autor: "Paulo",
			Apellido_Autor: "Coelho",
			Precio: 12.23
		},
		"978-034580704":{
			Titulo: "El peregrino",
			Nombre_Autor: "Paulo",
			Apellido_Autor: "Coelho",
			Precio: 12.20
		},
};


document.write("<table border=1 style='border-collapse:collapse'");
document.write("<tr>");
document.write("<th style='background-color:lime'>Delegado</th>");
document.write("<th style='background-color:lime'>1 Trimestre</th>");
document.write("<th style='background-color:lime'>2 Trimestre</th>");
document.write("<th style='background-color:lime'>3 Trimestre</th>");
document.write("<th style='background-color:lime'>4 Trimestre</th>");
document.write("</tr>");

for (let novelas in libros) {
	document.write("<tr>");
	document.write("<td style='background-color:purple'>"+novelas+"</td>");
	for(let datos in libros[novelas]){
		document.write("<td style='background-color:lightblue'>"+libros[novelas][datos]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
