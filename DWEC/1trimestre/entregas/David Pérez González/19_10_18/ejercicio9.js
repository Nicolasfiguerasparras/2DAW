let frase = prompt("Dime una frase o una palabra:"); 

frase = frase.toUpperCase();

function traduccionMorse(code) {

	if (typeof morse[code] == "undefined") {
		return "";
	} else {
		return morse[code];
	}
};

alert(frase.split("").map(traduccionMorse).join("               "));