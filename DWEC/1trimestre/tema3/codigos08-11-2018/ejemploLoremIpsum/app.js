$(document).ready(Start);

function Start()
{
	//EJERCICIO 2
	// alert("Buscador tiene: "+$("#buscador").prop("tagName"));
	// alert("Noticias tiene: "+$("#noticias").prop("tagName"));
	// alert("Menu principal tiene: "+$("#menu_principal").prop("tagName"));
	// alert("Secundario tiene: "+$("#secundario").prop("tagName"));
	// alert("Pie tiene: "+$("#pie").prop("tagName"));


    //EJERCICIO 3
    // let clears=$(".clear");
    // let fechas=$(".fecha");
    // let copyright=$(".copyright");

    // alert(clears.prop("tagName"));
    // alert(clears.length);

    // alert(fechas.prop("tagName"));
    // alert(fechas.length);

    // alert(copyright.prop("tagName"));
    // alert(copyright.length);


    //EJERCICIO 4

    // alert($("#noticias a").length);
    // alert($("[type]").length);
    // alert($(".enlaces").prop("tagName"));

    // alert($("div.articulo").length);
    // alert($("div.articulo a").length);

   //EJERCICIO 6
   let h2_articulos=$("div.articulo h2");
   // h2_articulos.css("background-color","aquamarine");
   // h2_articulos.css("text-decoration","underline");
   // h2_articulos.css("font-size","22px");
   
   // h2_articulos.css({"background-color":"aquamarine",
   // 					 "text-decoration":"underline",
   //                   "font-size":"22px"
   //                  });

   // COSA TO LOCA
   // h2_articulos.css("background-color","aquamarine")
   //             .css("text-decoration","underline")
   //             .css("font-size","22px");

   //EJERCICIO 5
   // let segundo=$("a").eq(1);
   // let tercero=$("a").eq(2);
   // let cuarto=$("a").eq(3);

   // segundo.attr("href","https://www.google.es");
   // tercero.attr("href","https://www.escuelaartegranada.com");
   // cuarto.attr("href","https://www.w3schools.com");

   let enlaces=$("a");

   enlaces.eq(1).attr("href","http://www.google.es");
   enlaces.eq(2).attr("href","https://www.escuelaartegranada.com");
   enlaces.eq(3).attr("href","https://www.w3schools.com");


   // $("div.articulo").css("color","green");
   // $("div#noticias a").css("font-size","2em");

   // $("div.articulo a,div#publicidad a,div#secundario a").text("Leer más");

   // $("input[type=text]").css("border","3px solid red");

   // $("div#secundario h2").text("Tu Pagina tiene un virus");

   // $("img").attr("src","encendida.gif");


   //$("#boton").click(Accion);


   $("a").click(Confirmar);
   $("#boton").click(Accion);
   // $("input[type=submit]").click(Accion);

   $("body").contextmenu(EvitarBotonDerecho);
}


function Accion(evento)
{
	$("#busqueda").removeAttr("disabled");
	evento.preventDefault();	

}


function Confirmar(evento)
{
	if(confirm("¿Quiere realmente salir de la pagina?"))
	{
       alert("Adios");
    }else{
        evento.preventDefault();	
    }
}


function EvitarBotonDerecho(){
     evento.preventDefault();	
}