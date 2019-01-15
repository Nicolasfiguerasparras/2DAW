// EJ 1
/*nom=prompt("Introduzca su nombre");
email=prompt("Introduzca su email");
alert(nom);
alert(email);
*/

// EJ 2
/*let base,altura,resultado;
base=parseInt(prompt("Introduzca base"));
altura=parseInt(prompt("Introduzca altura"));
resultado=(base*altura);
alert(resultado);
*/

// EJ 3
/*let lado,resultado;
lado=parseInt(prompt("Introduzca lado"));
resultado=(lado*4);
alert(resultado);
*/

// EJ 4
/*let num1,num2,num3,num4,mul,suma;
num1=parseInt(prompt("Introduzca primer valor"));
num2=parseInt(prompt("Introduzca segundo valor"));
num3=parseInt(prompt("Introduzca tercer valor"));
num4=parseInt(prompt("Introduzca cuarto valor"));
suma=(num1+num2);
mul=(num3*num4);
alert(suma);
alert(mul);
*/

// EJ 5
/*let num1,num2,num3,num4,div,suma,resultado;
num1=parseFloat(prompt("Introduzca primer valor"));
num2=parseFloat(prompt("Introduzca segundo valor"));
num3=parseFloat(prompt("Introduzca tercer valor"));
num4=parseFloat(prompt("Introduzca cuarto valor"));
suma=(num1+num2+num3+num4);
resultado=suma;
div=(resultado/4);
alert(div);
*/

// EJ 6
/*let precio,num1,div;
precio=parseFloat(prompt("Introduzca precio"));
num1=parseInt(prompt("Introduzca numero de articulos"));
div=(precio*num1);
alert(num1 +"productos por "+ num1 +"productos, tienes que abonar: "+div);
*/

// EJ 7
/*let lado,cuadrado,cubo;
lado=parseFloat(prompt("Introduzca lado"));
cuadrado=(lado*lado);
cubo=(lado*lado*lado);
alert(cuadrado);
alert(cubo);
*/

// EJ 8
/*let temperatura,k,f;
temperatura=parseFloat(prompt("Introduzca temperatura"));
k=(temperatura+273);
f=(temperatura*(18/10)+32);
alert(k);
alert(f);
*/

// EJ 9 
/*let a,b;
a=parseFloat(prompt("Introduzca primer numero"));
b=parseFloat(prompt("Introduzca segundo numero"));
num1=((a+b)*(a-b));
num2=((a*a)-(b*b));
alert("La solucion de la primera operacion: "+ num1 +" y la solucion de la segunda: "+ num2);
*/


// EJ 10
/*let num1,num2,num3,mayor;
num1=parseFloat(prompt("Introduzca primer numero"));
num2=parseFloat(prompt("Introduzca segundo numero"));
num3=parseFloat(prompt("Introduzca tercer numero"));

if (num1<10 && num2<10 && num3<10) {
	mayor=true;
}else
	mayor=false;
alert(mayor);
*/


// EJ 11
/*let num1,num2,num3,igual;
num1=parseFloat(prompt("Introduzca primer numero"));
num2=parseFloat(prompt("Introduzca segundo numero"));
num3=parseFloat(prompt("Introduzca tercer numero"));

if (num1 == num2 && num2 == num3 && num1 == num3) {
	igual=true;
}else
	igual=false;
alert(igual);
*/


// EJ 12
/*let num1;
num1=parseFloat(prompt("Introduzca un numero"));

if (num1%2==0) {
	num1=true;
}else
	num1=false;
alert(num1);
*/


// EJ 13
/*let dia, mes, anio;
dia=parseInt(prompt("Introduzca el dia"));
mes=parseInt(prompt("Introduzca el mes"));
anio=parseInt(prompt("Introduzca el año"));

if (dia<30 && dia>0) {
	dia=true;
	if (mes>0 && mes<13) {
		mes=true;
		if (anio>0){
			anio=true;
			alert("El día es: "dia);
			alert("El mes es: "mes);
			alert("El año es: "anio);
		}else{
			anio=false;
			alert("Datos incorrectos");
		}
	} else{
		mes=false;
		alert("Datos incorrectos");
	}
}else{
	dia=false;
	alert("Datos incorrectos");
}
*/



// EJ 14
/*let dia,mes,anio;
dia=parseInt(prompt("Introduzca el dia: "));
mes=parseInt(prompt("Introduzca el mes: "));
anio=parseInt(prompt("Introduzca el año: "));


let valida=(dia>=22 && dia<=31 && mes==12 && anio>=0 || dia>=1 && dia<=7 mes==1 && anio>=0);

alert(valida);
*/

