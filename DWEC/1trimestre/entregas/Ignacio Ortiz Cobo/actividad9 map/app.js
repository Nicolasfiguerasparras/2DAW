let input = prompt('Escriba el texto a traducir');
let traducido = "";

for (let i = 0; i < input.length; i++) {
	traducido += traducir(input[i]);
}

document.write(traducido);

function traducir(letra){
	let salida = "";
	if(letra !== " "){
		salida = morse[letra];
	}else{
		salida = " ";
	}

	return salida;
}