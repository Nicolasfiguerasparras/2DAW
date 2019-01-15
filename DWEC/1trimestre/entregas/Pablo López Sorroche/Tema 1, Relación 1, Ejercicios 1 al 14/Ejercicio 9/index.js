let numb1, numb2, operacion1, operacion2;

numb1 = parseFloat(prompt("Introduce un número"));
numb2 = parseFloat(prompt("Introduce otro número"));

operacion1 = (numb1 + numb2) * (numb1 - numb2);
operacion2 = (numb1 * numb1) - (numb2 * numb2);

document.write("El resultado de la operación 1 es " + operacion1 + " y el resultado de la operacion 2 es " + operacion2);