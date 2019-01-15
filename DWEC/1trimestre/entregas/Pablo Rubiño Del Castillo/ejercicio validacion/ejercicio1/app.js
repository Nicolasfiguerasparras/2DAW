$(document).ready(Start);

function Start()
{
	$("form").validate(
		{
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
					min:1
				},
				cp:{
					digits:true,
					minlength:5,
					maxlength:5
				},
				tel:{
					digits:true,
					minlength:9,
					maxlength:9
				},
				provincia:{
					required:true
				},
				curriculum:{
					accept:"image/*,application/pdf"
				}
			},
			messages:{
				nombre:{
					required:"El nombre es obligatorio",
					minlength:"Nombre demasiado corto",
					maxlength:"Nombre demasiado largo"
				},
				calle:{
					required:"La calle es obligatoria",
					minlength:"Calle demasiado corta",
					maxlength:"Calle demasido larga"
				},
				numero:{
					min:"Introduce un numero"
				},
				cp:{
					digits:"Solo se permiten numeros",
					minlength:"CP demasido corto",
					maxlength:"CP demasiado largo"
				},
				tel:{
					digits:"Solo se permiten numeros",
					minlength:"Telefono demasiado corto",
					maxlength:"Telefono demasiado largo"
				},
				provincia:{
					required:"Selecciona una provincia"
				},
				curriculum:{
					accept:"Formato no permitido"
				}
			}
		}

	)
}