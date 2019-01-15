$(document).ready(Start);

function Start(){
	$("form").validate({
		errorClass:"rojo",
		success:"verde",
		rules:{
			nombre:
			{
				required:true, 
				minlength:4,
				maxlength:20
			},
			calle:
			{
				required:true,
				minlength:20,
				maxlength:40
			},
			numero:
			{
				number:true,
				min:1

			},
			cp:
			{
				number:true,
				min:9999,
				max:99999,
				minlength:5,
				maxlength:5
			},
			tel:
			{
				min:0,
				max:999999999,
				minlength:9,
				maxlength:9
			},
			provincia:
			{
				required:true
			},
			curriculum:
			{
				accept:"image/*,application/pdf"
			}
		},
		messages:{
			nombre:{
				required:" Es obligatorio",
				minlength:" Demasiado corto",
				maxlength:" Demasiado largo"
			},
			calle:{
				required:" Es oligatorio",
				minlength:" Demasiado corto",
				maxlength:" Demasiado largo"
			},
			numero:{
				number: " Solo numeros",
				min:" No puede ser negativo"

			},
			cp:{
				number: " Solo numeros",
				min:" No valen numeros negativos",
				max:" No más de 5 numeros",
				minlength:" Demasiado corto",
				maxlength:" Demasiado largo"
			},
		tel:{
				min:" No valen numeros negativos",
				minlength:" Demasiado corto",
				maxlength:" Demasiado largo"
			},
		provincia:{
				required:" Es obligatorio"
			},
			curriculum:{
				accept:" Es obligatorio seleccionar un pdf o una imagen"
			}
			}
	});
}