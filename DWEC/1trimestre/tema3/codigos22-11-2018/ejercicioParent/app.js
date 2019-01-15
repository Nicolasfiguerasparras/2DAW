$(document).ready(Start);

function Start()
{
	$("select").change(Cambiar);
}

function Cambiar()
{
    let color=$(this).val();
	$(this).parent().css("background-color",color);
}
