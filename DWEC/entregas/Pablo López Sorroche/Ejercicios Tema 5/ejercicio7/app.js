$(document).ready(function()
{
	$('input#crear').click(crearTabla);
});

function crearTabla()
{
	$(this).remove();

	let filas, celdas;

	let tabla = $('<table border=1></table>');
	tabla.css({
		margin: '20px'
	});

	for(let i = 0 ; i < 20 ; i++)
	{
		filas = $('<tr></tr>');

		for(let j = 0 ; j < 20 ; j++)
		{
			celdas = $('<td></td>');
			celdas.click(cambiarColorCelda);
			celdas.css({
				padding: '10px',
			});

			filas.append(celdas);
		}
		tabla.append(filas);
	}

	$('div#contenido').append(tabla);
}

function cambiarColorCelda()
{
	let color_input = $('input#datos').val();

	$(this).css('backgroundColor', color_input);
}