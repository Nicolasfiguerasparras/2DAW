$(document).ready(Inicio);

function EsValido(formulario){

	alert("Su formulario está correcto");
	formulario.submit();

}

$.validator.addMethod("empiezaMayuscula", ComprobarMayuscula, "Debe empezar por una letra mayuscula");

$.validator.addMethod("sinEspacios", ComprobarEspacios, "No puede tener espacios");

$.validator.addMethod("soloLetra", unaLetra, "Solo puede llevar una letra");

$.validator.addMethod("numeroDef", empiezaNumero, "Solo puede un 6 o un 9");




function ComprobarMayuscula(valor, elemento){

	//return this.optional(elemento) || (valor[0].upperCase() == valor[0] && isNaN(valor[0]));
	return this.optional(elemento) || (valor[0] >= 'A' && valor[0] <= 'Z');

}

function ComprobarEspacios(valor, elemento){

	//return this.optional(elemento) || (valor[0].upperCase() == valor[9] && isNaN(valor[0]));
	return this.optional(elemento) || (valor.indexOf(" ") == -1);

}

function unaLetra(valor, elemento){

	//return this.optional(elemento) || (valor[0].upperCase() == valor[9] && isNaN(valor[0]));
	return this.optional(elemento) || (valor.length > 0 && valor.length < 2);

}

function empiezaNumero(valor, elemento){

	//return this.optional(elemento) || (valor[0].upperCase() == valor[9] && isNaN(valor[0]));
	return this.optional(elemento) || (valor[0] == 9 || valor[0] == 6);

}

function Inicio(){

	$("form").validate(

	{
		submitHandler: EsValido,
		errorClass: "rojo",
		success: "verde",
		rules:{
			usuario:{
				required: true,
				minlength: 7,
				empiezaMayuscula: true
			},
			contra:{
				required: true,
				minlength: 5,
				maxlength: 15,
				empiezaMayuscula: true,
				sinEspacios: true
			},
			repite:{
				equalTo: "#contra"
			},
			calle:{
				required: true,
				maxlength: 40
			},
			puerta:{
				required: true,
				empiezaMayuscula: true,
				soloLetra: true
			},
			telefono:{
				required: true,
				digits: true,
				maxlength: 9,
				minlength: 9,
				numeroDef: true
			},
			curso:{
				required: true
			}, 
			financiacion:{
				number: true, 
				minlength: 0,
				maxlength: 100
			},
			titulacion:{
				accept: "application/pdf, application/msword"	
			},
			condiciones:{
				required: true
			},
			reglamento:{
				required: true
			}
		},
		messages:{
			usuario:{
				required: "El nombre de usuario es obligatorio",
				minlength: "Debe tener al menos 7 caracteres"
			},
			contra:{
				required: "La contraseña es obligatorio",
				minlength: "Contraseña demasiado corta",
				maxlength: "Contraseña demasiado larga"
			},
			repite:{
				equalTo: "La contraseña no coincide"
			},
			calle:{
				required: "La calle es obligatoria",
				maxlength: "Nombre de la calle demasiado larga"
			},
			puerta:{
				required: "La puerta es obligatoria"
			},
			telefono:{
				required: "El telefono es obligatorio",
				digits: "Debe tener 9 digitos",
				maxlength: "Telefono demasiado largo",
				minlength: "Telefono demasiado corto"
			},
			curso:{
				required: "Es obligatorio"
			},
			financiacion:{
				maxlength: "Número demasiado largo"
			},
			titulacion:{
				accept: "Formato incorrecto"	
			},
			condiciones:{
				required: "Es obligatorio"
			},
			reglamento:{
				required: "Es obligatorio"
			}

		}
	});

}