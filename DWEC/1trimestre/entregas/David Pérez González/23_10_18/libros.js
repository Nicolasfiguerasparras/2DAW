let libros = 
{
	"978-0062511409":{
		titulo:"El Alquimista",
		nom_autor:"Paulo",
		ape_autor:"Coelho",
		precio:8.46
	},

	"978-0307744593":{
		titulo:"Aleph",
		nom_autor:"Paulo",
		ape_autor:"Coelho",
		precio:12.23
	},

	"978-034580704":{
		titulo:"El peregrino",
		nom_autor:"Paulo",
		ape_autor:"Coelho",
		precio:12.20
	}
};

document.write("<div class='centro'><table border='1'>" +
					"<caption><i class='fas fa-book'></i> Libros </caption>" +
					"<tr>" +
						"<th style='background-color:black; color:white;''>ISBN</th>" +
						"<th class='text-white font-darkblue'>Título</th>" +
						"<th class='text-white font-darkblue'>Nombre Autor</th>" +
						"<th class='text-white font-darkblue'>Apellido Autor</th>" +
						"<th class='text-white font-darkblue'>Precio</th>" +
					"</tr>");
let contador = 1;

for (obras in libros) {
	document.write("<tr>");
	contador++;

	if (contador%2==0) {
		document.write("<td class='font-blue'>" + obras + "</td>");
		for(obra in libros[obras]){
			
			document.write("<td class='font-blue'>" + libros[obras][obra] + "</td>");
		}

	} else {
		document.write("<td class='font-lightblue'>" + obras + "</td>");
		for(obra in libros[obras]){
			
			document.write("<td class='font-lightblue'>" + libros[obras][obra] + "</td>");
		}
	};

	document.write("</tr>");
};

document.write("</table></div>");