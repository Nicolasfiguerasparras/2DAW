$(document).ready(Start);

function Start(){
	$('form').validate(
		{
			rules:{
				nombre:{
					required: true,
					minlength: 4,
					maxlength: 20
				},
				calle:{
					minlength: 4,
					maxlength: 20
				},
				numero:{
					digits: true,
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
					accept: "img/*, application/pdf"
				}
			},
			messages:{
				nombre:{
					required: "El nombre es obligatorio",
					minlength: "El nombre debe contener al menos 4 caracteres",
					maxlength: "El nombre no puede superar los 20 caracteres"
				},
				calle:{
					minlength: "El nombre debe contener al menos 4 caracteres",
					maxlength: "El nombre no puede superar los 20 caracteres"
				},
				numero:{
					digits: "Solo puede introducir números",
					min: "El numero debe ser mayor que 0"
				},
				cp:{
					digits: "Solo puede introducir números",
					minlength: "Debe contener 5 digitos",
					maxlength: "Debe contener 5 digitos"
				},
				tel:{
					digits: "Solo puede introducir números",
					minlength: "Debe contener 9 digitos",
					maxlength: "Debe contener 5 digitos"
				},
				provincia:{
					required: "Debes seleccionar una opción"
				},
				curriculum:{
					accept: "Solo se permiten pdf o imagenes"
				}
			}
		}
	)
}