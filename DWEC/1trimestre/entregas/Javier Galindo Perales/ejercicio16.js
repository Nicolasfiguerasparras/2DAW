let numeros=prompt("Escribe 10 numeros:");
let num=numeros.split(" ");
let pos=0;
let neg=0;
let total=0;
for (let i=0;i<num.length;i++) {
	num[i]=parseInt(num[i]);
	if(num[i]>=0){
		pos=pos+num[i];
	}
	else{
		neg=neg+num[i];
	}
};
document.write("<table border>");
document.write("<tr><td bgColor='lightgreen'>Array inicial</td><td bgColor='orange'>"+num+"</td></tr>");
document.write("<tr><td bgColor='lightgreen'>Positivos</td><td bgColor='orange'>"+Math.abs(pos)+"</td></tr>");
document.write("<tr><td bgColor='lightgreen'>Negativos</td><td bgColor='orange'>"+Math.abs(neg)+"</td></tr>");
if(pos>=neg){
	total=Math.abs(pos)-Math.abs(neg);
	document.write("<tr><td bgColor='lightgreen'>Total</td><td bgColor='orange'>"+Math.abs(pos)+"-"+Math.abs(neg)+"="+total+"</td></tr>");
}
else{
	total=Math.abs(neg)-Math.abs(pos);
	document.write("<tr><td bgColor='lightgreen'>Total</td><td bgColor='orange'>"+Math.abs(neg)+"-"+Math.abs(pos)+"="+total+"</td></tr>");
}
document.write("</table>");

//2 3 4 -1 -5 8 -3 4 -9 12