/*  EJERCICIO 1
nombre=prompt("Introduzca nombre");
email=prompt("Introduzca email");
alert(nombre);
alert(email);*/

/* EJERCICIO 2
let n1,n2,multi;
n1=parseInt(prompt("Introduzca base"));
n2=parseInt(prompt("Introduzca altura"));
multi=(n1*n2);
alert(multi);*/

/* EJERCICIO 3
let n1,multi;
n1=parseInt(prompt("Introduzca lado"));
multi=(n1*4);
alert(multi);*/

/* EJERCICIO 4
let n1,n2,n3,n4,multi,sum;
n1=parseInt(prompt("Introduzca primer valor"));
n2=parseInt(prompt("Introduzca segundo valor"));
n3=parseInt(prompt("Introduzca tercer valor"));
n4=parseInt(prompt("Introduzca cuarto valor"));
sum=(n1+n2);
multi=(n3*n4);
alert(sum);
alert(multi);*/

/* EJERCICIO 5
let n1,n2,n3,n4,div,sum,total;
n1=parseFloat(prompt("Introduzca primer valor"));
n2=parseFloat(prompt("Introduzca segundo valor"));
n3=parseFloat(prompt("Introduzca tercer valor"));
n4=parseFloat(prompt("Introduzca cuarto valor"));
sum=(n1+n2+n3+n4);
total=sum;
div=(total/4);
alert(div);*/






// EJERCICIO 7
/*let n1,cuadrado,cubo;
n1=parseFloat(prompt("Introduzca un numero"));
cuadrado=(n1*n1);
cubo=(n1*n1*n1);
alert(cuadrado);
alert(cubo);*/

// EJERCICIO 8
/*let temp,k,f;
temp=parseFloat(prompt("Introduzca temperatura"));
k=(temp+273);
f=(temp*(18/10)+32);
alert(k);
alert(f);*/

// EJERCICIO 9 
/*let a,b;
a=parseFloat(prompt("Teclee un numero"));
b=parseFloat(prompt("Teclee otro numero"));
n1=((a+b)*(a-b));
n2=((a*a)-(b*b));
alert("La solucion de la primera operacion: "+ n1 
	+" y la solucion de la segunda: "+ n2);*/

// EJERCICIO 10
/*let n1,n2,n3,mayor;
n1=parseFloat(prompt("Introduzca un numero"));
n2=parseFloat(prompt("Introduzca otro numero"));
n3=parseFloat(prompt("Introduzca otro numero"));
if (n1<10&&n2<10&&n3<10) {
	mayor=true;
}else
	mayor=false;
alert(mayor);*/

// EJERCICIO 11
/*let n1,n2,n3,igual;
n1=parseFloat(prompt("Introduzca un numero"));
n2=parseFloat(prompt("Introduzca otro numero"));
n3=parseFloat(prompt("Introduzca otro numero"));
if (n1==n2&&n2==n3&&n1==n3) {
	igual=true;
}else
	igual=false;
alert(igual);*/

// EJERCICIO 12
/*let n1;
n1=parseFloat(prompt("Introduzca un numero"));
if (n1%2==0) {
	n1=true;
}else
	n1=false;
alert(n1);*/

// EJERCICIO 13
/*let dia, mes, anio;
dia = parseInt(prompt("Introduce un día"));
mes = parseInt(prompt("Introduce un mes"));
anio = parseInt(prompt("Introduce un año"));
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
			alert("Error");
		}
	} else{
		mes=false;
		alert("Error");
	}
}else{
	dia=false;
	alert("Error");
}*/

// EJERCICIO 14
let dia,mes,año;
dia=parseInt(prompt("Ingrese dia: "));
mes=parseInt(prompt("Ingrese mes: "));
año=parseInt(prompt("Ingrese año: "));
if (año==25&&mes==12) {
document.write('La fecha ingresada corresponde a navidad');
  }else{
document.write('La fecha ingresada no corresponde a navidad');
  }


