$(document).ready(function()
{
	$("input[type=button").eq(0).click(insertarPrincipio);
	$("input[type=button").eq(1).click(insertarFinal);
});

function insertarPrincipio()
{
	let dato = $("input#datos").val().trim();
	let comprobante = dato.indexOf(" ");

	if(dato == '')
	{
		alert("Campo requerido");
	}
	else
	{
		if(comprobante >= 0)
		{
			alert("Campo incorrecto");

			$("input#datos").val('');
		}
		else
		{
			let nuevo_dato = $("input#datos").val();
			let nueva_opcion = $("<option></option>");

			nueva_opcion.text(nuevo_dato);

			$("select#datos").prepend(nueva_opcion);
		}
	}
}

function insertarFinal()
{
	let dato = $("input#datos").val().trim();
	let comprobante = dato.indexOf(" ");

	if(dato == '')
	{
		alert("Campo requerido");
	}
	else
	{
		if(comprobante >= 0)
		{
			alert("Campo incorrecto");

			$("input#datos").val('');
		}
		else
		{
			let nuevo_dato = $("input#datos").val();
			let nueva_opcion = $("<option></option>");

			nueva_opcion.text(nuevo_dato);

			$("select#datos").append(nueva_opcion);
		}
	}
}