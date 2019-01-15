// Actividad 1
let usuario = prompt('Escriba su nombre de usuario');
let email = prompt ('Escriba su email')
alert(usuario);
alert(email);
// Actividad 2
let alto = parseFloat(prompt('Escriba el alto del rectangulo'));
let ancho = parseFloat(prompt('Escriba el ancho del rectangulo'));
let superficie = alto*ancho;
alert('La superficie es '+superficie);
// Actividad 3
let lado = parseFloat(prompt('Escriba el lado del cuadrado'));
let peri = lado*4;
let superficie = lado*lado;
alert('El perimetro es '+peri+' y la superficie '+superficie);
// Actividad 4
let num1 = parseInt(prompt('Escriba el primer numero'));
let num2 = parseInt(prompt('Escriba el segundo numero'));
let num3 = parseInt(prompt('Escriba el tercer numero'));
let num4 = parseInt(prompt('Escriba el cuarto numero'));
let suma = num1+num2;
let multi = num3*num4;
alert('La suma del primero numero del segundo es: '+suma);
alert('La multiplicacion del tercero numero con el cuarto: '+multi);
// Actividad 5
let num1 = parseFloat(prompt('Escriba el primer numero'));
let num2 = parseFloat(prompt('Escriba el segundo numero'));
let num3 = parseFloat(prompt('Escriba el tercer numero'));
let num4 = parseFloat(prompt('Escriba el cuarto numero'));
let media = (num1+num2+num3+num4)/4;
alert('La media de los 4 numero introducidos es: '+media);
// Actividad 6
let cantidad = parseInt(prompt('Cantidad de articulos adquiridos'));
let precio = parseFloat(prompt('Precio al que lo ha adquirido'));
let total = cantidad*precio;
document.write("La cantidad de articulos adquiridos son "+cantidad);
document.write("<br>A un precio por unidad de "+precio+"€");
// Actividad 7
let num = parseFloat(prompt("Escriba el numero"));
let cuadrado = Math.pow(num,2);
let cubo = Math.pow(num,3);
alert("El numero introducido al cuadrado es: "+cuadrado);
alert("El numero introducido al cubo es: "+cubo);
// Actividad 8
let temp = parseFloat(prompt("Escriba grados Celsius"));
let fah = (temp*18)/10+32;
let kel = temp+273;
alert("Los grados introducidos es equivalente a: "+fah+" grados Fahrenheit");
alert("Los grados introducidos es equivalente a: "+kel+" grados Kelvin");
// Actividad 9
let num1 = parseInt(prompt("Escriba el numero A"));
let num2 = parseInt(prompt("Escriba el numero B;"));
let op1 = (num1+num2)*(num1-num2);
let op2 = (Math.pow(num1,2)-Math.pow(num2,2));
alert("La primera operacion es: "+op1+" la segunda operacion es: "+op2);
// Actividad 10
let num1 = parseInt(prompt("Escriba el numero 1"));
let num2 = parseInt(prompt("Escriba el numero 2"));
let num3 = parseInt(prompt("Escriba el numero 3"));
let prob = (num1 < 10 && num2 < 10 && num3 < 10);
alert("¿Son todos los numeros inferiores a 10? "+prob);
// Actividad 11
let var1 = prompt("Escriba el numero 1");
let var2 = prompt("Escriba el numero 2");
let var3 = prompt("Escriba el numero 3");
let same = (var1 == var2 && var1 == var3);
alert("¿Son iguales los 3 valores introducidos? "+same);
// Actividad 12
let num = parseInt(prompt("Escribe un numero"));
let par = (num%2==0);
alert("¿Es par el numero introducido? "+par);
// Actividad 13
let dia = parseInt(prompt("Escriba el dia"));
let mes = parseInt(prompt("Escriba el mes"));
let anio = parseInt(prompt("Escriba el año"));
let fine = (dia > 0 && dia < 32 && mes > 0 && mes < 13 && anio >= 0 && anio < 2018);
alert("¿La fecha introducida es correcta? "+fine);
// Actividad 14
let dia = parseInt(prompt("Escriba el dia"));
let mes = parseInt(prompt("Escriba el mes"));
let anio = parseInt(prompt("Escriba el año"));
let fine = ((dia > 25 && dia < 32 && mes == 12 && anio > 0) || (dia > 0 && dia < 7 && mes == 1 && anio > 0));
alert("¿La fecha introducida es navidad? "+fine);