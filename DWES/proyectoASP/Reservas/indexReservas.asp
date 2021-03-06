<%
    sessionCookie = Request.Cookies("openSession")
    if not sessionCookie = "" then
        Session("username") = sessionCookie
    elseif Session("username") = "" then
        response.redirect("../login.html")
    end if
%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Reservas</title>
    </head>
    <body>
        <h1>Reservas</h1>

        <nav>
            <a href="../Clientes/clientes.asp">Clientes</a>
            <a href="../Vehiculos/vehiculos.asp">Vehiculos</a>
            <a href="indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>
    
        <br><br>

        <%
            if Session("username") = "admin" then
                response.write("<a href='crearReserva.asp'>Introducir reserva</a> ")
            end if
        %>
        <a href="listarReservas.asp">Listar reservas</a>
        <a href="buscarReservas.asp">Buscar reservas</a>
        <a href="../index.asp">Volver al inicio</a>
    </body>
</html>