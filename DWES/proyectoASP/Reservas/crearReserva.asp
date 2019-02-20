<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Listar reservas</h1>

        <nav>
            <a href="../Clientes/clientes.asp">Clientes</a>
            <a href="../Vehiculos/vehiculos.asp">Vehiculos</a>
            <a href="indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <a href="crearReserva.asp">Introducir reserva</a>
        <a href="listarReservas.asp">Listar reservas</a>
        <a href="buscarReservas.asp">Buscar reservas</a>
        <a href="../index.asp">Volver al inicio</a>

        <br><br>


        <%
            response.write("<form action='crearReserva.asp' method='POST' enctype='multiport/form-data'>")

                response.write("<label for='cliente'>Cliente </label>")
                response.write("<input type='number' name='cliente' id='cliente' required>")
                response.write("<br><br>")

                response.write("<label for='vehiculo'>Vehiculo </label>")
                response.write("<input type='text' name='vehiculo' id='vehiculo' required>")
                response.write("<br><br>")

                response.write("<label for='inicio'>Fecha de inicio </label>")
                response.write("<input type='date' name='inicio' id='inicio' required>")
                response.write("<br><br>")

                response.write("<label for='fin'>Fecha de fin </label>")
                response.write("<input type='date' name='fin' id='fin' required>")
                response.write("<br><br>")

                response.write("<input type='submit' name='Insertar' value='Insertar'>")
                response.write("<input type='reset' name='Borrar' value='Borrar'>")

            response.write("</form><br>")


            cliente = request.form("cliente")
            vehiculo = request.form("vehiculo")
            inicio = request.form("inicio")
            fin = request.form("fin")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            if len(request.form("Insertar")) > 0 then
                insertQuery = "Insert into reservas (cliente, vehiculo, inicio, fin) values ("&cliente&", '"&vehiculo&"', '"&inicio&"', '"&fin&"')"
                set RS = Conn.Execute(insertQuery)
                response.redirect("listarReservas.asp")
            end if

            Conn.Close
        %>
    </body>
</html>