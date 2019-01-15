$(document).ready(Start);

$.validator.addMethod("empiezaMayuscula", ComprobarMayuscula, "Debe comenzar por mayúscula");

function ComprobarMayuscula(valor,elemento){
	return this.optional(elemento) || (valor[0]>='A' && valor[0]<='Z');
}

$.validator.addMethod("sinEspacios", ComprobarEspacios, "No puede tener espacios");

function ComprobarEspacios(valor,elemento){
	return this.optional(elemento) || (valor.indexOf(" ") == -1);
}

$.validator.addMethod("empieza96", Empieza_96, "Debe empezar por 9 o 6");

function Empieza_96(valor,elemento){
	return this.optional(elemento) || (valor[0]=='6' || valor[0]=='9');
}

function Start(){
	$("form").validate(
		{
	    	 errorClass:"rojo",
	    	 success:"verde",
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
	         		empiezaMayuscula:true,
	         		sinEspacios:true,
	         	},
	         	repite:{
	         		equired:true,
	         		equalTo:"#contra"
	         	},
	         	calle:{
	         		required:true,
	         		maxlength:40
	         	},
	         	puerta:{
	         		required:true,
	         		empiezaMayuscula:true,
	         		maxlength:1
	         	},
	         	telefono:{
	         		required:true,
	         		maxlength:9,
	         		minlength:9,
	         		digits:true,
	         		empieza96:true
	         	},
	         	curso:{
	         		required:true
	         	},
	         	financiacion:{
	         		min:0,
	         		max:100,
	         		number:true
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
	         		empiezaMayuscula:"Debe comenzar por mayúscula"
	         	},
	         	contra:{
	         		required:"La contraseña es obligatoria",
	         		minlength:"Debe tener al menos 5 caracteres",
	         		maxlength:"Debe tener como máximo 15 caracteres",
	         		empiezaMayuscula:"Debe comenzar por mayúscula",
	         		sinEspacios:"No puede contener espacios"
	         	},
	         	repite:{
	         		required:"La contraseña es obligatoria",
	         		equalTo:"Las contraseñas no coinciden"
	         	},
	         	calle:{
	         		required:"La calle es obligatoria",
	         		maxlength:"Debe tener como máximo 40 caracteres"
	         	},
	         	puerta:{
	         		required:"La puerta es obligatoria",
	         		maxlength:"Debe tener como máximo 1 carácter",
	         		empiezaMayuscula:"Debe ser mayúscula",
	         	},
	         	telefono:{
	         		required:"El número es obligatorio",
	         		minlength:"Debe tener 9 caracteres",
	         		maxlength:"Debe tener 9 caracteres",
	         		digits:"Debe ser número",
	         		empieza96:"Debe empezar por 9 o 6"
	         	},
	         	curso:{
	         		required:"El curso es obligatorio"
	         	},
	         	financiacion:{
	         		min:"Valor de 0 a 100",
	         		max:"Valor de 0 a 100"
	         	},
	         	titulacion:{
	         		accept:"Tipo de fichero erroneo"
	         	},
	         	condiciones:{
	         		required:"Este campo es obligatorio"
	         	},
	         	reglamento:{
	         		required:"Este campo es obligatorio"
	         	}
	         }
	    });
}