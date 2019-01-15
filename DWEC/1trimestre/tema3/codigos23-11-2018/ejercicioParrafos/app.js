$(document).ready(Start);

function Start()
{
	//$("p").click(Ocultar);
	$("input[type=button]").click(Control);

}

function Control()
{
    //Parrafo hermano del boton
	//$(this).next().hide();

    let parrafo_hermano=$(this).next();
    // if(parrafo_hermano.css("display")=="none")
    // {
    //     parrafo_hermano.fadeIn();
    //     $(this).val("ocultar");
    // }else{
    //     parrafo_hermano.fadeOut();
    //     $(this).val("mostrar");
    // }

    if(parrafo_hermano.css("visibility")=="hidden")
    {
        parrafo_hermano.css("visibility","visible");
        $(this).val("ocultar");
    }else{
        parrafo_hermano.css("visibility","hidden");
        $(this).val("mostrar");
    }
}




function Ocultar()
{
	$(this).hide();
}


