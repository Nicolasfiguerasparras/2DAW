$(document).ready(Start);

function Start()
{
	$("div#info").click(AccionClick);
	$("div#info").contextmenu(AccionDerecho);

	$(document).mousemove(AccionMoverse);
}


function AccionMoverse(evento)
{
    $("div#info").text("X:"+evento.pageX +"Y:"+evento.pageY);


}

function AccionClick()
{
	$("div#info").text("Has hecho click maquina");
	$("div#info").css("background-color","pink");
}


function AccionDerecho2(evento)
{
   evento.preventDefault();
   $("div#info").text("Tenemos el poder");
}





