let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let dni=parseInt(prompt("Introduce tu DNI"));
let pos = dni % 23;
let letra = letras[pos];
document.write( dni + letra);		