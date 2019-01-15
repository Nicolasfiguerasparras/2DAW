let texto = prompt("Introduce texto a traducir:");
let letra = texto.toUpperCase().split("");

for(let i=0;i<letra.length;i++){
	if(letra[i]==" "){
		document.write("&nbsp;&nbsp;&nbsp;");
	}
	else{
		document.write(morse[letra[i]]);
	}
	
}