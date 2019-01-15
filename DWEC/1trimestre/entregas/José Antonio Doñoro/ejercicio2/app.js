$(document).ready(Start);

$.validator.addMethod("empiezaMayuscula", ComprobarMayuscula);

function ComprobarMayuscula(valor, elemento)
{
	return this.optional(elemento) || (valor[0]>='A' && valor[0]<='Z');
}

$.validator.addMethod("empiezaNumer", Comprobartlf);

function Comprobartlf(valor, elemento)
{
	return this.optional(elemento) || (valor[0]=='6' || valor[0]=='9');
}

$.validator.addMethod("sinEspacios", ComprobarEspacios, "No puede tener espacios");

function ComprobarEspacios(valor, elemento)
{
	return this.optional(elemento) || (valor.indexOf(" ")==-1);
}
function Start()
{

	$("form").validate(
        {
        	success:"verde",
        	errorClass:"rojo",
             rules:{
                usuario:{
                	required:true,
                	minlength:7,
                	empiezaMayuscula:true
                },
                contra:{
                	required:true,
                	minlength:5,
                	maxlength:15,
                	sinEspacios:true,
                	empiezaMayuscula:true
                },
                repite:{
                	required:true,
                	equalTo:"#contra"
                },
                calle:{
                	required:true,
                	maxlength:15
                },
                puerta:{
                	required:true,
                	maxlength:1,
                	empiezaMayuscula:true
                },
                telefono:{
                	required:true,
                	maxlength:9,
                	minlength:9,
                	empiezaNumer:true
                }, 
                curso:{
                	required:true
                },
                titulacion:{
                	accept:"application/msword,application/pdf",
                },
                reglamento:{
                	required:true
                },
                condiciones:{
                	required:true
                },
                financiacion:{
                	max:100,
                	min:0,
                	number:true
                }

             },
             messages:{
             	usuario:{
                     required:"El usuario es obligatorio",
                     minlength:"usuario demasiado corto",
                     empiezaMayuscula:"Debe comenzar por mayuscula"
             	},
             	contra:{
             		required:"La contraseña es obligatoria",
                	minlength:"Demasiado corta tu contraseña",
                	maxlength: "Demasiado larga tu contraseña",
                	sinEspacios:"no puede tener espacios",
                	empiezaMayuscula:"Debe comenzar por mayuscula"
              	},
              	repite:{
              		required:"Campo obligatorio",
                	equalTo:"Deben ser iguales"
                },
                calle:{
                	required:"El campo es obligatorio",
                	maxlength:"MAximo 40 caracteres"
                },
                puerta:{
                	required:"Este campo es obligatorio",
                	maxlength:"solo puedes poner una letra mayuscula",
                	empiezaMayuscula:"solo puedes poner una letra mayuscula"
                },
                telefono:{
                	required:"tuer",
                	maxlength:"Debe tener 9 numeros",
                	minlength:"Debe tener 9 numeros",
                	empiezaNumer:"Dene empezar por 6 o 9"
                },
                curso:{
                	required:"Debes seleccionar un campo"
                },
                titulacion:{
                	accept:"No es un formato correcto",
                },
                reglamento:{
                	required:"debes marcar esta casilla"
                },
                condiciones:{
                	required:"debes marcar esta casilla"
                },
                financiacion:{
                	max:"Debe ser un numero entre 1 y 100",
                	min:"Debe ser un numero entre 1 y 100",
                	number:true
                }
   
             }	
           
        });
}