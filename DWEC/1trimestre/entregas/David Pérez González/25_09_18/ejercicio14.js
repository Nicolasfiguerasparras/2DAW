let dia = parseInt(prompt("Introduce un dia:"));
let mes = parseInt(prompt("Introduce un mes:"));
let anyo = parseInt(prompt("Introduce un año:"));

let fecha = (dia>=1 && dia<=31 && mes==1 || mes==12 && anyo>=0);

alert(fecha);