


//Sin toggle
$("img#bombilla").click(ControlBombilla);
function ControlBombilla()
{
    let imagen=$("img#bombilla");
	if(imagen.attr("src")=="apagada.gif")
	{
       imagen.attr("src","encendida.gif");
	}else{
       imagen.attr("src","apagada.gif");
	}
}

//Con toggle
$("img#bombilla").toggle(Apagar,Encender);
function Apagar()
{
	imagen.attr("src","apagada.gif");
}

function Encender()
{
	imagen.attr("src","encendida.gif");
}





