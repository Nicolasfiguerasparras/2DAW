let numeros = [3,4,5,-10,2,5,-9,-8,-12,1];
let negativos = 0;
let positivos = 0;
let resultado = 0;
for(i=0;i<numeros.length;i++){
	if(numeros[i] < 0){
		negativos += numeros[i]*(-1);
	}else{
		positivos += numeros[i];
	}
}
if(negativos > positivos){
	resultado = negativos-positivos;
}else{
	resultado = positivos-negativos;
}
document.write("<table border><tr><td>Array inicial</td><td>");
for(i=0;i<numeros.length;i++){
	document.write(numeros[i]+", ");
}
document.write("</td></td>");
document.write("<tr><td>Positivos</td><td>"+positivos+"</td>");
document.write("<tr><td>Negativos</td><td>"+negativos+"</td>");
document.write("<tr><td>Total</td><td>"+resultado+"</td>");
document.write("</table>");