let numeros = [];
let positivos = 0;
let negativos = 0;

for(let i = 0 ; i < 10 ; i++) {
	numeros[i] = parseInt(prompt("Introduce un número"));

	if(numeros[i] >= 0) {
		positivos = positivos + numeros[i];
	}else{
		negativos = negativos - numeros[i];
	}
}

document.write("<table border>");
document.write("<tr><td> Array Inicial </td><td>" + numeros + "</td></tr>");
document.write("<tr><td> Positivos </td><td>" + positivos + "</td></tr>");
document.write("<tr><td> Negativos </td><td>" + negativos + "</td></tr>");
if(positivos > negativos) {
	document.write("<tr><td> Total </td><td>" + positivos + "-" + negativos + "=" + (positivos - negativos) + "</td></tr>");
}else{
	document.write("<tr><td> Total </td><td>" + negativos + "-" + positivos + "=" + (negativos - positivos) + "</td></tr>");
}
document.write("</table>");