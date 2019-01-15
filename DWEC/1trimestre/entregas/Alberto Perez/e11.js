let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un numero"));
let num3 = parseInt(prompt("Ingrese un numero"));
let ok = true;

if(num1 == num2 && num2 == num3 ){
	document.write(ok);
}
else{
	document.write(!ok);
}