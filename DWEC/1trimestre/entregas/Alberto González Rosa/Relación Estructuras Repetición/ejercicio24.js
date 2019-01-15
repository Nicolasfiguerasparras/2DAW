let row = prompt("Introduce filas");
let col = prompt("Introduce columnas");

let tmp = 1;

for (let i = 1; i <= row; i++) {
	for(let j = 1; j <= col;j++){
		if((i+j)%2!=0){
			document.write("<div class=\"caja cajanegra\">"+tmp+"</div>");
		}else{
			document.write("<div class=\"caja cajablanca\">"+tmp+"</div>");
		}
		
		tmp++;
	}
	document.write("<br><br><br>");
}