let numb1, numb2, numb3, comprobacion;

numb1 = parseFloat(prompt("Introduce un número"));
numb2 = parseFloat(prompt("Introduce otro número"));
numb3 = parseFloat(prompt("Introduce el último número"));

if(numb1 == numb2 && numb1 == numb3) {
	comprobacion = true;
} else {
	comprobacion = false;
}

alert(comprobacion);