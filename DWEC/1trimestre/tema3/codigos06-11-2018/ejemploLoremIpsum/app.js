$(document).ready(Inicio);

function Inicio()
{
    let num_parrafos=$("p").length;
    let num_enlaces=$("a").length;

    alert("Resumen: "+num_parrafos+" parrafos y "
    	   +num_enlaces+" enlaces");

    let primero=$("a").first();
    let ultimo=$("a").last();

    alert(primero.attr("href"));
    alert(ultimo.attr("href"));
 

}
