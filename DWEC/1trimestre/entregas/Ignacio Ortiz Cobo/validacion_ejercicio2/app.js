$(document).ready(Start);

$.validator.addMethod("empiezaMayus",empiezaMayus,"No empieza por mayuscula");

$.validator.addMethod("sinEspacios",sinEspacios,"No puede contener espacios");

$.validator.addMethod("empiezaTlf",empiezaTlf,"Primer numero tlf no valido");

function empiezaMayus(valor, input){
	return this.optional(input) || (valor[0] >= 'A' && valor[0] <= 'Z');
}

function sinEspacios(valor, input){
	return this.optional(input) || (valor.indexOf(" ") == -1);
}

function empiezaTlf(valor, input){
	return this.optional(input) || (valor[0] == 6 || valor[0] == 9);
}

function Start(){
	$("form").validate(
		{
			success: "verde",
			errorClass: "rojo",
			rules:{
				usuario:{
					required: true,
					minlength: 7,
					empiezaMayus: true
				},
				contra:{
					required: true,
					rangelength: [5, 15],
					sinEspacios: true
				},
				repite:{
					required: true,
					equalTo: "#contra"
				},
				calle:{
					required: true,
					maxlength: 40
				},
				puerta:{
					required: true,
					maxlength: 1,
					empiezaMayus: true
				},
				telefono:{
					digits: true,
					empiezaTlf: true
				},
				curso:{
					required: true
				},
				financiacion:{
					number: true
				},
				titulacion:{
					accept: "application/pdf,application/msword"
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
					minlength: "El nombre debe tener minimo 7 caracteres",
					empiezaMayus: "El nombre no puede empezar por mayuscula"
				},
				contra:{
					required: "La contraseña de usuario es obligatorio",
					rangelength: "La contraseña debe entre 5 y 15 caracteres",
					sinEspacios: "La contraseña no puede tener espacios"
				},
				repite:{
					required: "Es necesario repetir la contraseña",
					equalTo: "La contraseña debe de ser igual en los dos campos"
				},
				calle:{
					required: "La calle es obligatoria",
					maxlength: "No se aceptan más de 40 caracteres"
				},
				puerta:{
					required: "La puerta es obligatoria",
					maxlength: "Solo se permite un caracter",
					empiezaMayus: "Solo se acepta letra en mayuscula"
				},
				curso:{
					required: "No se acepta el valor por defecto"
				},
				financiacion:{
					number: "Solo se aceptan numero enteros o decimales"
				},
				titulacion:{
					accept: "Solo se aceptan tipos de documentos PDF y Word"
				},
				condiciones:{
					required: "Las condiciones deben de ser aceptadas"
				},
				reglamento:{
					required: "El reglamento debe ser aceptado"
				}
			}
		}
	);
}