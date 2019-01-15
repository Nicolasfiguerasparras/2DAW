let num=prompt("introduce los numeros");
let numeros=num.split(",");
let positivos=0;
let negativos=0;
let total=0;

for (let i = 0; i < numeros.length; i++) {
	numeros[i]=parseInt(numeros[i]);
	if (numeros[i]>=0) {
		positivos=positivos+numeros[i];
	}else{
		negativos=negativos+numeros[i];
	}
	
};
total= positivos+negativos

document.write("<table border><tr><td bgcolor='green'>lista de numeros</td> <td bgcolor='blue'>"+numeros+"</td></tr>");
document.write("<tr><td bgcolor='green'>positivos</td> <td bgcolor='blue'>"+Math.abs(positivos)+"</td></tr>");
document.write("<tr><td bgcolor='green'>negativos</td> <td bgcolor='blue'>"+Math.abs(negativos)+"</td></tr>");
document.write("<tr><td bgcolor='green'>total</td> <td bgcolor='blue'>"+total+"</td></tr>");
document.write("</table>");