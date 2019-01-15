$(document).ready(start);

function esValido(){
	alert("Enviado");
	form.submit();
}

function start(){
	$("form").validate({
		submitHandler:esValido,
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
				minlength:5,
				maxlength:5,
				min:0,
				max:99999
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
				accept:"image/*, application/pdf"
			}

		},

		messages:{
			nombre:{
				required:"Campo obligatorio",
				minlength:"Demasiado corto",
				maxlength:"Demasiado largo"
			},
			calle:{
				required:"Campo obligatorio",
				minlength:"Demasiado corto",
				maxlength:"Demasiado largo"
			},
			numero:{
				min:"Número mínimo aceptado: 1"
			},
			cp:{
				minlength:"Longiutd no válida",
				maxlength:"Longiutd no válida",
				min:"No no valido",
				max:"Longiutd no válida"
			},
			tel:{
				digits:"No se pueden escribir decimales, numero negativo o cualquier otro caracter alfabetico",
				minlength:"Longitud no válida",
				maxlength:"Longitud no válida"
			},
			provincia:{
				required:"Campo Obligatorio"
			},
			curriculum:{
				accept:"Archivo no válido"
			}
		}
	})
}