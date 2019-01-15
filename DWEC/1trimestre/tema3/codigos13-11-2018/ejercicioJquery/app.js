$(document).ready(Start);

function Start()
{
	let botones=$("input[type=button]");

	botones.first().click(Parrafos);
 	botones.eq(1).click(Bombilla);
 	botones.last().click(Div);

 	// botones.first().mouseenter(Parrafos);
 	// botones.eq(1).dblclick(Bombilla);
 	// botones.last().contextmenu(Div);
}

function Parrafos()
{
	// let parrafos=$("p");

 //    for(let i=0;i<3;i++)
 //    {
	//    parrafos.eq(i).text("He cambiado el texto");
	// }

	let parrafos=$("p");

    for(let i=0;i<3;i++)
    {
	    parrafos.eq(i).toggle();
	}
}

function Div()
{
	// $("div#info").css("background-color","khaki");

    $("div#info").fadeToggle();	
}


function Bombilla()
{
	// let imagen=$("img");
    
 //    if(imagen.attr("src")=="apagada.gif"){
 //        imagen.attr("src","encendida.gif");	
 //    }else{
 //        imagen.attr("src","apagada.gif");	
 //    }

 //   $("img").slideToggle(5000);


    $("img").animate({opacity:0.1,width:400,height:500},5000);
	
}