let array = [];
let sumP = 0;
let sumN = 0;
let total = 0;


for(let i = 0; i < 10; i++){
	array[i] = parseInt(prompt("Introduzca el numero "+i+": "));

	if(array[i] > -1){
		sumP += array[i];
	}else{
		sumN += array[i];
	}
	sumN=-sumN;
}

document.write("<table border>"+
					"<tr>"+
					"<th bgcolor='green'>Array inicial</th>"+
					"<td bgcolor='yellow'>"+array+"</td>"+
					"</tr>"+
					"<tr>"+
					"<th bgcolor='green'>Positivos</th>"+
					"<td bgcolor='yellow'>"+sumP+"</td>"+
					"</tr>"+
					"<tr>"+
					"<th bgcolor='green'>Negativos</th>"+
					"<td bgcolor='yellow'>"+sumN+"</td>");
					if (sumP > sumN) {
						total = sumP - sumN;
						document.write("<tr>"+
							"<th bgcolor='green'>Total</th>"+
							"<td bgcolor='yellow'>"+sumP+"-"+sumN+"="+total+"</td>"+
						"</tr>");
					}else{
						total = sumN - sumP;
						document.write("<tr>"+
							"<th bgcolor='green'>Total</td>"+
							"<td bgcolor='yellow'>"+sumN+"-"+sumP+"="+total+"</td>"+
						"</tr>");
					}

					document.write("</table>");
