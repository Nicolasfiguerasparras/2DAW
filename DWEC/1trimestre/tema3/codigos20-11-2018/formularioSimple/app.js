$(document).ready(Start);

function Start()
{
   $("#nombre").blur(Vacio);
   $("#nombre").keyup(Longitud);
   $("#formu").submit(Controlar);

}

function Longitud()
{
	let nombre=$("#nombre").val();
	let span;
    
    span=$("#nombre").next();         
	if(nombre.length<5)
	{
       //alert(nombre.length+" Muy corto");
       // $("#nombre").next().text("Nombre muy corto");
       span.text("Nombre muy corto");
       span.removeClass("ok");
       span.addClass("error");
	}else if(nombre.length>15){
      // alert("Muy largo");
      span.removeClass("ok");
      span.text("Nombre muy largo");
      span.addClass("error");
	}else{
	  span.text("OK");	
	  span.removeClass("error");
      span.addClass("ok");
	}
}


function Vacio()
{
    if($("#nombre").val()=="")
    {
    //	alert($("#nombre").length+" No se puede dejar vacio");
    }
}


function Controlar(evento)
{
    if($("#nombre").val()=="")
    {
    	alert("No se puede dejar vacio");
    	evento.preventDefault();
    }	
}



