$(document).ready(Start);

function Start(){
	$("#crear").click(crearTabla);
}

function insertar()
{
	let contenido=$("#texto").val();
	let url=$("#url").val();
	let enlace;
	$(this).text("");
	
	if(contenido!="" && url!=""){
		enlace=$("<a></a>");
		enlace.text(contenido);
		enlace.attr("href",url);
		$(this).append(enlace);
	}else{
		alert("Faltan datos");
	}

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
			celda.click(insertar);
		}
		tabla.append(fila);
	}
    
	$("#contenido").append(tabla);


}