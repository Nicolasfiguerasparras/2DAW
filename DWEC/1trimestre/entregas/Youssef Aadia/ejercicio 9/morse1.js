let texto = prompt("Introduzca la frase");
texto = texto.toUpperCase();
for(let i=0; i<texto.length; i++){
	let palabra = traduccion(texto[i]);
	document.write(palabra);
}

function traduccion(code) {
	if (code != " ") {
		return morse[code];
	}else
		return code;
	}