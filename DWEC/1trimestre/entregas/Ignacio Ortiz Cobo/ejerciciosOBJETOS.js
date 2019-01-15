let ventas={
	luis:{
		primero: 150000,
		segundo: 127400,
		tercero: 156800
	},
	ana:{
		primero: 254000,
		segundo: 327450,
		tercero: 12500
	},
	rosa:{
		primero: 278900,
		segundo: 189782,
		tercero: 157900
	},
	manuel:{
		primero: 219700,
		segundo: 211900,
		tercero: 145600
	}
}

let libros={
	9780062511409:{
		titulo: "El Alquimista",
		autor: "Paulo",
		apellido: "Coelho",
		precio: 8.46
	},
	9780307744593:{
		titulo: "Aleph",
		autor: "Paulo",
		apellido: "Coelho",
		precio: 12.23
	},
	978034580704:{
		titulo: "El pelegrino",
		autor: "Paulo",
		apellido: "Coelho",
		precio: 12.20
	}
}

document.write("<table><tr><th>Delegado</th><th>1 Trimestre</th><th>2 Trimestre</th><th>3 Trimestre</th></tr>")
for(let camp in ventas){
	document.write("<tr><td>"+camp+"</td>");
	for(let camp2 in ventas[camp]){
		document.write("<td>"+ventas[camp][camp2]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table><br><br>");


document.write("<table><tr><th id='isbn'>ISBN</th><th>Titulo</th><th>Nombre autor</th><th>Apellido autor</th><th>Precio</th></tr>")
for(let camp in libros){
	document.write("<tr><td>"+camp+"</td>");
	for(let camp2 in libros[camp]){
		document.write("<td>"+libros[camp][camp2]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table><br><br>");