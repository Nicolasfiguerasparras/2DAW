let precio, cantidad, recibo;

precio = parseFloat(prompt("Introduce el precio del artículo"));
cantidad = parseInt(prompt("Introduce la cantidad de artículos"));

recibo = precio * cantidad;

document.write("Precio........... " + precio + "€ <br>");
document.write("Unidades...... " + cantidad  + "<br><br>");
document.write("RECIBO......... " + recibo + "€");