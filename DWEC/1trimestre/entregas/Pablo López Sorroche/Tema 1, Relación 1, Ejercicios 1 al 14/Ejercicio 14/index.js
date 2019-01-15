let dia, mes, anio;

dia = parseInt(prompt("Introduce un día"));
mes = parseInt(prompt("Introduce un mes"));
anio = parseInt(prompt("Introduce un anio"));

if(dia > 0 && dia < 32 && mes > 0 && mes < 13 && anio > 0) {
	if(mes == 12) {
		if(dia > 24) {
			alert("ES NAVIDAD");
		} else {
			alert("No es Navidad");
		}
	} else if(mes == 1) {
		if(dia < 8) {
			alert("ES NAVIDAD");
		} else {
			alert("No es Navidad");
		}
	} else {
		alert("No es Navidad");
	}
} else {
	alert("La fecha no es correcta");
}