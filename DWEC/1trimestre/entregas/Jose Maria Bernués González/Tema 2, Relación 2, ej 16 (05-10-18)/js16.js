let numeros = prompt("Introduce una serie de numeros");
let trozos = numeros.split(" ");
let sumPos = 0;
let sumNeg = 0;
let total = 0;
let min = 0;
let max = 0;

for (let i = 0; i < trozos.length; i++) {
	trozos[i] = parseInt(trozos[i]);
	if(trozos[i] >= 0){
		sumPos += trozos[i];
		max = sumPos;
		min = sumNeg;
	}else{
		sumNeg += trozos[i];
		max = sumNeg;
		min = sumPos;
	}
}
sumNeg = (-sumNeg);

if(sumPos > sumNeg || sumNeg == sumPos){
	total = sumPos - sumNeg;
}else{
	total = sumNeg - sumPos;
}

document.write("<table border>");

document.write("<tr>");
document.write("<td bgcolor='green'>Array Inicial</td>");
document.write("<td bgcolor='orange'>"+numeros+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td bgcolor='green'>Positvos</td>");
document.write("<td bgcolor='orange'>"+sumPos+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td bgcolor='green'>Negativos</td>");
document.write("<td bgcolor='orange'>"+sumNeg+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td bgcolor='green'>Total</td>");
document.write("<td bgcolor='orange'>"+max+"-"+min+"="+total+"</td>");
document.write("</tr>");