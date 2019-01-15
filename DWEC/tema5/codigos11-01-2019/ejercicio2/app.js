$(document).ready(Start);

function Start(){
	$("ul#lista li").contextmenu(borrar);

    let imagen=$("<img>");
    imagen.attr("src","https://assets.trome.pe/files/ec_article_multimedia_gallery/uploads/2018/04/17/5ad609d27c1a7.jpeg");
    imagen.width(200);
	$("#contenido").after(imagen);


	$("input[type=button]").eq(0).click(añadirPrincipio);
	$("input[type=button]").eq(1).click(añadirFinal);
	$("input[type=button]").eq(2).click(borrarPrincipio);
	$("input[type=button]").eq(3).click(borrarFinal);
	$("input[type=button]").eq(4).click(añadirPosicion);
	$("input[type=button]").eq(5).click(borrarPosicion);

}

function añadirPosicion(){
    let datos=$("#datos").val();
	let posicion=$("#posicion").val()-1;
	let tamaño=$("ul#lista li").length;

	if(datos!="" && posicion>=0 && posicion<tamaño){
	  let nuevo_li=$("<li></li>");
	  nuevo_li.text(datos);
      nuevo_li.addClass("list-group-item list-group-item-action");
      nuevo_li.contextmenu(borrar);

      $("ul#lista li").eq(posicion).before(nuevo_li);
      $("#datos").val("");
      $("#posicion").val("");

	}else{
		alert("Faltan datos o son erroneos");
	}
}


function borrarPosicion(){
	let posicion=$("#posicion").val()-1;
	let tamaño=$("ul#lista li").length;

    if(posicion>=0 && posicion<tamaño){	
    	$("ul#lista li").eq(posicion).remove();
    	$("#posicion").val("");
    }else{
    	alert("La posicion no existe");
    }
}





function borrarFinal(){
	// let primero=$("ul#lista li").last();
	// primero.remove();
   if($("ul#lista li").length==0){
   	  alert("No hay nada que borrar");
   }else{
	$("ul#lista li").last().remove();
   }
}


function borrarPrincipio(){
	// let primero=$("ul#lista li").first();
	// primero.remove();
    if($("ul#lista li").length==0){
   	  alert("No hay nada que borrar");
    }else{
	  $("ul#lista li").first().remove();
	}
}


function añadirPrincipio()
{
	let datos=$("#datos").val();
	let lista=$("ul#lista");

    if(datos!=""){
      let nuevo_li=$("<li></li>");
	  nuevo_li.text(datos);
      nuevo_li.addClass("list-group-item list-group-item-action");
      nuevo_li.contextmenu(borrar);
      lista.prepend(nuevo_li);	
      $("#datos").val("");
    }else{
      alert("Los datos están vacios");	
    }
	
}

function añadirFinal()
{
	let datos=$("#datos").val();
	let lista=$("ul#lista");

    if(datos!=""){
      let nuevo_li=$("<li></li>");
	  nuevo_li.text(datos);
      nuevo_li.addClass("list-group-item list-group-item-action");
      nuevo_li.contextmenu(borrar);
      lista.append(nuevo_li);
      $("#datos").val("");	
    }else{
      alert("Los datos están vacios");	
    }
	$("#datos").val("");
}

function borrar(evento){
	evento.preventDefault();
	$(this).remove();
	//$(this).css("background-color","pink"); O LO QUE QUERAMOS
}





