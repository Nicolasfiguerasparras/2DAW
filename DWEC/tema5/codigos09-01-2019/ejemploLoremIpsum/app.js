
$(document).ready(Start);

function Borrador()
{
      $(this).remove();
}

function Start()
{
      //document.write("<h2>Holaaaaa</h2>"); NO NOS SIRVE
//    $("a").remove();

//    let parrafos=$("p");

//    parrafos.remove();

      //$("input#boton").click(Borrador);
 //    $("input[type=button]").click(Borrador);
      // $(".articulo h2").remove();

      // $("img").click(Borrador);


      let nuevo_parrafo=$("<p>Esto es un parrafo nuevo</p>");
      let nuevo_h2=$("<h2>Esto es un nuevo titulo 2</h2>");
      let nueva_imagen=$("<img>");
      let nuevo_enlace=$("<a></a>");

      $("img").click(Borrador);

      nuevo_enlace.text("enlace nuevo que va a algún sitio");
      nuevo_enlace.attr("href","http://www.google.es");
      
      nueva_imagen.attr("src","encendida.gif");
      nueva_imagen.click(Borrador);

      // $("body").append(nuevo_parrafo);
      // $("body").append(nuevo_h2);

      // $("body").prepend(nuevo_parrafo);
      // $("body").prepend(nuevo_h2);
      // $("body").prepend(nueva_imagen);
      // $("body").append(nuevo_enlace);

      nuevo_enlace.css("font-size","2em")
      			  .css("text-decoration","none")
      			  .css("background-color","aqua");
      
      nuevo_articulo=$("<div></div>");
      nuevo_articulo.addClass("articulo");
      nuevo_articulo.append(nuevo_h2)
      				.append(nueva_imagen)
      				.append(nuevo_parrafo).
      				append(nuevo_enlace);

      $("div#principal").append(nuevo_articulo);

      


      //let copia_articulo=nuevo_articulo.clone();

      //nuevo_articulo.remove();
      //$("div#publicidad").append(copia_articulo);
	  //$("div#principal").append(copia_articulo);      

}

