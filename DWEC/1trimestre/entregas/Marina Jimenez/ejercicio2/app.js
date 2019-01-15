$(document).ready(Start);

$.validator.addMethod("empiezaMayuscula",ComprobarMayuscula,"Debe empezar por letra mayúscula");
$.validator.addMethod("sinEspacios",ComprobarEspacios,"La contraseña no puede tener espacios");
$.validator.addMethod("letra",CompruebaLetra,"Debe ser una sola letra mayuscula");
$.validator.addMethod("telefono",CompruebaTelefono,"Deben ser 9 digitos y empezar por 6 o 9");

function ComprobarMayuscula(valor, elemento){
	//return this.optional(elemento) || (valor[0].upperCase()==valor[0] && isNaN(valor[0]));
	return this.optional(elemento) || (valor[0]>='A' && valor[0]<='Z');
}
function ComprobarEspacios(valor, elemento){
	return this.optional(elemento) || (valor.indexOf(" ")==-1);
}
function CompruebaLetra(valor, elemento){
	return this.optional(elemento) || (valor>='A' && valor<='Z');
}
function CompruebaTelefono(valor, elemento){
	return this.optional(elemento) || (valor[0]==6 || valor[0]==9);
}

function Start(){
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
			},
			repite:{
				required:true,
				equalTo:contra
			},
			calle:{
				required:true,
				maxlength:40
			},
			puerta:{
				required:true,
				letra:true,
				maxlength:1
			},
			telefono:{
				required:true,
				minlength:9,
				maxlength:9,
				digits:true,
				telefono:true
			},
			curso:{
				required:true
			},
			financiacion:{
				number:true,
				range:[0,100]
			},
			titulacion:{
				accept:"application/msword,application/pdf"
			},
			condiciones:{
				required:true
			},
			reglamento:{
				required:true
			}
		},
		messages:{
			usuario:{
				required:"El nombre de usuario es obligatorio",
				minlength:"Debe tener al menos 7 caracteres",
				empiezaMayuscula:"Debe empezar por letra mayúscula"
			},
			contra:{
				required:"La contraseña es obligatoria",
				minlength:"Debe tener al menos 5 caracteres",
				maxlength:"Debe tener como maximo 15 caracteres",
				sinEspacios:"No puede contener espacios"
			},
			repite:{
				required:"Debes repetir la contraseña",
				equalTo:"Las contraseñas tienen que ser iguales"
			},
			calle:{
				required:"El nombre de la calle es obligatorio",
				maxlength:"No puede tener más de 40 caracteres"
			},
			puerta:{
				required:"Este campo es obligatorio",
				letra: "Debe ser una sola letra mayúscula",
				maxlength:"No puede ser más de una letra"
			},
			telefono:{
				required:"El telefono es obligatorio",
				minlength:"Debe tener 9 digitos",
				maxlength:"Debe tener 9 digitos",
				digits:"Deben ser numeros",
				telefono:"Debe empezar por 6 o 9"
			},
			curso:{
				required:"Debes escoger una opcion"
			},
			financiacion:{
				number:"Debe ser un numero",
				range:"Debe ser un numero entre 0 y 100"
			},
			titulacion:{
				accept:"El archivo debe ser word o pdf"
			},
			condiciones:{
				required:"Debe aceptar los pagos"
			},
			reglamento:{
				required:"Debe aceptar el reglamento del curso"
			}
		}
	});
}