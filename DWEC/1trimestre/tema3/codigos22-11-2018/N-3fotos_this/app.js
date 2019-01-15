$(document).ready(Start);

function Start()
{
	// let imagenes=$("img");
	// imagenes.eq(0).click(Primera);
	// imagenes.eq(1).click(Segunda);
	// imagenes.eq(2).click(Tercera);

	$("img").click(Mostrar);
}


function Mostrar()
{
	//alert($(this).attr("src"));
	$(this).css("border","2px dashed red");
}





// function Primera()
// {
// 	alert($("img").eq(0).attr("src"));
// }

// function Segunda()
// {
// 	alert($("img").eq(1).attr("src"));
// }

// function Tercera()
// {
// 	alert($("img").eq(2).attr("src"));
// }