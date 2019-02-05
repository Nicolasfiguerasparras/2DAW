$(document).ready(function()
{
	$('input#crear').click(crearTabla);
});

function crearTabla()
{
	let contenido = $("div#contenido");
	let tabla = $("<table></table>");
	tabla.css('margin', 10);
	tabla.attr('border', 1);
	let fila, celda;

	for(let i = 0 ; i < 20 ; i++)
	{
		fila = $("<tr></tr>");

		for(let j = 0 ; j < 20 ; j++)
		{
			celda = $("<td></td>");
			celda.css({
				padding: '10px',
				backgroundColor: 'white'
			});
			celda.click(cambiarColor);

			fila.append(celda);
		}

		tabla.append(fila);
	}

	$(this).remove();
	contenido.append(tabla);
}

function cambiarColor()
{
	let color = $(this).css('backgroundColor');

	if(color == 'rgb(255, 255, 255)')
	{
		$(this).css('backgroundColor', 'red');
	}
	else if(color == 'rgb(255, 0, 0)')
	{
		$(this).css('backgroundColor', 'yellow');
	}
	else
	{
		$(this).css('backgroundColor', 'white');
	}
}