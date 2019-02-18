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
            <a href="../Reservas/reservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <a href="crearCliente.asp">Introducir vehículo</a>
        <a href="listarVehiculo.asp">Listar vehículo</a>
        <a href="buscarCliente.asp">Buscar vehículo</a>
        <a href="../index.asp">Volver al inicio</a>
    </body>
</html>