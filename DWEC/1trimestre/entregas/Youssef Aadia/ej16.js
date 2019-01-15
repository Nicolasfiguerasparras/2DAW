let positiv = 0;
let negativ = 0;
let numeros = [];
for(let i = 0 ; i < 10 ; i++) {
	numeros[i] = parseFloat(prompt("Introduce sus numeros"));
	if(numeros[i] > 0) {
		positiv = positiv + numeros[i];
	}else{
		negativ = negativ - numeros[i];
	}
}

document.write("<table border>");
document.write("<tr><td bgcolor=green> Array Inicial </td><td bgcolor=pink>" + numeros + "</td></tr>");
document.write("<tr><td bgcolor=green> Positivos </td><td bgcolor=pink>" + positiv + "</td></tr>");
document.write("<tr><td bgcolor=green> Negativos </td><td bgcolor=pink>" + negativ + "</td></tr>");
if(positiv > negativ) {
	document.write("<tr><td bgcolor=green> Total </td><td bgcolor=pink>" + positiv + "-" + negativ + "=" + (positiv - negativ) + "</td></tr>");
}else{
	document.write("<tr><td bgcolor=green> Total </td><td bgcolor=pink>" + negativ + "-" + positiv + "=" + (negativ - positiv) + "</td></tr>");
}
document.write("</table>");