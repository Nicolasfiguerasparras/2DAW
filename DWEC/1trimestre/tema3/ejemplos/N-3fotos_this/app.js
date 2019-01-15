
// queda prev parent y next




//PRIMERA OPCION
$("#im1").click(Imagen1);
function Imagen1()
{
    alert($("#im1").attr("src"));
}

$("#im2").click(Imagen2);
function Imagen2()
{
    alert($("#im2").attr("src"));
}


$("img").click(Info_img);
function Info_img()
{
    alert($(this).attr("src"));
}

$("a").click(Destino);
function Destino()
{
    alert($(this).attr("href");
}



