$(document).ready(Start);
function Start(){
	let contenido=$("div#contenido");

	let lista=$("<ul></ul>");

	lista.addClass("list-group");
    
    contenido.append(lista);

	let elemento1=$("<li></li>");
	elemento1.text("BMW");
	elemento1.addClass("list-group-item");

	elemento1.click(Borrador);
	elemento1.mouseenter(Colorear);

	let elemento2=$("<li></li>");
	elemento2.text("Seat");
	elemento2.addClass("list-group-item");

	elemento2.click(Borrador);
    elemento2.mouseenter(Colorear);
	
	let elemento3=$("<li></li>");
	elemento3.text("Peugeot");
	elemento3.addClass("list-group-item");

	elemento3.click(Borrador);
	elemento3.mouseenter(Colorear);

	let elemento4=$("<li></li>");
	elemento4.text("Volkswagen");
    elemento4.addClass("list-group-item");

    elemento4.click(Borrador);
    elemento4.mouseenter(Colorear);

	lista.append(elemento1)
		 .append(elemento2)
		 .append(elemento3)
		 .append(elemento4);

    
    

//---------------------------------------------------------------
    let select=$("<select></select>");
    select.attr("name","colores");
    select.addClass("form-control");
    select.addClass("my-3");

    let valor1=$("<option></option>");
    valor1.text("marron");
 	valor1.attr("value","brown");


    let valor2=$("<option></option>");
    valor2.text("rosa");
    valor1.attr("value","pink");

    let valor3=$("<option></option>");
    valor3.text("verde");
    valor1.attr("value","green");

	let valor4=$("<option></option>");
    valor4.text("azul");
    valor1.attr("value","blue");

    select.append(valor1)
    	  .append(valor2)
    	  .append(valor3)
          .append(valor4);

    contenido.append(select);

}

function Borrador()
{
	$(this).remove();
}

function Colorear()
{
	$(this).addClass("bg-danger");
}