let a = parseInt(prompt("Numero 1"));
let b = parseInt(prompt("Numero 2"));
let c = parseInt(prompt("Numero 3"));
let iguales = (a==b && a==c) && (b==a && b==c) && (c==a && c==b);
alert(iguales);