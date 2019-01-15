let ventas={
		Luis:{
			trimestre1: 150.000,
			trimestre2: 127.400,
			trimestre3: 156.800,
			trimestre4: 121.900
		},
		Ana:{
			trimestre1: 254.000,
			trimestre2: 327.450,
			trimestre3: 12.500,
			trimestre4: 187.900
		},
		Rosa:{
			trimestre1: 278.900,
			trimestre2: 189.782,
			trimestre3: 157.900,
			trimestre4: 251.400
		},
		Manuel:{
			trimestre1: 219.700,
			trimestre2: 211.900,
			trimestre3: 145.600,
			trimestre4: 187.650
		}	
};

document.write("<table border=1 style='border-collapse:collapse'");
document.write("<tr>");
document.write("<th style='background-color:red'>Delegado</th>");
document.write("<th style='background-color:red'>1 Trimestre</th>");
document.write("<th style='background-color:red'>2 Trimestre</th>");
document.write("<th style='background-color:red'>3 Trimestre</th>");
document.write("<th style='background-color:red'>4 Trimestre</th>");
document.write("</tr>");

for (let personas in ventas) {
	document.write("<tr>");
	document.write("<td style='background-color:orange'>"+personas+"</td>");
	for(let datos in ventas[personas]){
		document.write("<td style='background-color:tomato'>"+ventas[personas][datos]+"</td>");
	}
	document.write("</tr>");
}
document.write("</table>");




