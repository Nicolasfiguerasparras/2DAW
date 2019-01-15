let precio = parseFloat(prompt("Precio articulo:"));
let cantidad = parseInt(prompt("Cantidad:"));

let total = (precio*cantidad);

document.write("<h1>El cliente debe pagar: " + total + " </h1>");