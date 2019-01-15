$(document).ready(inicio);

function inicio(){
	$("input[type=button]").click(inserccion);
}

function inserccion(){

	if($("input[type=text]").val() && $("input[type=text]").val().indexOf(" ") == -1){	
		let contenido = $("input[type=text]").val();
		let option = $("<option></option>");
		option.text(contenido);
		option.val(contenido);

		if($("input[type=button]").index(this) == 1){
			$("select").append(option);
		}else{
			$("select").prepend(option);
		}
	}
	
}