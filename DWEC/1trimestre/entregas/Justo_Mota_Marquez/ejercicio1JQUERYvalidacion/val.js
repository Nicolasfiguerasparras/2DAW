$(document).ready(Inicio);

function Inicio(){

	$("form").validate(

	{
		errorClass: "rojo",
		success: "verde",
		rules:{
			nombre:{
				required: true,
				minlength: 4,
				maxlength: 20,
			},
			calle:{
				minlength: 20,
				maxlength: 40,
			},
			numero:{	
				min: 1
			},
			cp:{
				digits: true,
				minlength: 5,
				maxlength: 5
			},
			tel:{
				digits: true,
				minlength: 9,
				maxlength: 9
			},
			provincia:{
				required: true
			},
			curriculum:{
				accept: "image/*, application/pdf"
			}
		},
		messages:{
			nombre:{
				required: "El nombre es obligatorio",
				minlength: "El nombre es demasiado corto",
				maxlength: "El nombre es demasiado largo",
			},
			calle:{
				minlength: "El nombre es demasiado corto",
				maxlength: "El nombre es demasiado largo",
			},
			numero:{	
				min: "Debe contener al menos un numero"
			},
			cp:{
				digits: "Solo números",
				minlength: "Demasiado corto",
				maxlength: "Demasiado largo"
			},
			tel:{
				digits: "solo números",
				minlength: "Demasiado corto",
				maxlength: "Demasiado largo"
			},
			provincia:{
				required: "Debe seleccionar una provincia"
			},
			curriculum:{
				accept: "Formato incorrecto"
			}
		}
	});

}