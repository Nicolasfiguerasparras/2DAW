let lado, area, perimetro;

lado = parseFloat(prompt("Introduce el lado del cuadrado"));

area = lado * lado;
perimetro = lado + lado + lado + lado;

alert("El área del cuadrado es " + area + " y su perímetro " + perimetro);