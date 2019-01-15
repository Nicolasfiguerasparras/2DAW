$(document).ready(Start);

function Start()
{
	// $("a").click(Ocultar);
 //    $("a").click(Mostrar);

 $("a").click(Control);
}

function Control()
{
	let texto=$("a").prev();
	if(texto.css("display")=="none"){
       texto.show();
       $("a").text("Pulse para ocultar");
	}else{
       texto.hide();
       $("a").text("Pulse para mostrar");
	}
}



// function Ocultar()
// {

//    $("a").prev().fadeOut();


// }


