$(document).ready(Start);

function Start(){
	
	$("div#info").ondblclick(AccionDblClick);
}


function AccionClick(){
	$("div#info").text("Acabas de asesinar un gatitos");
	$("div#info").css("background-color","red");
}

function AccionDblClick(){
	$("div#info").text("Acabas de asesinar DOS gatitos, para ya ¿no?");
	$("div#info").css("background-color","yellow");
}