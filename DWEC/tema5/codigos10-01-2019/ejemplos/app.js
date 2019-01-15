$(document).ready(Start);

function Start()
{
	let div_contenido=$("div#contenido");

	let nuevo_h2=$("<h2></h2>");
	nuevo_h2.text("Cualquiera según Justo");
	nuevo_h2.css("color","aqua");

	div_contenido.append(nuevo_h2);
//---------------------------------------------------
	let nuevo_select=$("<select></select>");	
	nuevo_select.attr("name","dia");
     
    div_contenido.append(nuevo_select); 

    let opcion;
   
    for(let i=1;i<=30;i++){
	    opcion=$("<option></option>");
	    opcion.text(i);
	    opcion.val(i);
	    nuevo_select.append(opcion);
	}

    







}