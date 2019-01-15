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
		trimestre1:219699,
		trimestre2:211900,
		trimestre3:154600,
		trimestre4:187650		
	}

};

document.write("<table border = '1'");
document.write("<tr><td>Delegado</td><td>Trimestre1</td><td>Trimestre2</td><td>Trimestre3</td><td>Trimestre4</td></tr>")

for (dato in ventas) {
		document.write("<tr><td>"+dato+"</td>");
		for(persona in ventas[dato]){
			document.write("<td>"+ ventas[dato][persona] + "</td>");
		}
		document.write("</tr>");
}
document.write("</table><br><br>");

let libros={
	"978-0062511409":{ 
		titulo:"El alqimista",
		nombre:"Paulo",
		appelido:"Coelho",
		precio:"846$"
	},
	"978-0307744593":{ 
		titulo:"Aleph",
		nombre:"Paulo",
		appelido:"Coelho",
		precio:"12.23$"
	},
	"978-00656561409":{ 
		titulo:"El perregrino",
		nombre:"Paulo",
		appelido:"Coelho",
		precio:"12.20$"
	}

};
	let contador = 1;
	document.write("<table border='1'>");
	document.write("<tr class='color3'><td class='isbn'>ISBN</td><td>Título</td><td>Nombre Autor</td><td>Apellido Autor</td><td>Precio</td></tr>");

for(dato in libros){
	if(contador%2 == 0){
		document.write("<tr class='color'><td>"+dato+"</td>");
		for(libro in libros[dato]){
			document.write("<td>"+libros[dato][libro]+"</td>");
		}
		document.write("</tr>");
		contador++;
	}else{
		document.write("<tr class='color2'><td>"+dato+"</td>");
		for(libro in libros[dato]){
			document.write("<td>"+libros[dato][libro]+"</td>");
		}
		document.write("</tr>");
		contador++;		
	}			
}