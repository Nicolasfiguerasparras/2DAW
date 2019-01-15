let morse = { 
	"A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-...",
    "7": "--...",
    "8": "---..",
    "9": "----."
};

let texto = prompt("Introduce un texto");
let letras = texto.toUpperCase();

function traducirMorse(letras){
    for (let i = 0; i < letras.length; i++) {
        if(letras[i]==" "){
            document.write("&nbsp;&nbsp;&nbsp;");
        }else{
            document.write(morse[letras[i]]);
        }
    }
}

traducirMorse(letras);