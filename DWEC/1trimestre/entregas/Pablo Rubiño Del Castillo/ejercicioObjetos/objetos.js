let ventas={
	Luis:{
		trimestre1:150000,
		trimestre2:127000,
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

let libros={
	"978-0062511409":{
		titulo:"El alquimista",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:"$8.46"
	},
	"978-0307744593":{
		titulo:"Aleph",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:"$12.23"
	},
	"978-034580704":{
		titulo:"El peregrino",
		nombre_autor:"Paulo",
		apellido_autor:"Coelho",
		precio:"$12.20"
	}
};

//TABLA DE VENTAS
document.write("<table border='1'>");
document.write("<caption>Ventas</caption>");
document.write("<tr><th>Delegado</th><th>Trimestre 1</th><th>Trimestre 2</th>"+
	"<th>Trimestre 3</th><th>Trimestre 4</th>");
for(dato in ventas){
	document.write("<tr><td>"+dato+"</td></td>");
	for(persona in ventas[dato]){
		document.write("<td>"+ventas[dato][persona]+"</td>")
	}
	document.write("</tr>")
}

//TABLA DE LIBROS
document.write("<table border='1' class='libros'>");
document.write("<caption>Libros</caption>");
document.write("<tr><th class='isbn'>ISBN</th><th>Título</th><th>Nombre Autor</th>"+
	"<th>Apellido Autor</th><th>Precio</th>");
let cont=0;
for(dato in libros){
	cont++;
	if (cont%2==0) {
		document.write("<tr class='par'><td class='par'>"+dato+"</td></td>");
	}else{
		document.write("<tr class='impar'><td class='impar'>"+dato+"</td></td>");
	}
	for(libro in libros[dato]){
			document.write("<td>"+libros[dato][libro]+"</td>");
	}
	document.write("</tr>")
}

