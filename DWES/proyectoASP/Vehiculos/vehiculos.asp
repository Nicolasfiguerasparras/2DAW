<%
    sessionCookie = Request.Cookies("openSession")
    if not sessionCookie = "" then
        Session("username") = sessionCookie
    end if
%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vehículos</title>
    </head>
    <body>
        <h1>Vehículos</h1>

        <nav>
            <a href="../Clientes/clientes.asp">Clientes</a>
            <a href="vehiculos.asp">Vehiculos</a>
            <a href="../Reservas/indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <%
            if Session("username") = "admin" then
                response.write("<a href='crearVehiculo.asp'>Introducir vehículo</a> ")
                response.write("<a href='listarVehiculo.asp'>Listar vehículo</a> ")
                response.write("<a href='buscarVehiculo.asp'>Buscar vehículo</a>")
            else
                response.write("<a href='listarVehiculo.asp'>Listar vehículo</a> ")
            end if
        %>
        <a href="../index.asp">Volver al inicio</a>
    </body>
</html>