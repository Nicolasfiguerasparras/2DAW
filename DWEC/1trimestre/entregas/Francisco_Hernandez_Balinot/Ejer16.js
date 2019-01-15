
document.write("<style type='text/css'>"+
				"#verde{background-color: green;}"+
				"#rojo{background-color: red;"+
				"</style>");
let datos = prompt("Dime 10 numeros separados por coma");
let array = datos.split(",");
let positivos = 0;
let negativos = 0;
let total = 0;

for (let i = 0; i < array.length; i++) {
	array[i]=parseInt(array[i]);
	if (array[i] >= 0) {
		positivos += array[i];
	}else
		negativos += (-array[i]);
}

if (positivos > negativos) {
	total = positivos - negativos;
}else if (negativos > positivos) {
	total = negtivos - positivos;
}else
	total = 0;
document.write("<table border>"+
						"<tr>"+
							"<td id= 'verde'> Array inicial </td>"+
							"<td id= 'rojo'>"+array+"</td>"+
						"</tr>"+
						"<tr>"+
						"<td id= 'verde'> Positivos </td>"+
						"<td id= 'rojo'>" + positivos + "</td>"+
						"</tr>"+
						"<tr>"+
						"<td id= 'verde'> Negarivos </td>"+
						"<td id= 'rojo'>" + negativos + "</td>"+
						"</tr>"+
						"<tr>"+
						"<td id= 'verde'> Total </td>"+
						"<td id= 'rojo'>" + total + "</td>"+
						"</tr>");