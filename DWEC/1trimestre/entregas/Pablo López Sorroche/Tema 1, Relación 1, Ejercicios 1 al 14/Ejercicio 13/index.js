let dia, mes, anio, comprobacion;

dia = parseInt(prompt("Introduce un día"));
mes = parseInt(prompt("Introduce un mes"));
anio = parseInt(prompt("Introduce un año"));

if(dia > 0 && dia < 32 && mes > 0 && mes < 13 && anio > 0) {
	comprobacion = true;
} else {
	comprobacion = false;
}

alert(comprobacion);