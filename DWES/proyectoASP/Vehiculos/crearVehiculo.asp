<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Insertar vehículo</title>
    </head>
    <body>
        <h1>Introducir vehículo</h1>

        <nav>
            <a href="../Clientes/clientes.asp">Clientes</a>
            <a href="vehiculos.asp">Vehiculos</a>
            <a href="../Reservas/indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>
    
        <br><br>
    
        <a href="crearVehiculo.asp">Introducir vehículo</a>
        <a href="listarVehiculo.asp">Listar vehículo</a>
        <a href="buscarVehiculo.asp">Buscar vehículo</a>
        <a href="../index.asp">Volver al inicio</a>
    
        <br><br>

        <%
            response.write("<form action='nuevoVehiculo.asp' method='POST' enctype='multiport/form-data'>")

                response.write("<label for='matricula'>Matrícula </label>")
                response.write("<input type='text' name='matricula' id='matricula' required>")
                response.write("<br><br>")

                response.write("<label for='modelo'>Modelo </label>")
                response.write("<input type='text' name='modelo' id='modelo' required>")
                response.write("<br><br>")

                response.write("<label for='marca'>Marca </label>")
                response.write("<input type='text' name='marca' id='marca' required>")
                response.write("<br><br>")

                response.write("<label for='n_puertas'>Número de puertas </label>")
                response.write("<input type='text' name='n_puertas' id='n_puertas' required>")
                response.write("<br><br>")

                response.write("<label for='categoria'>Categorías </label>")
                response.write("<input type='text' name='categoria' id='categoria' required>")
                response.write("<br><br>")

                response.write("<label for='precio'>Precio </label>")
                response.write("<input type='text' name='precio' id='precio' required>")
                response.write("<br><br>")

                response.write("<input type='submit' name='Insertar' value='Insertar'>")
                response.write("<input type='reset' name='Borrar' value='Borrar'>")
                
            response.write("</form><br>")


            matricula = request.form("matricula")
            modelo = request.form("modelo")
            marca = request.form("marca")
            n_puertas = request.form("n_puertas")
            categoria = request.form("categoria")
            precio = request.form("precio")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            if len(request.form("Insertar")) > 0 then
                insertQuery = "Insert into vehiculo (matricula, modelo, marca, n_puertas, categoria, precio) values ('"&matricula&"', '"&modelo&"', '"&marca&"', '"&n_puertas&"', '"&categoria&"', '"&precio&"')"
                set RS = Conn.Execute(insertQuery)
                response.redirect("listarVehiculos.asp")
            end if
                    
            Conn.Close
        %>
    </body>
</html>