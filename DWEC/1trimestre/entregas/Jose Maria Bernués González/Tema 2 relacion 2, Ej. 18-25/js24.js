let filas=prompt("¿Cuantas filas tiene la tabla?");
let colum=prompt("¿Cuantas columnas tiene la tabla?");

let cont=1;


for(let i = 1; i <= filas; i++){
    for(let j=1; j<=colum; j++){
    	document.write("<div class='caja'>"+cont+"</div>");
       	cont++;
       	if (j % colum == 0) {
       		document.write("<br><br><br>");
       	}
    }
}


