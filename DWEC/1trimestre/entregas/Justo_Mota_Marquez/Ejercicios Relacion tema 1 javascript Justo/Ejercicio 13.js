let dia = parseInt(prompt("Introduzca un dia"));
let mes = parseInt(prompt("Introduzca un mes"));
let anio = parseInt(prompt("Introduzca un anio"));

if ( dia > 0 && dia < 31 && mes > 0 && mes < 13 && anio > 0) {
	alert("Fecha valida");
}else{
	alert("Fecha invalida");
}
