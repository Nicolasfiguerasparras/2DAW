
$("body").contextmenu(EvitarBotonDerecho);
function EvitarBotonDerecho(evento)
{
    evento.preventDefault();
}


$("a").click(Confirmacion);
function Confirmacion(evento)
{
    if(!confirm("¿Desea salir de la web?"))
    {
        evento.preventDefault();
    }
}