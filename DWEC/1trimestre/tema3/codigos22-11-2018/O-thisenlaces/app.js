$(document).ready(Start);

function Start()
{
	$("a").click(Destino);
}

function Destino(evento)
{
	alert($(this).attr("href"));
	evento.preventDefault();
}