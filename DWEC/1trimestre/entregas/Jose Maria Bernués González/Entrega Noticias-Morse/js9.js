let palabra = prompt("Introduce la palabra que deseas traducir");
let letra = palabra.toUpperCase().split("");


		for (let i = 0; i < palabra.length; i++) {
			if(letra[i]==" "){
				document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
			}else{
				document.write("<p>"+morse[letra[i]]+"</p>");
			}
		}

