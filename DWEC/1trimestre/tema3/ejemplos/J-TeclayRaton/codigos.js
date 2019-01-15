$("body").keyup(Info_tecla);
function Info_tecla(evento)
{
    document.write("Ha pulsado: "+String.fromCharCode(evento.which);
}

$("body").click(Info_raton)
function Info_raton(evento){
    document.write("Posicion: ("+evento.pageX+","+evento.pageY+")");
}
