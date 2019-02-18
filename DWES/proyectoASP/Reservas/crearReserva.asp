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
            response.write("<h3>Inserta una reserva nueva</h3>")
            response.write("<form action='nuevaReserva.asp' method='POST' enctype='multiport/form-data'> ")
            response.write("<label for='cliente'>cliente</label><br>")
                response.write("<input type='text' name='cliente' placeholder='cliente' id='cliente' required>")
            response.write("<br/><br/>")

            response.write("<label for='vehiculo'>vehiculo </label><br>")
                response.write("<input type='text' name='vehiculo' placeholder='vehiculo' id='vehiculo' required>")
            response.write("<br/><br/>")

            response.write("<label for='inicio'>inicio</label><br>")
                response.write("<input type='date' name='inicio' id='inicio' placeholder='inicio' required>")
            response.write("<br/><br/>")

            response.write("<label for='fin'>Fin</label><br>")
                response.write("<input type='date' name='fin' placeholder='fin' id='fin' required>")
            response.write("<br/><br/>")

            response.write("<input type='submit' name='Insertar' value='Insertar'>")
                response.write("<input type='reset' name='Borrar' value='Borrar'>")
            response.write("</form><br>")


            cliente = request.form("cliente")
            vehiculo = request.form("vehiculo")
            inicio = request.form("inicio")
            fin = request.form("fin")
            insertar = request.form("Insertar")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            IF(len(insertar)>0)then
            sSQL = "Insert into reservas (cliente, vehiculo, inicio, fin) values ('"&cliente&"', '"&vehiculo&"', '"&inicio&"', '"&fin&"')"
            set RS = Conn.Execute(sSQL)
            END if

            Conn.Close
        %>
    </body>
</html>