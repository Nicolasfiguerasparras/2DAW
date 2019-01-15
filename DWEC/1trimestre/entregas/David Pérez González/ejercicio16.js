let numInt = prompt("Dime varios números (separa con espacios): ");
let separador = numInt.split(" ");
let positivos = 0;
let negativos = 0;
let total = 0;

document.write("<table border><tr><td>Array inicial</td><td>" + separador + "</td></tr>");

/*Positivos*/
document.write("<tr><td>Positivos</td>");

for (var i = 0; i < separador.length; i++) {
	
	if(separador[i] > 0) {
		positivos += parseInt(separador[i]);
	}
};

document.write("<td>" + positivos +"</td>");

/*Negativos*/
document.write("</tr><tr><td>Negativos</td>");

for (var i = 0; i < separador.length; i++) {
	
	if(separador[i] < 0) {
		negativos += parseInt(separador[i]);
	}
};

document.write("<td>" + negativos +"</td>");

document.write("</tr><tr><td>Total</td>");

document.write("</tr></table>");