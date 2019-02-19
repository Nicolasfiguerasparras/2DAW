<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Modificar vehículo</title>
    </head>
    <body>
        <h1>Modificar vehículo</h1>

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
            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            matricula = request.querystring("matricula")
            modelo = request.querystring("modelo")
            marca = request.querystring("marca")
            puertas = request.querystring("puertas")
            categoria = request.querystring("categoria")
            precio = request.querystring("precio")

            
            response.write("<form action='modificarVehiculo.asp' method='POST' enctype='multiport/form-data'>")
                response.write("<label for='matricula'>Matrícula </label>")
                response.write("<input type='text' name='matricula' id='matricula' value='"&matricula&"' required>")
                response.write("<br><br>")

                response.write("<label for='marca'>Marca </label>")
                response.write("<input type='text' name='marca' id='marca' value='"&marca&"' required>")
                response.write("<br><br>")

                response.write("<label for='modelo'>Modelo </label>")
                response.write("<input type='text' name='modelo' id='modelo' value='"&modelo&"' required>")
                response.write("<br><br>")

                response.write("<label for='n_puertas'>Número de puertas </label>")
                response.write("<input type='text' name='n_puertas' id='n_puertas' value='"&puertas&"' required>")
                response.write("<br><br>")

                response.write("<label for='categoria'>Categoría </label>")
                response.write("<input type='text' name='categoria' id='categoria' value='"&categoria&"' placeholder='categoria' required>")
                response.write("<br><br>")

                response.write("<label for='precio'>Precio </label>")
                response.write("<input type='text' name='precio' id='precio' value='"&precio&"' placeholder='precio' required>")
                response.write("<br><br>")

                response.write("<input type='submit' name='modificate' value='Modificar'>")
                response.write("<input type='reset' name='Borrar' value='Borrar'>")

            response.write("</form><br>")


            matriculaMod=Request.Form("matricula")
            modeloMod=Request.Form("modelo")
            marcaMod=Request.Form("marca")
            puertasMod=Request.Form("n_puertas")
            categoriaMod=Request.Form("categoria")
            precioMod=Request.Form("precio")


            if len(Request.form("modificate")) > 0 then
                insertQuery = "UPDATE vehiculo SET matricula='"&matriculaMod&"', modelo='"&modeloMod&"', marca='"&marcaMod&"',n_puertas='"&puertasMod&"',categoria='"&categoriaMod&"', precio='"&precioMod&"' WHERE matricula='"&matriculaMod&"'"
                set RS=Conn.Execute(insertQuery)
                response.redirect("listarVehiculo.asp")
            end if
            
            Conn.Close
        %>
    </body>
</html>