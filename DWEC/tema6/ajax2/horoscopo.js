$(document).ready(Inicio_Ajax);


function Inicio_Ajax()
{
   $("#menu a").click(verHoroscopo);
}

function cargando(){
  $("#cargando").show();
}

function finCargando(){
  $("#cargando").hide();
}

function incrustarDatos(datos)
{
   alert(datos);
}

function verHoroscopo(evento)
{
   let enlace=$(this).attr("href");
   evento.preventDefault();
   $.ajax({
           url:enlace,
           type:"get",
           success: incrustarDatos,
           beforeSend: cargando,
           complete: finCargando,
           dataType:"json"
          });
}

