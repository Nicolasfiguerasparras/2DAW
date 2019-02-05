$(document).ready(function()
{
	$('#crear').click(crearTabla);
});

function crearTabla()
{
	let filas = $('#filas').val();
	let columnas = $('#cols').val();

	let fila, celda, numero_aleatorio, tabla, salto;

	$('table').remove();

	if(filas == "" && columnas == "")
	{
		alert('Faltan datos');
	}
	else
	{
		tabla = $("<table border=1></table>");

		for(let i = 0 ; i < filas ; i++)
		{
			fila = $("<tr></tr>");

			for(let j = 0 ; j < columnas ; j++)
			{
				celda = $("<td></td>");
				celda.css('padding', 20);
				celda.css('margin', 10);
				celda.click(sumar);
				celda.mouseenter(restar);
				celda.contextmenu(reiniciar);

				numero_aleatorio = Math.floor(Math.random() * 300);

				celda.text(numero_aleatorio);

				fila.append(celda);
			}

			tabla.append(fila);
			tabla.css('margin', 20);
		}

		$('#contenido').append(tabla);
	}
}

function reiniciar(event)
{
	event.preventDefault(function()
	{

	});

	$(this).text(0);
}

function restar()
{
	let valor = parseInt($(this).text());

	if(valor - 2 > -1)
	{
		valor -= 2;
	}
	else
	{
		alert('El número mínimo es 0');
	}

	$(this).text(valor);
}

function sumar()
{
	let valor = parseInt($(this).text());

	if(valor + 5 < 301)
	{
		valor += 5;
	}
	else
	{
		alert('El número máximo es 300');
	}

	$(this).text(valor);
}