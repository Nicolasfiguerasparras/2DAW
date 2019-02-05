$(document).ready(function()
{
	$("input[type=button]").eq(0).click(insertarPrincipio);
	$("input[type=button]").eq(1).click(insertarFinal);
	$("input[type=button]").eq(2).click(borrarPrincipio);
	$("input[type=button]").eq(3).click(borrarFinal);
	$("input[type=button]").eq(4).click(insertarPosicion);
	$("input[type=button]").eq(5).click(borrarPosicion);
});

function insertarPrincipio()
{
	let dato = $("#datos").val().trim();

	if(dato == '')
	{
		alert("Campo datos requerido");
	}
	else
	{
		let lista = $("ul.list-group");
		let nuevo_elemento = $("<li></li>");

		nuevo_elemento.addClass("list-group-item list-group-item-action");
		nuevo_elemento.text(dato);

		lista.prepend(nuevo_elemento);
	}
}

function insertarFinal()
{
	let dato = $("#datos").val().trim();

	if(dato == '')
	{
		alert("Campo datos requerido");
	}
	else
	{
		let lista = $("ul.list-group");
		let nuevo_elemento = $("<li></li>");

		nuevo_elemento.addClass("list-group-item list-group-item-action");
		nuevo_elemento.text(dato);

		lista.append(nuevo_elemento);
	}
}

function borrarPrincipio()
{
	$("ul.list-group li").first().remove();
}

function borrarFinal()
{
	$("ul.list-group li").last().remove();
}

function insertarPosicion()
{
	let dato = $("#datos").val().trim();

	if(dato == '')
	{
		alert("Campo datos requerido");
	}
	else
	{
		let posicion = $("#posicion").val();
		let lista = $("ul.list-group li");

		if(posicion > lista.length || posicion <= 0)
		{
			alert("La posición es incorrecta");
		}
		else
		{
			let nuevo_elemento = $("<li></li>");

			nuevo_elemento.addClass("list-group-item list-group-item-action");
			nuevo_elemento.text(dato);

			posicion--;
			lista.eq(posicion).before(nuevo_elemento);
		}
	}
}

function borrarPosicion()
{
	let posicion = $("#posicion").val();
	let lista = $("ul.list-group li");

	if(posicion > lista.length || posicion <= 0)
	{
		alert("No existe la posición " + posicion);
	}
	else
	{
		posicion--;
		lista.eq(posicion).remove();
	}
}





