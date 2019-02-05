$(document).ready(Inicio);


function Inicio()
{
	$("input[type=submit]").click(grabarTarea);
}

function grabarTarea(evento){
	evento.preventDefault();

	let titulo=$("#titulo").val();
	let descripcion=$("#descripcion").val();
	let fecha=$("#fecha").val();
	let fila,celda_titulo,celda_descripcion,celda_fecha;
	let celda_accion,boton_borrar;


	if(titulo!="" && descripcion!="" && fecha!=""){
		celda_titulo=$("<td>"+titulo+"</td>");
		celda_descripcion=$("<td>"+descripcion+"</td>");
		celda_fecha=$("<td>"+fecha+"</td>");
		boton_borrar=$("<a></a>");
		boton_borrar.text("Eliminar");
		boton_borrar.addClass("btn btn-danger");
		boton_borrar.attr("href","#");
		boton_borrar.click(borrarTarea);		
		boton_borrar.on("click",borrarTarea);

		celda_accion=$("<td></td>");
		celda_accion.append(boton_borrar);

		fila=$("<tr></tr>");
		fila.append(celda_titulo)
		    .append(celda_descripcion)
		    .append(celda_fecha)
		    .append(celda_accion);

		$("#lista_tareas").append(fila);

		 $("#todo-form").trigger("reset");
		//No borrar los textarea
		//$("#todo-form input").val("");

	}else{
		alert("Faltan datos de la tarea");
	}
}

function borrarTarea(evento){
    $(this).parent().parent().remove();
}





