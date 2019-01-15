let ventas = 
	{
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


document.write("<div class='centro'><table class='borde-grueso'>" +
					"<caption><i class='fas fa-shopping-basket'></i> Ventas</caption>" +
					"<tr>" +
						"<th>Delegado</th>" +
						"<th>1 Trimestre</th>" +
						"<th>2 Trimestre</th>" +
						"<th>3 Trimestre</th>" +
						"<th>4 Trimestre</th>" +
					"</tr>");

for (persona in ventas) {
	document.write("<tr>");
	document.write("<td>" + persona + "</td>");

	for(trimestre in ventas[persona]){
		document.write("<td>" + ventas[persona][trimestre] + ",00</td>");
	}

	document.write("</tr>");
};

document.write("</table></div><br><br>");