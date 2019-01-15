let linea=prompt("Dime tres palabras");
let datos=linea.split("_");

document.write("<select>");
document.write("<option value='"+datos[0]+"'>"+datos[0]+"</option>");
document.write("<option value='"+datos[1]+"'>"+datos[1]+"</option>");
document.write("<option value='"+datos[2]+"'>"+datos[2]+"</option>");
document.write("</select>");