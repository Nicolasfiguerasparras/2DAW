$(document).ready(Inicio);

function esUnaProvincia(value) {

	if(value != "") {

		return true;
	
	} else {
	
		return false;
	
	}
}

function Inicio() {

	$("form").validate({

		errorClass:"rojo",
		success:"verde",
		
		rules:{
			nombre:{
				required:true,
				minlength:4,
                maxlength:20
			},
			calle:{
				required:true,
				minlength:20,
                maxlength:40
			},
			numero:{
				digits:true,
				min:1
			},
			cp:{
				digits:true,
				minlength:5,
				maxlength:5,
			},
			tel:{
				digits:true,
				minlength:9,
				maxlength:9
			},
			provincia:{
				required: true
			},
			curriculum:{
				accept:"image/*,application/pdf"
			}
		},
		messages:{
			nombre:{
				required:"Es obligatorio el nombre",
				minlength:"Tienes que escribir al menos 4 caracteres",
                maxlength:"Tienes que escribir como máximo 20 caracteres"
			},
			calle:{
				required:"Es obligatorio poner la calle",
				minlength:"Tienes que escribir al menos 20 caracteres",
                maxlength:"Tienes que escribir como máximo 40 caracteres"
			},
			numero:{
				digits:"Tiene que contener números",
				min:"Tienes que escribir al menos 1 número"
			},
			cp:{
				digits:"Tiene que contener números",
				minlength:"Tienes que escribir al menos 5 números",
				maxlength:"Tienes que escribir como máximo 5 números"
			},
			tel:{
				digits:"Tiene que tener números",
				minlength:"Tienes que escribir al menos 9 números",
				maxlength:"Tienes que escribir como máximo 9 números"
			},
			provincia:{
				required: "Tienes que seleccionar una provincia",
			},
			curriculum:{
				accept:"Tienes que insertar una imagen o un pdf"
			}
		}
	})
}