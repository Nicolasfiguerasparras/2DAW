
$(document).ready(Inicio);

function Cuerpo()
{
	$(body).css("backgroundcolor","cyan");
}

function Mensaje()
{
	alert("Has pulsado sobre la imagen");
}

function Inicio()
{
    $("body").click(Cuerpo);
	$("img").click(Mensaje);

	 // $("body").hide();
	 // $("body").hide(3000);
	 // //Encadenamiento de funciones o chaining
	 // $("body").hide().show(3000);
  //    $("body").hide().fadeIn(3000);
  //    $("img").hide().width(300).height(500).css("border","3px solid red").slideDown(3000);
}



