$(document).ready(Start);

function Start() {
	$("form").submit(Validar);
	
}

function Validar(formu) {
	formu.preventDefault();
	$("form").validate({
		submitHandler:EsValido,
		success:"verde",
		errorClass:"rojo",
		rules:{
			nombre:{
				required:true,
				minlength: 4,
				maxlength: 20
			},
			calle:{
				required:true,
				minlength: 20,
				maxlength: 40
			},
			numero:{
				number:true,
				min:1
			},
			cp:{
				number:true,
				minlength:5,
				maxlength:5
			},
			tel:{
				number:true,
				minlength:9,
				maxlength:9
			},
			provincia:{
				required:true,
				number:true,
				min:1
			},
			curriculum:{
				required:false,
				accept:"image/*,application/pdf"
			},
		},
		messages:{
			nombre:{
				required:"Es obligatorio rellenar este campo",
				minlength: "Longitud mínima 4",
				maxlength: "Logitud máxima 20"
			},
			calle:{
				required:"Es obligatorio rellenar este campo",
				minlength: "Longitud mínima 20",
				maxlength: "Longitud máxima 40"
			},
			numero:{
				number:"Debe ser un número",
				min:"El número debe ser al menos 1"
			},
			cp:{
				number:"El valor debe ser numérico",
				minlength:"No puede tener menos de 5 cifras",
				maxlength:"No puede tener más de 5 cifras"
			},
			tel:{
				number:"El valor debe ser numérico",
				minlength:"No puede tener menos de 9 cifras",
				maxlength:"No puede tener más de 9 cifras"
			},
			provincia:{
				required:"Debes seleccionar una provincia",
				number:"Debes seleccionar una provincia",
				min:"Debes que seleccionar una provincia"
			},
			curriculum:{
				accept:"Debes subir una imagen o un PDF"
			},
		}
	});
}
function EsValido(form) {
	alert("Todo está correcto");
	form.submit();
}