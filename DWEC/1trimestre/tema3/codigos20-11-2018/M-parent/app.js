$(document).ready(Start);

function Start()
{
   $("input[type=button]").eq(0).click(Aumentar);
   $("input[type=button]").eq(1).click(Disminuir);
}

function Aumentar()
{
    $("input[type=button]").parent().css("font-size","+=1");
}

function Disminuir()
{
    $("input[type=button]").parent().css("font-size","-=1");
}
