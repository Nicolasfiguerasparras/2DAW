let dia = 24;
let mes = 12;
let anio = 2015;
let navidad = ((mes == 12 && dia >= 15 && dia <= 31 && anio > 0) || (mes == 1 && dia >=1 && dia<=7) && anio > 0);
alert(navidad);