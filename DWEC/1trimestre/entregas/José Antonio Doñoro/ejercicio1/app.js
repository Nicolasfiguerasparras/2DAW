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
                	minlength:1,
                	digits:true
                	min:1
                },
             
                cp:{
                	required:true,
                	minlength:5,
                	maxlength:5,
                	digits:true
                },
                tel:{
                	maxlength:9,
                	minlength:9,
                	digits:true
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
                     minlength:"Nombre demasiado corto",
                     maxlength:"Nombre demasiado largo"
             	},
             	calle:{
             		required:"La calle es obligatoria",
             		minlength:"Nombre de la calle demasiado corto",
                    maxlength:"Nombre de la calle demasiado largo"
             	},
             	numero:{
                	digits:"Debe ser un numero"
                },

                cp:{
                	minlength:"El codigo postal son 5 numeros",
                	maxlength:"El codigo postal son 5 numeros",
                	digits:"Debe ser un numero"
                },
                tel:{
                	maxlength:"deben ser 9 numeros",
                	minlength:"deben ser 9 numeros",
                	digits:"Debe ser numeros"
                },
                provincia:{
                	required:"debes seleccionar una provincia"
                },
                curriculum:{
                	accept:"Tipo de fichero erroneo"
                }
             }	
           
        });
}