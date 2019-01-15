$(document).ready(Start);

function EsValido(formulario)
{
	alert("Su formulario esta correcto que pase buen dia");
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
	         	numero:{
	         		min:1
	         	},
	         	cp:{
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
	         	curriculum:{
	         		accept:"image/*,application/pdf"
	         	}
	         },
	         messages:{
	         	nombre:{
	         		required:"El nombre es obligatorio",
	                minlength:"Mínimo 4 caracteres",
	                maxlength:"Máximo 20 caracteres"
	         	},
	         	calle:{
	         		required:"La calle es obligatoria",
	                minlength:"Mínimo 20 caracteres",
	                maxlength:"Máximo 40 caracteres"
	         	},
	         	numero:{
	         		min:"El número no puede ser 0 o negativo"
	         	},
	         	cp:{
	         		digits:"Debe ser un número entero",
	         		minlength:"Mínimo 5 caracteres",
	         		maxlength:"Máximo 5 caracteres"
	         	},
	         	tel:{
	         		digits:"Debe ser un número entero",
	         		minlength:"Mínimo 9 caracteres",
	         		maxlength:"Máximo 9 caracteres"
	         	},
	         	provincia:{
	         		required:"La provincia es obligatoria"
	         	},
	         	curriculum:{
	         		accept:"Tipo de fichero erroneo"
	         	}
	         }
		});
}