$(document).ready(Inicio);

//Todo activado con el click de boton
function Inicio()
{
    //alert($("div#principal").text());
    alert($("#principal").prop("tagName"));
    //document.write de eso mismo para ver que se lo carga todo

    $("div#principal").text(); //visualiza el texto del elemento seleccionado con $
    $("div#principal").text("Texto nuevo"); //modifica el texto del elemento seleccionado

    $("div#principal").html(); //visualiza el HTML del elemento seleccionado con $
    $("div#principal").html("<h1>HTML nuevo</h1>"); //modifica el HTML del elemento seleccionado

        //Informacion dimensional del elemento boton
    let caja=$("#boton");
    alert("Ancho: "+caja.width()+" Alto: "+caja.height());
    let coordenadas=caja.position();
    alert("Top position: " + coordenadas.top + " Left position: " + coordenadas.left)
    
    //Para modificar las dimensiones
    caja.width(300);
    caja.height(500);
    caja.offset({top:10,left:40});



	let boton_ejemplo=$("#boton");
	boton_ejemplo.addClass("boton_personalizado");
	boton_ejemplo.removeClass("boton_personalizado");
	//Efecto interruptor
	if(boton_ejemplo.hasClass("boton_personalizado"))
	{
       boton_ejemplo.removeClass("boton_personalizado");
    }else{
       boton_ejemplo.addClass("boton_personalizado");
    }
    //JQuery sigue simplificandonos el trabajo
    boton_ejemplo.toogleClass("boton_personalizado");

    //Todos los parrafos a color rosa
    $("p").css("background-color","pink");

    //Todos los div con clase articulo a fuente 2em
    $("div.articulo").css("font-size","2em");

    //Varias propiedades en un sola linea
    $("p").css({"background-color": "yellow", "font-size": "200%"});

    //Si las propiedades son numericas
    $("p").css( "border-width", "+=3" );

    


    $("#boton").css("font-family");

    alert($("#boton").css("background-color"));

    let texto=$("#secundario");
    if(parseInt(texto.css("font-size"))>20)
    {
        alert("El texto es demasiado grande");
    }else{
        texto.css("font-size","+=1");
    }
    

    //Habiltamos un boton porque el formulario es correcto
    //Le damos el foco para que se active al pulsar intro
    $("#busqueda").removeAttr("disabled").focus();

    $("div#principal").hide();
    $("div#principal").show();
    $("div#principal").toggle();

    $("div#principal").fadeOut(1000);
    $("div#principal").fadeIn();
    $("div#principal").fadeToggle();

    $("div#principal").slideUp();
    $("div#principal").slideDown(
                    function(){
                      alert("Se ha terminado la animacion");
                    });   

    $("div#principal").slideToggle(); 
    
    $("img").fadeOut(1000).fadeIn(1000).width(300);

   