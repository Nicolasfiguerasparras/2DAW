let texto= prompt("Dime la frase en mayuscula");
texto=texto.toUpperCase();
for(let i = 0; i < texto.length; i++){
	let letra = traducir(texto[i]);
	document.write(letra);
}


function traducir(aux){
    if (aux != " ") {
    	return morse[aux];
    }else
    	return aux;
}
