$(document).ready(Start);

function Start(){
	$("form").validate(
		{	
			errorClass:"rojo",
        	success:"verde",
			rules:{
				nombre:{
					required: true,
					minlength: 4,
					maxlength: 20
				},
				calle:{
					required: true,
					minlength: 20,
					maxlength: 40
				},
				numero:{
					digits: true,
					min: 1
				},
				cp:{
					digits: true,
					min: 1,
					minlength: 5,
					maxlength: 5
				},
				tel:{
					digits: true,
					min: 600000000,
					minlength: 9,
					maxlength: 9
				},
				provincia:{
					required: true
				},
				curriculum:{
					accept:"application/pdf"
				}
			},

			messages:{
				nombre:{
					required: "El nombre es obligatorio",
					minlength: "Nombre demasiado corto",
					maxlength: "Nombre demasiado largo"
				},
				calle:{
					required: "La calle es obligatorio",
					minlength: "Calle demasiado corta",
					maxlength: "Calle demasiado larga"
				},
				numero:{
					digits: "En numero solo se acepta caracteres numericos",
					min: "Solo se aceptan numeros positivos"
				},
				cp:{
					digits: "El codigo postal solo se aceptan caracteres numericos",
					min: "Solo se aceptan numeros positivos",
					minlength: "Solo se acepta como minimo 5 digitos",
					maxlength: "Solo se acepta como máximo 5 digitos"
				},
				tel:{
					digits: "En telefono solo se acepta caracteres numericos",
					min: "Solo se aceptan numeros siendo el minimo 600-000-000",
					minlength: "Solo se acepta como minimo 9 digitos",
					maxlength: "Solo se acepta como máximo 9 digitos"
				},
				provincia:{
					required: "No se acepta el valor por defecto"
				},
				curriculum:{
					accept: "Solo se aceptan PDF como documentos"
				}
			}
		}
	)
}