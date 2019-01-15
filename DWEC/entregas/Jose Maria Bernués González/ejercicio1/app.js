$(document).ready(Start);

function Start(){
	$("input[type=button]").first().click(Principio);
    $("input[type=button]").last().click(Final);
}


function Principio(){
  // Aqui asignamos una variable al input de texto. El val sirve para que no lo detecte como objeto, si no para que recoja lo que escribamos
  let texto=$("input#texto").val();
  // Comprobamos que los parámetros de texto recogidos cumplen con las especificaciones
  if (texto.val().length() != 0 && texto.val().indexOf("", 0)) {
     // Escribimos las etiquetas que se imprimiran en el index, donde despues irá el texto seleccinado arriba
    let opcion=$("<option></option>");
    opcion.text(texto);
    $("select#datos").prepend(opcion); 
  }
 
}


function Final(){
  let texto=$("input#texto").val();
  if (texto.val().length() != 0 && texto.val().indexOf("", 0)) {
    let opcion=$("<option></option>");
    opcion.text(texto);
    $("select#datos").append(opcion);
  }   
}