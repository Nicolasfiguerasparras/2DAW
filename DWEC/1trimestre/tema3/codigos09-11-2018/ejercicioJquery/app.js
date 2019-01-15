$(document).ready(Start);

function Start()
{
	let botones=$("input[type=button]");
    
    //$("input[type=button]").first().click(PrimerBoton);
    //ETC ETC
	
	botones.first().click(PrimerBoton);

	botones.eq(1).click(SegundoBoton);

	botones.last().click(TercerBoton);
	//botones.eq(2).click(TercerBoton);
}


function PrimerBoton()
{
    $("p").fadeToggle();

}