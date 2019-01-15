var numeros=new Array();
for (let i = 0; i < 10; i++) {
    let x = prompt("Ingresa un número");
    numeros[i] = x;
}
var negativos=new Array();
for (let i = 0; i < 10 ; i++){
	if(numeros[i]<0){
		let y = numeros[i];
		negativos.push(y);
	}
}
var positivos=new Array();
for (let i = 0; i < 10; i++){
	if(numeros[i]>0){
		let z = numeros[i];
		positivos.push(z);
	}
}
let suma_pos=0;
for(let i=0;i<positivos.length;i++){
	suma_pos+=parseInt(positivos[i]);
}
let suma_neg=0;
for(let i=0;i<negativos.length;i++){
	suma_neg+=parseInt(negativos[i]);
}
var total=suma_pos+suma_neg;
document.write("<table border>");
	document.write("<tr>");
		document.write("<td>Array inicial</td>");
		document.write("<td>"+numeros+"</td>");
	document.write("</tr>");
	document.write("<tr>");
		document.write("<td>Positivos</td>");
		document.write("<td>"+suma_pos+"</td>");
	document.write("</tr>");
	document.write("<tr>");
		document.write("<td>Negativos</td>");
		document.write("<td>"+suma_neg+"</td>");
	document.write("</tr>");
	document.write("<tr>");
		document.write("<td>Total</td>");
		document.write("<td>"+total+"</td>");
	document.write("</tr>");
document.write("</table>");