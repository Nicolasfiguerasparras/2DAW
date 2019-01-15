let leerNumeros = prompt("Introduzca 10 números");
let numeros = leerNumeros.split(",");
let positivos=0;
let negativos=0;

for (let i = 0; i < numeros.length; i++) {
		numeros[i]=parseInt(numeros[i]);
		if (numeros[i]>=0){
			positivos+=numeros[i];
		}else{
			negativos+=(-numeros[i]);
		}
}

if (positivos>negativos) {
	total=positivos-negativos;
}else{
	total=negativos-positivos
}

document.write("<table border>"+
					"<tr><td>Array inicial</td>"+"<td>"+numeros+"</td></tr>"+
					"<tr><td>Positivos</td><td>"+positivos+"</td></tr>"+
					"<tr><td>Negativos</td><td>"+negativos+"</td></tr>"+
					"<tr><td>Total</td><td>"+total+"</td></tr>"+
				"</table>");

