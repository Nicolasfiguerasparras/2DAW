let ventas={

    Luis:{
    	Trimestre1:15000000,
    	Trimestre2:12740000,
    	Trimestre3:15680000,
    	Trimestre4:12190000
    },

    Ana:{
    	Trimestre1:25400000,
    	Trimestre2:32745000,
    	Trimestre3:1250000,
    	Trimestre4:18790000
    },

    Rosa:{
    	Trimestre1:27890000,
    	Trimestre2:18978200,
    	Trimestre3:15790000,
    	Trimestre4:25140000
    },

    Manuel:{
    	Trimestre1:21970000,
    	Trimestre2:21190000,
    	Trimestre3:14560000,
    	Trimestre4:18765000
    }
}

document.write("<table border='1'");
document.write("<tr>");
document.write("	<th>Delegado</th>");
document.write("	<th>1 Trimestre</th>");
document.write("	<th>2 Trimestre</th>");
document.write("	<th>3 Trimestre</th>");
document.write("	<th>4 Trimestre</th>");
document.write("</tr>");

let contador=0;
for(dato in ventas) {

	document.write("<tr>");
	document.write("	<td>"+dato+"</td>");

	for(persona in ventas[dato]) {

		document.write("	<td>"+ventas[dato][persona]+"</td>");
			
	}
	document.write("</tr>");
}
document.write("</table>");