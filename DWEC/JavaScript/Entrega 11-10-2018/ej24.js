let filas=prompt("Dime el número de filas");
let columnas=prompt("Dime el número de columnas");
let count=1;

for(let i=1; i<=filas; i++){
	for (let j=1; j<=columnas; j++){
		document.write("<div class ='caja'>"+count+"</div>");
		count++;
		if (j % columnas==0){
			document.write("<br><br><br>");
		}
	}
}