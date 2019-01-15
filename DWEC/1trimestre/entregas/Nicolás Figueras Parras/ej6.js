let precio = parseFloat(prompt("Precio del producto (en €)"));
let cant = parseInt(prompt("Número de unidades"));
let total = precio*cant;
document.write("Precio ud: "+precio+"€<br>");
document.write("Cantidad: "+cant+"<br>");
document.write("TOTAL: "+total+"€");