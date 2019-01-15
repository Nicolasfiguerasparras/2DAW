function encode(palabra){
	for (var i = 0; i < palabra.length; i++) {
		palabra = palabra.toUpperCase();
		document.write(morse[palabra.charAt(i)]+" ");
	}
}

let word = prompt("Escribe una palabra para escribir en morse:");
encode(word);