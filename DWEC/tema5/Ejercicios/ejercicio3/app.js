$(document).ready(Start);

function Start(){
	$("#crear").click(Crear);
}

function Crear(){
	// El texto que introduce el usuario
	let datos=$('#datos').val();

	// Definimos variables
	let partes;
	let lista_ordenada;
	let elemento;
	let select_opt;
	let table;

	// Si los datos introducidos no están vacíos
	if(datos!=""){
		// CREACIÓN DE LA LISTA

		// Dividimos la cadena por comas
		partes=datos.split(",");
		// Creamos la lista
		lista_ordenada=$("<ol></ol>");
		// Por cada palabra se va colocando en la lista
		for(let i = 0; i < partes.length; i++){
			// Se crea la etiqueta 
			elemento=$("<li></li>");
			// Se le añade texto a la etiqueta
			elemento.text(partes[i]);
			// Se implementa la etiqueta dentro de la lista
			lista_ordenada.append(elemento);
		}
		// Metemos el div en el que vamos a escribir en una etiqueta
		let primer_div=$("div.card-body").first();
		// Dejamos vacío el div porque en el index hay cosas escritas que no queremos que salgan
		primer_div.html("");
		// Añadimos la lista al div
		primer_div.append(lista_ordenada);

//		--------------------------------------------------------------------
		// CREACIÓN DEL SELECT

		select_opt=$("<select></select>");
		// Por cada palabra se va colocando en la lista
		for(let i = 0; i < partes.length; i++){
			// Se crea la etiqueta 
			elemento=$("<option></option>");
			// Se le añade texto a la etiqueta
			elemento.text(partes[i]);
			// Se implementa la etiqueta dentro de la lista
			select_opt.append(elemento);
		}
		// Metemos el div en el que vamos a escribir en una etiqueta
		let segundo_div=$("div.card-body").eq(1);
		// Dejamos vacío el div porque en el index hay cosas escritas que no queremos que salgan
		segundo_div.html("");
		// Añadimos las opciones al div
		segundo_div.append(select_opt);

//		--------------------------------------------------------------------
		// CREACIÓN DE LA TABLA

		table=$("<table border='1'></table>");
		// Por cada palabra se va colocando en la lista
		for(let i = 0; i < partes.length; i++){
			// Se crea la etiqueta 
			elemento=$("<tr></tr>");
			// Se le añade texto a la etiqueta
			elemento.text(partes[i]);
			// Se implementa la etiqueta dentro de la lista
			table.append(elemento);
		}
		// Metemos el div en el que vamos a escribir en una etiqueta
		let tercer_div=$("div.card-body").eq(2);
		// Dejamos vacío el div porque en el index hay cosas escritas que no queremos que salgan
		tercer_div.html("");
		// Añadimos las opciones al div
		tercer_div.append(table);
	}else{
		alert("Debes introducir datos");
	}
}