let numeros=prompt("Introduce 10 numeros separados por comas: ");
//3,2,12,-1,9,-4,-2,-3,3,1
let lista=numeros.split(",");
let negativos=0;
let positivos=0;
	for(let i=0;i<lista.length;i++){
		
		if(parseInt(lista[i])<0){
			negativos=negativos-parseInt(lista[i]);
		}else{
			positivos=positivos+parseInt(lista[i]);
		}
	}
	resta=positivos-negativos;

document.write("<table border><tr><td>Array inicial</td><td>");
document.write(lista);
document.write("</td></tr><tr><td>Positivos</td><td>"+positivos+"</td></tr>");
document.write("<tr><td>Negativos</td><td>"+negativos+"</td></tr>");
document.write("<tr><td>Total</td><td>"+positivos+"-"+negativos+"="+resta+"</td></tr>");
document.write("</table>");
