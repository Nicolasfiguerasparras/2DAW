$(document).ready(Start);

function Start(){
	$("input[type=button]").click(datos);
}
function datos()
{
	if($("input[type=text]").val() && $("input[type=text]").val().indexOf(" ") == -1){	
		let contenido = $("input[type=text]").val();
		let opcion = $("<option></option>");

		opcion.text(contenido);
		opcion.val(contenido);

		if($("input[type=button]").index(this) == 1){
			$("select").append(opcion);
		}else{
			$("select").prepend(opcion);
		}
	}
	
}