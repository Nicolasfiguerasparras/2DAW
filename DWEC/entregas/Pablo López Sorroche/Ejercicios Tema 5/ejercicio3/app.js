$(document).ready(function()
{
	$('#crear').click(crear);
});

function crear()
{
	let datos = $('#datos').val();
	let partes;
	let lista_ordenada;
	let elemento;
	let primer_div;
	let lista_select;
	let segundo_div;
	let tabla;
	let celda;
	let ultimo_div;

	if(datos != "")
	{
		partes = datos.split(",");
		lista_ordenada = $("<ol></ol>");
		lista_select = $("<select></select>");
		tabla = $("<table border=2></table>");

		for(let i = 0 ; i < partes.length ; i++)
		{
			elemento = $("<li></li>");
			elemento.text(partes[i]);
			lista_ordenada.append(elemento);

			elemento = $("<option></option>");
			elemento.text(partes[i]);
			lista_select.append(elemento);

			elemento = $("<tr></tr>");

			if(i % 2 == 0)
			{
				celda = $("<td style='background-color:red'></td>");
			}
			else
			{
				celda = $("<td style='background-color:green'></td>");
			}

			celda.text(partes[i]);
			elemento.append(celda);
			tabla.append(elemento);
		}

		primer_div = $('div.card-body').first();
		primer_div.html("");
		primer_div.append(lista_ordenada);

		segundo_div = $('div.card-body').eq(1);
		segundo_div.html("");
		segundo_div.append(lista_select);

		ultimo_div = $('div.card-body').last();
		ultimo_div.html("");
		ultimo_div.append(tabla);
	}
	else
	{
		alert("Debes introducir datos");
	}
}