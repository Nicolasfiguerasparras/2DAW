let precio = parseFloat(prompt("Ingrese un precio"));
let cantidad = parseInt(prompt("Ingrese cantidad a vender"));
let pagar = precio * cantidad;

alert(pagar);

document.write("Cantidad: " + cantidad + "--");
document.write(" Precio: " + precio + "--");
document.write(" Cantidad a pagar: " + pagar);