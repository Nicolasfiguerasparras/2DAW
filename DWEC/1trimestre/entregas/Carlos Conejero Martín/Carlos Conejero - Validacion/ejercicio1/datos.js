$(document).ready(Start);

function Start() {

	$("form").validate({

		errorClass:"rojo",
		success:"verde",

		rules:{

			nombre: {

				required:  true,
				minlength: 5,
				maxlength: 20
			},

			calle: {

				required:  true,
				minlength: 20,
				maxlength: 40
			},

			numero: {

				digits: true,
				min: 	1
			},

			cp: {

				digits: true,
				minlength: 5,
				maxlength: 5
			},

			tel: {

				digits: true,
				minlength: 9,
				maxlength: 9
			},

			provincia: {

				required: true
			},

			curriculum: {

				accept: "image/*, pdf",
			}

		},

		messages:{

			nombre: {

				required:  "El nombre es obligatorio",
				minlength: "Nombre demasiado corto",
				maxlength: "Nombre demasiado largo"
			},

			calle: {

				required:  "La calle es obligatorio",
				minlength: "La calle demasiado corto",
				maxlength: "La calle demasiado largo"
			},

			numero: {

				digits:    "Solo puede contener números",
				min: 	   "El numero como mínimo puede ser 1"
			},

			cp: {

				digits:    "Solo puede contener números",
				minlength: "Código postal demasiado corto",
				maxlength: "Código postal demasiado largo"
			},

			tel: {

				digits:    "Solo puede contener números",
				minlength: "Teléfono demasiado corto",
				maxlength: "Teléfono demasiado largo"
			},

			provincia: {

				required: "Tienes que seleccionar una provincia"
				
			},

			curriculum: {

				accept: "El archivo no es una imagen ni un PDF",
			}
		}
	});
}