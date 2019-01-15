/******************EJERCICIO5******************/
let n1, n2, n3, n4, media;
n1=parseFloat(prompt("introduce numero:"));
n2=parseFloat(prompt("introduce numero:"));
n3=parseFloat(prompt("introduce numero:"));
n4=parseFloat(prompt("introduce numero:"));
media=(n1+n2+n3+n4)/4;
alert(media);
/******************EJERCICIO6******************/
let precio, articulos, total;
precio=parseFloat(prompt("inserta precio:"));
articulos=prompt("inserta articulos:");
total=precio*articulos;
alert(total);
/******************EJERCICIO7******************/
let num, pot3, pot2;
num=prompt("introduce numero:");
pot2=num^2;
pot3=num^3;
alert("cuadrado: "+pot2+"\n"+"cubo: "+pot3);
/******************EJERCICIO8******************/
let c, f, k;
c=parseFloat(prompt("introduce grados celsius:"));
f=((c*18)/10)+32;
k=c+273;
alert("Farenheit: "+f+"\n"+"Kelvin: "+k);
/******************EJERCICIO9******************/
let a, b, op1, op2;
a=prompt("introduce numero:");
b=prompt("introduce numero:");
op1=(a+b)*(a-b);
op2=(a^2)-(b^2);
alert("operacion 1: "+op1+" operacion 2: "+op2);
/******************EJERCICIO10*****************/
let n1, n2, n3, men;
n1=prompt("introduce numero:");
n2=prompt("introduce numero:");
n3=prompt("introduce numero:");
if(n1<10 && n2<10 && n3<10){
	men=true;
	alert(men);
}
else{
	men=false;
	alert(men);
}
/******************EJERCICIO11*****************/
let n1, n2, n3, ig;
n1=prompt("introduce numero:");
n2=prompt("introduce numero:");
n3=prompt("introduce numero:");
if(n1==n2 && n1==n3){
	ig=true;
	alert(ig);
}
else{
	ig=false;
	alert(ig);
}
/******************EJERCICIO12*****************/
let n, par;
n=prompt("introduce numero:");
if(n%2==0){
	par=true;
	alert(par);
}
else{
	par=false;
	alert(par);
}
/******************EJERCICIO13*****************/
let dia, mes, anio, val;
dia=prompt("introduce dia:");
mes=prompt("introduce mes:");
anio=prompt("introduce anio:");
if(dia>=1 && dia<=31 && mes>=1 && mes<=12 && anio>=0){
	val=true;
	alert(val);
}
else{
	val=false;
	alert(val);
}
/******************EJERCICIO14*****************/
let dia, mes, anio, nav;
dia=prompt("introduce dia:");
mes=prompt("introduce mes:");
anio=prompt("introduce anio:");
if(dia==25 && mes==12){
	nav=true;
	alert(nav);
}
else{
	nav=false;
	alert(nav);
}