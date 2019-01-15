$(document).ready(Start);

function Start(){
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
					number:true,
					min:1,
					
				},
				cp:{
					number:true,
					min:9999,
					max:99999,
					minlength:5,
					maxlength:5,
				},
				tel:{
					number:true,
					min:0,
					max:999999999,
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
					required:" El nombre es oligatorio",
					minlength:" Nombre demasiado corto",
					maxlength:" Nombre demasiado largo"
				},
				calle:{
					required:" La direccion es oligatorio",
					minlength:" Direccion demasiado corta",
					maxlength:" Direccion demasiado larga"
				},
				numero:{
					min:" No puede ser negativo",
					number:" Solo acepta numeros"
				},
				cp:{
					min:" No puede tener numeros negativos",
					max:" No puede tener más de 5 cifras",
					minlength:" Cp demasiado corto",
					maxlength:" Cp demasiado largo",
					number:" Solo acepta numeros"
				},
				tel:{
					min:" No puede tener numeros negativos",
					minlength:" Numero demasiado corto",
					maxlength:" Numero demasiado largo",
					number:" Solo acepta numeros"
				},
				provincia:{
					required:" Debes seleccionar una provincia"
				},
				curriculum:{
					accept:" Debes seleccionar una imagen o un pdf"
				}

			}
		});
}