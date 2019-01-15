let nombre = prompt("Nombre");
let apellidos = prompt("Apellidos");
let edad = prompy ("Edad");
let email = prompt ("Email");

document.write("<ol>");
document.write("<li>"+nombre+"</li>");
document.write("<li>"+apellidos+"</li>");
document.write("<li>"+edad+"</li>");
document.write("<li>"+email+"</li>");
document.write("</ol>");

//otra forma de hacerlo:

let datos=prompt("Datos separados por coma");
let trozos=datos.split(",");

document.write("<ol>");
document.write("<li>"+trozos[0]+"</li>");
document.write("<li>"+trozos[1]+"</li>");
document.write("<li>"+trozos[2]+"</li>");
document.write("<li>"+trozos[3]+"</li>");
document.write("</ol>");