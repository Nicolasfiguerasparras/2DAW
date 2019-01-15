$(document).ready(Start);

function Start(){
	$("input[type=button]").first().click(Principio);
    $("input[type=button]").first().click(Final);
}


function Principio(){
  let texto=$("input#texto").value();
  let opcion=$("<option></option>");
  opcion.text(texto);
  $("select#datos").prepend(opcion); 
}


function Final(){
  let texto=$("input#texto").value();
  let opcion=$("<option></option>");
  opcion.text(texto);
  $("select#datos").append(opcion); 
}