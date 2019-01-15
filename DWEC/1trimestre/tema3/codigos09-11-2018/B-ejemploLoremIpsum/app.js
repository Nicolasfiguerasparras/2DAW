$(document).ready(Start);

function Start()
{
	$("#boton").click(Accion);
	$("#busqueda").removeAttr("disabled").focus();
	
}

function Accion(evento)
{
    evento.preventDefault();
    let div_sec=$("div#secundario");

    
    // if(parseInt(div_sec.css("color"))<20)
    // {
    //   div_sec.css("font-size","+=1");
    // }
    let boton=$("#boton");

    // if(boton.hasClass("boton_personalizado")){
    //      boton.removeClass("boton_personalizado");
    // }else{
    //      boton.addClass("boton_personalizado");
    // }


    boton.toggleClass("boton_personalizado");

    
    $("#busqueda").attr("type","text");





    
}

