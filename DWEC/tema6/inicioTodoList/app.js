$(document).ready(Inicio);

function Inicio(){
	// Al hacer click en el input type submit, ejecuta la función
	$("input[type=submit]").click(grabarTarea);
}

function grabarTarea(evento){
	evento.preventDefault(); // Prevenimos que el botón recarge la página (función por defecto)

	//--Recogemos los valores introducidos en variables--//
	let titulo=$("#titulo").val();
	let descripcion=$("#descripcion").val();
	let fecha=$("#fecha").val();
	//--/Recogemos los valores introducidos en variables--//

	//--Crear variables nuevas--//
	let celda_titulo,celda_descripcion,celda_fecha,celda_accion;
	let boton_borrar;
	//--Crear variables nuevas--//

	// En el caso de que todos los campos estén rellenos...
	if(titulo != "" && descripcion != "" && fecha != ""){
		celda_titulo=$("<td>"+titulo+"</td>");
		celda_descripcion=$("<td>"+descripcion+"</td>");
		celda_fecha=$("<td>"+fecha+"</td>");
		boton_borrar=$("<a></a>");
		boton_borrar.text("Eliminar");
		boton_borrar.addClass("btn btn-danger");
		celda_accion=$("<td></td>");

		fila=$("<tr></tr>");
		celda_accion.append(boton_borrar);
		fila.append(celda_titulo)
			.append(celda_descripcion)
			.append(celda_fecha)
			.append(celda_accion);
		$("#lista_tareas").append(fila);


	}else{
		alert("Faltan datos en la tarea");
	}
}