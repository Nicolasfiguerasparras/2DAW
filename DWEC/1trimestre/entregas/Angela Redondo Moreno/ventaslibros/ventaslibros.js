let ventas = {
	Luis:{
		trimestre1:150000,
		trimestre2:127400,
		trimestre3:156800,
		trimestre4:121900
	},
	Ana:{
		trimestre1:254000,
		trimestre2:327450,
		trimestre3:12500,
		trimestre4:187900
	},
	Rosa:{
		trimestre1:278900,
		trimestre2:189782,
		trimestre3:157900,
		trimestre4:251400
	},
	Manuel:{
		trimestre1:219700,
		trimestre2:211900,
		trimestre3:145600,
		trimestre4:187650
	}
};

let libros = {
	"978-0062511409":{
		titulo:"El Alquimista",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:8.46
	},
	"978-0307744593":{
		titulo:"Aleph",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:12.23
	},
	"978-034580704":{
		titulo:"El peregrino",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:12.20
	}
};


document.write("<h1>VENTAS</h1>");
document.write("<table border=1><tr>");

	document.write("<td><b>Delegado</b></td>");
	document.write("<td><b>1 Trimestre</b></td>");
	document.write("<td><b>2 Trimestre</b></td>");
	document.write("<td><b>3 Trimestre</b></td>");
	document.write("<td><b>4 Trimestre</b></td>");

document.write("</tr>");

for (datos in ventas){
	document.write("<tr><td>"+datos+"</td>");
	for (personas in ventas[datos]){
		document.write("<td>"+ventas[datos][personas]+"</td>");
	}

	document.write("</tr>");
}

document.write("</table>");


document.write("<br><br><h1>Libros</h1>");
document.write("<table border=1><tr>");

	document.write("<td><b>ISBN</b></td>");
	document.write("<td><b>TITULO</b></td>");
	document.write("<td><b>NOMBRE AUTOR</b></td>");
	document.write("<td><b>APELLIDO AUTOR</b></td>");
	document.write("<td><b>PRECIO</b></td></tr>");


for (datos in libros){
	document.write("<tr><td>"+datos+"</td>");

	for (isbn in libros[datos]){
		document.write("<td>"+libros[datos][isbn]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
