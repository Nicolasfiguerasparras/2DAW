$("#nombre").blur(Vacio);
function Vacio()
{
    if($("#nombre").val()=="")
    {
        alert("Rellena tu nombre");
    }
}

$("#nombre").keyup();
function Longitud()
{
    let nombre=$("#nombre").val()
    if(nombre.length<5)
    {
        alert("Al menos 5 caracteres");
    }
    if(nombre.length>15)
    {
        alert("Maximo 15");
    }
}

$("#enviar").click(Enviar);
function Enviar(evento)
{
   if($("#nombre").val()=="")
   {
        alert("Rellena tu nombre");
        //Cancelar el evento de submit
        evento.preventDefault();
   }
}
