let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));

let valores;

if (num1<10 && num2<10 && num3<10) {
	valores = true;
	alert(valores);
} else {
	valores = false;
	alert(valores);
}
