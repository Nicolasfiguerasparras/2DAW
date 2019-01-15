
    let direcciones="";
    let enlaces=$("a");
    for(let i=0;i<enlaces.length;i++)
    {
        direcciones+="<p>Enlace: "+i+" "enlaces.eq(i).attr("href")+"</p>";
    }
    //append añade contenido al final de una etiqueta
    $("body").append("Bibliografia: "+direcciones);

    let direcciones="";
    $("a").each(
        function(i,enlace)
        {
            direcciones+="<p>Enlace: "+i+" "enlace.attr("href")+"</p>";
        });
    $("body").append("Bibliografia: "+direcciones);
}



$("img#portada").mouseenter(CambiaImagen);
$("img#portada").mouseleave(VolverImagen);
//Usando hover
$("#img#portada").hover(CambiaImagen,VolverImagen);

function CambiaImagen()
{
    $("img#portada").attr("src","paisaje2.jpg");
}

function VolverImagen()
{
    $("img#portada").attr("src","paisaje1.jpg");
}

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
$("img#bombilla").click(Apagar,Encender);
function Apagar()
{
	imagen.attr("src","apagada.gif");
}

function Encender()
{
	imagen.attr("src","encendida.gif");
}


$(document).scroll(CambiarColor);
function FijarImagen()
{
	if ($(document).scrollTop() > 50) {
      $("body").css("background-color","red");
    }else{
      $("body").css("background-color","inherit");
    }
}


$("#nombre").blur(Vacio);
function Vacio()
{
	if($("#nombre").val()=="")
    {
    	alert("Rellena tu nombre");
    }
}

$("#nombre").keyup();
function Longitud()
{
	let nombre=$("#nombre").val()
	if(nombre.length<5)
    {
    	alert("Al menos 5 caracteres");
    }
    if(nombre.length>15)
    {
    	alert("Maximo 15");
    }
}

$("#enviar").click(Enviar);
function Enviar(evento)
{
   if($("#nombre").val()=="")
   {
    	alert("Rellena tu nombre");
    	//Cancelar el evento de submit
    	evento.preventDefault();
   }
}

$("body").contextmenu(EvitarBotonDerecho);
function EvitarBotonDerecho(evento)
{
	evento.preventDefault();
}


$("a").click(Confirmacion);
function Confirmacion(evento)
{
	if(!confirm("¿Desea salir de la web?"))
	{
		evento.preventDefault();
	}
}

$("body").keyup(Info_tecla);
function Info_tecla(evento)
{
	document.write("Ha pulsado: "+String.fromCharCode(evento.which);
}

$("body").mouse(Info_raton)
function Info_raton(evento){
    document.write("Posicion: ("+evento.pageX+","+evento.pageY+")");
}

// queda prev parent y next

$("#apellidos").blur(Aviso);
function Aviso()
{
	let siguiente=$("apellidos").next();
	siguiente.text("El apellido es obligatorio");
	...
}

function Borrar()
{
	$("#rubbish-icon").parent().remove();
}

function Ocultar()
{
	$("a").prev().hide();
}


//PRIMERA OPCION
$("#im1").click(Imagen1);
function Imagen1()
{
    alert($("#im1").attr("src"));
}

$("#im2").click(Imagen2);
function Imagen2()
{
    alert($("#im2").attr("src"));
}

//Y SI HAY 50 IMAGENES???
        //SEGUNDA OPCION
//Selector que coja un conjunto de imagenes        
$("img").click(Info_img);
function Info_img()
{
    alert($(this).attr("src"));
}

$("a").click(Destino);
function Destino()
{
	alert($(this).attr("href");
}








