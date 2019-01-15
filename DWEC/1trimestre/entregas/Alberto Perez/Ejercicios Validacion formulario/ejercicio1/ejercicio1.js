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
                	//empiezaletra:true
                },
                calle:{
                	required:true,
                	minlength:20,
                	maxlength:40
                },
                numero:{
                	min:1
                },
                cp :{
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
             		required:"La calle es obligatorio",
             		minlength:"El nombre de la calle es demasiado corto",
             		maxlength:"El nombre de la calle es demasiado largo"
             	},
             	numero:{
                	digits:"Debes introducir solo números",
                	
                },
                cp:{
                	digits:"Solo números",
                	minlength:"CP demasiado corto",
                	maxlength:"CP demasido largo"
                },
                tel:{
                	digits:"Debes introducir números",
                	minlength:"Número demasiado pequeño",
                	maxlength:"Número demasiado grande"

                },
                provincia:{
                	required:"Debes seleccionar alguna provincia"
                },
                curriculum:{
                	accept:"Tipo de fichero erroneo"
                }
             }	
           
        });
}