$(document).ready(Start);

function Start()
{
	$("td").click(Cambiar);

}

function Cambiar()
{
	let numero;
	//alert($(this).css("background-color"));
	if($(this).css("background-color")=="rgb(255, 0, 0)"){

         numero=parseInt($(this).text());
         $(this).text(numero+1);

	}else{

	 	$(this).css("background-color","red");
	}
}

