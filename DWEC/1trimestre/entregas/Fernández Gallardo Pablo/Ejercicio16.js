let datos = prompt("Introduzca 10 numeros enteros");

let array = datos.split(",");
let positivos=0;
let negativos=0;
let total=0;

document.write("")
for(var i=0; i < array.length; i++){
	array[i]=parseInt(array[i]);
	if(array[i] >= 0){
		positivos+=array[i];
	}else{
		negativos = negativos - (array[i]);
		//negativos+=array[i];
	}
}

if(positivos > negativos){
	total = positivos - negativos;
}else if(negativos > positivos){
	total = negativos - positivos;
}else{
	total=0;
}

document.write("<table border><tr><td bgcolor='green'>Array inicial</td><td bgcolor='orange'>"+datos+"</td></tr><tr><td bgcolor='green'>Positivos</td><td bgcolor='orange'>"+positivos+"</td></tr><tr><td bgcolor='green'>Negativos</td><td bgcolor='orange'>"+negativos+"</td></tr><tr><td bgcolor='green'>Total</td><td bgcolor='orange'>"+positivos+"-"+negativos+"="+total+"</td></tr></table>");


