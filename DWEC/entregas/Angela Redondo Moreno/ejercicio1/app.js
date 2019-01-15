$(document).ready(Start);

function Start(){
	$("input[type=button]").click(insertarDatos);
}

function insertarDatos()
{
	if($("input[type=text]").val() && $("input[type=text]").val().indexOf(" ") == -1){	
		let dato = $("input[type=text]").val();
		let opcion = $("<option></option>");

		opcion.text(dato);
		opcion.val(dato);

		if($("input[type=button]").index(this) == 1){
			$("select").append(opcion);
		}
		else
		{
			$("select").prepend(opcion);
		}
	}
	
}