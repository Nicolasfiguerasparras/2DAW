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
        <title>Listar vehículos</title>
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

            <br><br>

            <%
                Set Conn = Server.CreateObject("ADODB.Connection")
                Conn.Open("proyecto")
                sSQL = "select * from Vehiculo"
                set RS = Conn.Execute(sSQL)
                
                response.write("<table border=1>")
                    response.write("<tr>")
                        response.write("<td>Matrícula</td>")
                        response.write("<td>Modelo</td>")
                        response.write("<td>Marca</td>")
                        response.write("<td>Nº Puertas</td>")
                        response.write("<td>Categoría</td>")
                        response.write("<td>Precio/día</td>")
                    response.write("</tr>")
                    Do While Not rs.Eof
                        response.write("<tr>")
                            matricula = RS("matricula")
                            response.write("<td>"&matricula&"</td>")
                            model = RS("modelo")
                            response.write("<td>"&model&"</td>")
                            marca = RS("marca")
                            response.write("<td>"&marca&"</td>")
                            puertas = RS("n_puertas")
                            response.write("<td>"&puertas&"</td>")
                            categoria = RS("categoria")
                            response.write("<td>"&categoria&"</td>")
                            precio = RS("precio")
                            response.write("<td>"&precio&"</td>")
                            
                            if Session("username") = "admin" then
                                response.write("<td><a href='modificarVehiculo.asp?matricula="&matricula&"&modelo="&model&"&marca="&marca&"&puertas="&puertas&"&categoria="&categoria&"&precio="&precio&"'>Modificar</a></td>")
                            end if
                        response.write("</tr>")
                        rs.MoveNext
                    Loop
                response.write("</table>")

                Conn.Close
            %>
    </body>
</html>