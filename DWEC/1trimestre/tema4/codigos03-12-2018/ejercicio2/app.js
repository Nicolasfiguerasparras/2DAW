$(document).ready(Start);

$.validator.addMethod("empiezaMayuscula", ComprobarMayuscula,"Debe empezar por letra mayuscula");

function ComprobarMayuscula(valor,elemento)
{
	//return this.optional(elemento) || (valor[0].upperCase()==valor[0] && isNaN(valor[0]));
	return this.optional(elemento) || (valor[0]>='A' && valor[0]<='Z');
}

$.validator.addMethod("sinEspacios", ComprobarEspacios,"No puede tener espacios");

function ComprobarEspacios(valor,elemento)
{
	return this.optional(elemento) || (valor.indexOf(" ")==-1);
}




function Start(){
	$("form").validate({
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
        			sinEspacios:true
        		}
        },
        messages:{
        		usuario:{
	        		required:"El nombre de usuario es obligatorio",
	        		minlength:"Debe tener al menos 7 caracteres",
	        		empiezaMayuscula:"Debe empezar por letra mayuscula"
        		},
        		contra:{
	        		required:"La contraseña de usuario es obligatoria",
	        		minlength:"Debe tener al menos 5 caracteres",
	        		maxlength:"Debe tener como maximo 15 caracteres",
	        		sinEspacios:"No puede tener espacios la contraseña"
        		}
        }
    });
}