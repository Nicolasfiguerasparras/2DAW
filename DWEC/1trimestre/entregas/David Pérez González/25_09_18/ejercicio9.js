let a = parseFloat(prompt("Introduce el primer número:"));
let b = parseFloat(prompt("Introduce el segundo número:"));

let operacion1 = (a+b)*(a-b);
let	operacion2 = (a*a)-(b*b);

document.write("(" + a + "+" + b + ") x (" + a + "-" + b + ")= " + operacion1 + " <br>");
document.write(a + "^" + a + "-" + b + "^" + b + "= " + operacion2);