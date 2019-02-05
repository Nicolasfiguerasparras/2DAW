$(document).ready(Start);

function Start(){
	$("#menu a").click(verHoroscopo);
}

function ponerCargando(){
	$("#cargando").show();
}

function quitarCargando(){
	$("#cargando").hide();
}

function incrustarHoroscopo(respuesta){
	$("#info").slideUp(
		function(){
		    $("#info").html(respuesta);
		});

   $("#info").slideDown();
}



function verHoroscopo(evento){
	evento.preventDefault();

	let enlace=$(this).attr("href");

	$.ajax({	
			url:enlace,
			beforeSend:ponerCargando,
			complete:quitarCargando,
			success:incrustarHoroscopo,
			dataType:"html"
			});

}