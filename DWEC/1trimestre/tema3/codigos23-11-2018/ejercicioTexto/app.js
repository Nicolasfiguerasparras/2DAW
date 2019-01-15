$(document).ready(Start);

function Start()
{
   // $("input[type=button][value=+]").click(AumentarLetra);
   // $("input[type=button][value=-]").click(DisminuirLetra);
   
   $("input.aumentar").click(AumentarLetra);
   $("input.disminuir").click(DisminuirLetra);
}
function AumentarLetra()
{
   $(this).parent().css("font-size","+=2");

   $(this).parent().css("font-size")   
}

function DisminuirLetra()
{
   $(this).parent().css("font-size","-=2");
}




