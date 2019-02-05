$(document).ready(Start);

function Start(){
	$("#crear").click(crearTabla);
}

function colorear()
{
	if($(this).css("background-color")=="rgb(255, 0, 0)"){
		$(this).css("background-color","yellow");
	}else if($(this).css("background-color")=="rgb(255, 255, 0)"){
		$(this).css("background-color","inherit");
	}else{
		$(this).css("background-color","red");
	}
}


function crearTabla()
{
	let tabla=$("<table></table>");
	let fila,celda;
	tabla.attr("border",1);
	
	for(let i=1;i<=20;i++){
		fila=$("<tr></tr>");
		for(let j=1;j<=20;j++){
			celda=$("<td></td>");
			celda.css("width",25);
			celda.css("height",25);
			fila.append(celda);
			celda.click(colorear);
		}
		tabla.append(fila);
	}
    
	$("#contenido").append(tabla);


}