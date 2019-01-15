$(document).ready(Start);

function Start(){
	$("ul#lista").contextmenu(borrar);

	$("input[type=button]").eq(0).click(AñadirPrincipio);
	$("input[type=button]").eq(1).click(AñadirFinal);
	$("input[type=button]").eq(2).click(borrarPrincipio);
	$("input[type=button]").eq(3).click(borrarFinal);
	$("input[type=button]").eq(5).click(borrarPosicion);	
	$("input[type=button]").eq(4).click(añadirPosicion);	
}


function AñadirPrincipio(){
	// Con val decimos que no queremos el objeto, si no el contenido del mismo.
	let datos=$("#datos").val();
	let lista=$("ul#lista").eq(1);


	if(datos!=""){
		// Creamos la fila de la ul que se escribirá en la web
		let nuevo_li=$("<li></li>");
		// Meteremos el texto que hayamos recogido de la barra
		nuevo_li.text(datos);
		// Le aplicamossla clase de booststrap
		nuevo_li.addClass("list-group-item list-group-item-action");
		nuevo_li.contextmenu(borrar);
		// Añadimos el texto a la lista
		lista.prepend(nuevo_li);
	}else{
		alert("Los datos están vacíos");
	}
	// Esto hace que al escribir en el campo y enviar, éste se quede vacío de nuevo
	$("datos").val();
}



function AñadirFinal(){
	// Con val decimos que no queremos el objeto, si no el contenido del mismo.
	let datos=$("#datos").val();
	let lista=$("ul#lista").eq(1);


	if(datos!=""){
		// Creamos la fila de la ul que se escribirá en la web
		let nuevo_li=$("<li></li>");
		// Meteremos el texto que hayamos recogido de la barra
		nuevo_li.text(datos);
		// Le aplicamossla clase de booststrap
		nuevo_li.addClass("list-group-item list-group-item-action");
		nuevo_li.contextmenu(borrar);
		// Añadimos el texto a la lista
		lista.append(nuevo_li);
	}else{
		alert("Los datos están vacíos");
	}
	// Esto hace que al escribir en el campo y enviar, éste se quede vacío de nuevo
	$("datos").val();
}



// Asi borramos el primer elemento li del ul, si la lista está vacía nos lo indicará
function borrarPrincipio(){
	if($("ul#lista li").length==0){
		alert("no hay nada que borrar");
	}else{
		$("ul#lista li").first().remove();
	}
} 


// Asi borramos el último elemento li del ul, si la lista está vacía nos lo indicará
function borrarFinal(){
	if($("ul#lista li").length==0){
		alert("no hay nada que borrar");
	}else{
		$("ul#lista li").last().remove();
	}
} 

function borrarPosicion(){
	// Esto guarda la posición restando 1 ya que siempre se empieza por 0, no por 1.
	let posicion=$("#posicion").val()-1;
	let tamaño=$("ul#lista li").length;

	if(posicion >= 0 && posicion < tamaño){
		$("ul#lista li").eq(posicion).remove();
		$("#posicion").val("");
	}else{
		alert("La posicion no existe");
	}
}


function añadirPosicion(){
	let datos=$("#datos").val();
	let posicion=$("#posicion").val()-1;
	let tamaño=$("ul#lista li").length;

	if(datos != "" && posicion >= 0 && posicion < tamaño){
		let nuevo_li=$("<li></li>");
		nuevo_li.text(datos);
		nuevo_li.addClass("list-group-item list-group-item-action");
		nuevo_li.contextmenu(borrar);
		
		
		$("ul#lista li").eq(posicion).remove();
		$("#posicion").val("");
	}else{
		alert("La posicion no existe");
	}
}




// Esta función permite eliminar el elemento li del ul al hacer click derecho
function borrar(evento){
	evento.preventDefault();
	$(this).remove();
	//
}