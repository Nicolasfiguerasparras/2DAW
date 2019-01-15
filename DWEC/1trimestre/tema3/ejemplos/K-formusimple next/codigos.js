
$("#apellidos").blur(Aviso);
function Aviso()
{
    let siguiente=$("apellidos").next();
    siguiente.text("El apellido es obligatorio");
    ...
}
