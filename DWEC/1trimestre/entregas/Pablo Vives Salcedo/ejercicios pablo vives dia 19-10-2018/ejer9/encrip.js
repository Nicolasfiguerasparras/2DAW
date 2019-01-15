let cadena1=prompt("introduce tu cadena para encriptarla","frase de ejemplo");
let sol=" ";
cadena1=cadena1.toUpperCase();

for (var i = 0; i < cadena1.length; i++) {
		if(cadena1[i]!=" "){
			sol=sol+morse[cadena1[i]];
		}else{
			sol+="||";
		};
	};

document.write("La frase encriptada en morse es : <br>||"+sol);

