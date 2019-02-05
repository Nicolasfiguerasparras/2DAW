$(document).ready(function()
{
	let contenido = $('div#contenido');
	let caja_div, fila_div, contenedor_div;
	let numero = 16;

	contenido.text("");

	contenedor_div = $("<div class='container'></div>");

	for(let i = 0 ; i < 15 ; i++)
	{
		fila_div = $("<div class='row'></div>");

		for(let j = 0 ; j < 16 ; j++)
		{
			caja_div = $("<div></div>");
			caja_div.text(numero);
			caja_div.css('border', '1px solid black');
			caja_div.css('margin', 1);
			caja_div.css('width', 50);
			caja_div.css('text-align', 'center');
			numero++;

			fila_div.append(caja_div);
			fila_div.css('display', 'flex');
			fila_div.css('justify-content', 'center');
		}

		contenedor_div.append(fila_div);
	}

	contenido.append(contenedor_div);
});