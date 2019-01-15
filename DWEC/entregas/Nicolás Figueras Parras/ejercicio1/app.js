function end() {
  let texto=$("input#datos").val();
  if (texto.val().length() != 0 && texto.val().indexOf("", 0)) {
    let opcion=$("<option></option>");
    opcion.text(texto);
    $("select#datos").prepend(opcion); 
  }
}

function beginning() {
  let texto=$("input#datos").val();
  if (texto.val().length() != 0 && texto.val().indexOf("", 0)) {
    let opcion=$("<option></option>");
    opcion.text(texto);
    $("select#datos").append(opcion);
  } 
}