let numeros = prompt("Introduce diez numeros seprados por un espacio");
let separador = " ";
let limite    = 10;
let mostrar = numeros.split(separador, limite);

let sumar=0;
let negativos=0;
let total=0;

document.write("<table border>");
document.write("	<tr>");
document.write("		<td>Array Inicial</td>");
document.write("		<td>"+mostrar+"</td>");
document.write("	</tr>");

for(let i=0; i<10; i++) {

	if(mostrar[i]>0) {
		sumar+=parseInt(mostrar[i]);
	}
}

document.write("	<tr>");
document.write("		<td>Positivos</td>");
document.write("		<td>"+sumar+"</td>");
document.write("	</tr>");

for(let i=0; i<10; i++) {

	if(mostrar[i]<0) {
		negativos-=parseInt(mostrar[i]);
	}
}

document.write("	<tr>");
document.write("		<td>Negativos</td>");
document.write("		<td>"+negativos+"</td>");
document.write("	</tr>");

total=sumar-negativos;

document.write("	<tr>");
document.write("		<td>Total</td>");
document.write("		<td>"+sumar+"-"+negativos+"="+total+"</td>");
document.write("	</tr>");
document.write("</table>");
