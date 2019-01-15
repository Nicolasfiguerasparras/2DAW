$(document).ready(Start);

function Start()
{
     $("div#info").mousemove(noticias);    
}

function Seguir(eventos)
{
	let x=eventos.pageX;
	let y=eventos.pageY;

    let posicion={};
    posicion["top"]=y-100;
    posicion["left"]=x-200;
    $("div#info").offset(posicion);
}