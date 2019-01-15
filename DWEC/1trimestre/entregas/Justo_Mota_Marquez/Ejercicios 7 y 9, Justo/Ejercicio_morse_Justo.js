let texto = prompt("Introduzca un texto: ");

let mayus = texto.toUpperCase();

alert(traducirAmorse(mayus));


//-----------------------------------------


function traducirAmorse(mayus){
	let salida="";
	for (let i = 0; i < mayus.length; i++) {
    	 salida += Traducir(mayus[i]);
	};

	return salida;
}	


function Traducir(letra)
{
	if(letra==" ")
	{
		return letra;
	}else{
		return morse[letra];
	}
}


