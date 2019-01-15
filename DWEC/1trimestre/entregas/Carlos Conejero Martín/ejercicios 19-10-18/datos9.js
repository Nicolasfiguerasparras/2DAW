texto=prompt("Escribe un pequeño texto");

texto=texto.toUpperCase();

function traducir(code) {

    if(typeof morse[code] == "undefined") {

        return "";

    }else{

        return morse[code];
    }
}

alert(texto.split("").map(traducir).join(" "));