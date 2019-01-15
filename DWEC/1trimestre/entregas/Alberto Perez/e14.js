let dia =7;
let mes = 1;
let año =-2;
let valida=((mes == 12 && dia >= 15 && dia <=31 && año >= 0) || (mes == 1 && dia >= 1 && dia <= 7 && año >= 0));

alert(valida);
