let celsius = parseInt(prompt("Introduce la temperatura en grados celsius"));
let fahrenheit = (celsius*1.8)+32;
let kelvin = (celsius+273);

document.write("<h2>" + celsius + " ºC es igual a " + fahrenheit + " grados fahrenheit</h2><br>");

document.write("<h2>" + celsius + " ºC es igual a " + kelvin + " grados kelvin</h2>");
