$(document).ready(Start);

function EsValido(formulario)
{
	alert("La informacion es correcta");
	formulario.submit();
}

function Start(){
	$("form").validate(
        {
        	 submitHandler:EsValido,
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
                cp:{
                    digits:true,
                    minlength:5,
                    maxlength:5
                },
                numero:{
                	min:1
                },
                tel:{
                    digits:true,
                	minlength:9,
                    maxlength:9
                },
                provincia:{
                	required:true
                },
                curriculum:
                {
                	accept:"image/*,application/pdf"
                }
             },
             messages:{
             	nombre:{
                    required:"El nombre es obligatorio",
                    minlength:"Demasiado corto",
                    maxlength:"Demasiado largo"
                },
                calle:{
                    required:"La calle es obligatoria",
                    minlength:"Demasiado corto",
                    maxlength:"Demasiado largo"
                },
                cp:{
                    digits:"Solo pueden ser numeros",
                    minlength:"Debe tener 5 digitos",
                    maxlength:"Debe tener 5 digitos"
                },
                numero:{
                    min:"Debe ser el numero 1 o superior"
                },
                tel:{
                    digits:"Deben ser solo numeros",
                    minlength:"Debe tener 9 digitos",
                    maxlength:"Debe tener 9 digitos"
                },
                provincia:{
                    required:"Debes escoger una opcion"
                },
                curriculum:
                {
                    accept:"Solo acepta pdf o imagen"
                }
             }	
           
        });
}