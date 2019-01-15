
$("img#portada").mouseenter(CambiaImagen);
$("img#portada").mouseleave(VolverImagen);
//Usando hover
$("#img#portada").hover(CambiaImagen,VolverImagen);

function CambiaImagen()
{
    $("img#portada").attr("src","paisaje2.jpg");
}

function VolverImagen()
{
    $("img#portada").attr("src","paisaje1.jpg");
}