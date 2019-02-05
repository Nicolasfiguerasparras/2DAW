$(document).ready(Start);

function Start(){
	$("#crear").click(crearTabla);
}

function colorear()
{
	//Coger el input color y marcarla en la celda this
	let color_seleccionado=$("input#datos").val();
	$(this).css("background-color",color_seleccionado);
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