$(document).ready(Start);

function Start(){
	
	let boton1=$("input[type=button]").eq(0);
	let boton2=$("input[type=button]").eq(1);
    boton1.click(Principio);
    boton2.click(Final);

}

function Principio()
{
	let datos=$("input#datos").val();
	let select=$("select#seleccion");
	let valor=$("<option></option>");
    valor.text(datos);
    select.prepend(valor);
}

function Final()
{
	let datos=$("input#datos").val();
	let select=$("select#seleccion");
	let valor=$("<option></option>");
    valor.text(datos);
    select.append(valor);
}