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






let texto = prompt("Introduce texto a traducir:");
let partes = texto.toUpperCase();    

    function traduccion(partes) {
        for (var i = 0; i < partes.length; i++) {
            if (partes[i]==" ") {
                document.write("&nbsp;&nbsp;&nbsp;");
            }else{
                document.write(morse[partes[i]]);
            }
        }

    }

traduccion(partes);
            
    


