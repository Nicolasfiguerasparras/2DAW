/*Alberto*/

let numeros = [1,2,3,-1,5,6,-11,8,9,5];
let positivos=0;
let negativos=0;
let sumatorio = 0;

document.write("<table border>");
document.write("<tr><td>Numeros</td><td>"+ numeros + "</td></tr>" );
for (let i = 0; i < numeros.length; i++) {
	if (numeros[i] >= 0) {
		positivos+=numeros[i];
	}else if (numeros[i] < 0) {
		negativos+=(-numeros[i]);
	}
}
if (positivos > negativos) {
	sumatorio = positivos - negativos;
}else if (negativos > positivos) {
	sumatorio = negativos - positivos;
}
document.write("<tr><td>Positivos</td><td>"+ positivos + "</td></tr>" );
document.write("<tr><td>Negativos</td><td>"+ negativos + "</td></tr>" );
document.write("<tr><td>Total</td><td>"+ sumatorio + "</td></tr>" );