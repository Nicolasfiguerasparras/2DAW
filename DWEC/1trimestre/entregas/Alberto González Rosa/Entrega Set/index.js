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
document.write("<table><tr background-color='#0000FF'><td><b>Delegado</b></td><td><b>1 Trimestre</b></td><td><b>2 Trimestre</b></td><td><b>3 Trimestre</b></td><td><b>4 Trimestre</b></td></tr>");
for (dato in ventas){
	document.write("<tr><td>"+dato+"</td>");
	for (persona in ventas[dato]){
		document.write("<td>"+ventas[dato][persona]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
document.write("<br><br>");
document.write("<h1>Libros</h1>");
document.write("<table><tr><td><b>ISBN</b></td><td><b>Título</b></td><td><b>Nombre Autor</b></td><td><b>Apellido Autor</b></td><td><b>Precio</b></td></tr>");
for (dato in libros){
	document.write("<tr><td>"+dato+"</td>");
	for (isbn in libros[dato]){
		document.write("<td>"+libros[dato][isbn]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");