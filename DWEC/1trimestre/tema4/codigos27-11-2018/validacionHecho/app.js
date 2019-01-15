$(document).ready(Start);


$.validator.addMethod("empiezaletra", EmpiezaPorLetra,"No empieza por letra");

function EmpiezaPorLetra(valor,input){
	let empiezaletra = /^[a-zA-Z][a-zA-Z0-9]*$/;
	//let sololetras = /^[a-zA-Z]*$/;
	return this.optional(input) || valor.match(empiezaletra);
}






function EsValido(formulario)
{
	alert("Su formulario esta correcto que pase buen dia");
	formulario.submit();
}



function Start()
{

	$("#registro").validate(
        {
        	 submitHandler:EsValido,
        	 errorClass:"rojo",
        	 success:"verde",
             rules:{
                nombre:{
                	required:true,
                	minlength:5,
                	maxlength:15,
                	empiezaletra:true
                },
                correo:{
                	required:true,
                	email:true
                },
                password:{
                	required:true,
                	minlength:10
                },
                re_password:{
                	equalTo:"#password"
                },
                deacuerdo:{
                	required:true
                },
                curso:{
                	required:true
                },
                fichero:
                {
                	//accept:"image/*"
                	//accept:"image/jpeg,image/png"
                	accept:"image/*,application/pdf"
                }
             },
             messages:{
             	nombre:{
                     required:"El nombre es obligatorio",
                     minlength:"Nombre demasiado corto",
                     maxlength:"Nombre demasiado largo"
             	},
             	correo:{
             		required:"El email es obligatorio",
             		email:"El formato no es correcto"
             	},
             	password:{
             		required:"La contraseña es obligatoria",
                	minlength:"Demasiado corta tu contraseña"
                },
                re_password:{
                	equalTo:"Las contraseña deben coincidir"
                },
                deacuerdo:{
                	required:"Debes aceptar las condiciones de uso"
                },
                curso:{
                	required:"Debes seleccionar algun curso"
                },
                fichero:{
                	accept:"Tipo de fichero erroneo"
                }
             }	
           
        });
}