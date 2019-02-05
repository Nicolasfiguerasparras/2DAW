$(document).ready(Start);

function Start()
{
	let tabla=$("<table></table>");
	tabla.attr("border",1);
    let fila,celda,numero;

    numero=0;
    for(let i=0;i<20;i++){
    	fila=$("<tr></tr>");
    	for(let j=0;j<10;j++){
    		celda=$("<td></td>");
    		celda.text(numero);
    		celda.click(pintar);
    		celda.contextmenu(borrar);
    		numero++;
    		fila.append(celda);
    	}
    	tabla.append(fila);
    }

    $("#contenido").append(tabla);
}

function borrar(evento){
	evento.preventDefault();
    $(this).css("background-color","inherit");	
}

function pintar()
{
	$(this).css("background-color","blue");
}
