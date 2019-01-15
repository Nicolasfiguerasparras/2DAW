let ventas={
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
}
document.write("<table border=1><tr bgcolor='lightblue'><td>Delegado</td><td>trimestre1</td><td>trimestre2</td><td>trimestre3</td><td>trimestre4</td></tr>");
for (datos in ventas) {
	document.write("<tr><td>"+datos+"</td>");
	for(trim in ventas[datos]){
		document.write("<td>"+ventas[datos][trim]+"</td>");
	}
};

let libros={
	"978-0062511409":{
		titulo:"El Alquimista",
		Nombre:"Paulo",
		apellido:"Coelho",
		precio:"$8.46"
	},
	"978-0307744593":{
		titulo:"Aleph",
		Nombre:"Paulo",
		apellido:"Coelho",
		precio:"$12.23"
	},
	"978-034580704":{
		titulo:"El peregrino",
		Nombre:"Paulo",
		apellido:"Coelho",
		precio:"$12.20"
	}
};
document.write("<table border=1><tr bgcolor='lightblue'><td>ISBN</td><td>Ttulo</td><td>Nombre autor</td><td>Apellido autpr</td><td>precio</td></tr>");
for (datos in libros) {
	document.write("<tr><td>"+datos+"</td>");
	for(trim in libros[datos]){
		document.write("<td>"+libros[datos][trim]+"</td>");
	}
};