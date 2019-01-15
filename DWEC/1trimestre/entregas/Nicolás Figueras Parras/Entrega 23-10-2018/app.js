let ventas={
	Luis:{
		trimestre1:150000,
		trimestre2:127400,
		trimestre3:156800,
		trimestre4:121900,
	},
	Ana:{
		trimestre1:254000,
		trimestre2:327450,
		trimestre3:12500,
		trimestre4:187900,
	},
	Rosa:{
		trimestre1:278900,
		trimestre2:189782,
		trimestre3:157900,
		trimestre4:251400,
	},
	Manuel:{
		trimestre1:219700,
		trimestre2:211900,
		trimestre3:145600,
		trimestre4:187650,
	},
};

let libros={
	"978-0062511409":{
		titulo:"El Alquimista",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:8.46,
	},
	"978-0307744593":{
		titulo:"Aleph",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:12.23,
	},
	"978-034580704":{
		titulo:"El peregrino",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:12.20,
	},
};

document.write("<h1>Ventas</h1>");
document.write("<table>");
document.write("<tr background-color='#0000FF'>");
	document.write("<td><b>Delegado</b></td>");
	document.write("<td><b>1 Trimestre</b></td>");
	document.write("<td><b>2 Trimestre</b></td>");
	document.write("<td><b>3 Trimestre</b></td>");
	document.write("<td><b>4 Trimestre</b></td>");
document.write("</tr>");
for (dato in ventas){
	document.write("<tr>");
	document.write("<td>"+dato+"</td>");
	for (persona in ventas[dato]){

		document.write("<td>"+ventas[dato][persona]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");

document.write("<br><br>");
document.write("<h1 text-align='center'>Libros</h1>");
document.write("<table>");
document.write("<tr>");
	document.write("<td><b>ISBN</b></td>");
	document.write("<td><b>Título</b></td>");
	document.write("<td><b>Nombre Autor</b></td>");
	document.write("<td><b>Apellido Autor</b></td>");
	document.write("<td><b>Precio</b></td>");
document.write("</tr>");
for (dato in libros){
	document.write("<tr>");
	document.write("<td>"+dato+"</td>");
	for (isbn in libros[dato]){

		document.write("<td>"+libros[dato][isbn]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");