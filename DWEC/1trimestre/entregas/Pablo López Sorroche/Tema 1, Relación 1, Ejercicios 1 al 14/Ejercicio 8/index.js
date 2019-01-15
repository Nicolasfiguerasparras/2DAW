let celsius, fahrenheit, kelvin;

celsius = parseFloat(prompt("Introduce los grados Celsius"));

fahrenheit = (celsius * 18) / (10 + 32);
kelvin = celsius + 273;

document.write("Fahrenheit = " + fahrenheit + "<br>");
document.write("Kelvin = " + kelvin);