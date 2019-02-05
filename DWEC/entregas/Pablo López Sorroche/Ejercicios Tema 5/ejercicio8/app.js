$(document).ready(function()
{
	$('input#crear').click(crearTabla);
});

function crearTabla()
{
	let r, g, b;
	let tabla = $('<table border=1></table>');
	tabla.css('margin', '30px');
	let fila, celda, numero_aleatorio;

	$(this).remove();

	for(let i = 0 ; i < 20 ; i++)
	{
		fila = $('<tr></tr>');

		for(let j = 0 ; j < 20 ; j++)
		{
			r = Math.floor(Math.random() * 255);
			g = Math.floor(Math.random() * 255);
			b = Math.floor(Math.random() * 255);

			celda = $('<td></td>');
			celda.css('padding', '10px');
			celda.css('backgroundColor', "rgb(" + r + ", " + g + ", " + b + ")");

			fila.append(celda);
		}

		tabla.append(fila);
	}

	$('div#contenido').append(tabla);
}









