$(document).ready(Start);

function Start(){
	$("#crear").click(crearTabla);
}

function colorear()
{
	r=Math.floor(Math.random()*255);
	g=Math.floor(Math.random()*255);
	b=Math.floor(Math.random()*255);
	$(this).css("background-color","rgb("+r+", "+g+", "+b+")");
}

function crearTabla()
{
	let tabla=$("<table></table>");
	let fila,celda;
	let r,g,b;
	tabla.attr("border",1);
	
    $("#contenido table").remove();

	for(let i=1;i<=20;i++){
		fila=$("<tr></tr>");
		for(let j=1;j<=20;j++){
			celda=$("<td></td>");
			celda.css("width",25);
			celda.css("height",25);
			fila.append(celda);
			celda.mouseenter(colorear);
			r=Math.floor(Math.random()*255);
			g=Math.floor(Math.random()*255);
			b=Math.floor(Math.random()*255);
			celda.css("background-color","rgb("+r+", "+g+", "+b+")");
		}
		tabla.append(fila);
	}
    
	$("#contenido").append(tabla);


}