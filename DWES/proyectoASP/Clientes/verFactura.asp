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
        <title>Ver factura</title>
    </head>
    <body>
        <h1>Ver factura</h1>

        <nav>
            <a href="clientes.asp">Clientes</a>
            <a href="../Vehiculos/vehiculos.asp">Vehiculos</a>
            <a href="../Reservas/indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <%
            if Session("username") = "admin" then
                response.write("<a href='crearCliente.asp'>Introducir cliente</a>")
                response.write("<a href='listarCliente.asp'>Listar clientes</a>")
                response.write("<a href='buscarCliente.asp'>Buscar clientes</a>")
            end if
        %>
        
        <a href="../index.asp">Volver al inicio</a>
        

        <br><br>

        <%
            clientCode = request.querystring("clientCode")
            today=date()
            response.write(today&"<br>")
            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")
            sSQL = "SELECT cl.nombre, re.vehiculo, re.inicio, re.fin, ve.precio FROM cliente cl, vehiculo ve, reservas re WHERE cl.codigo=re.cliente and ve.matricula=re.vehiculo and cl.codigo="&clientCode&""
            set RS = Conn.Execute(sSQL)

            response.write("<table border=1>")
                response.write("<tr>")
                    response.write("<td>Nombre</td>")
                    response.write("<td>Matricula del vehiculo</td>")
                    response.write("<td>Fecha de inicio</td>")
                    response.write("<td>Fecha de fin</td>")
                    response.write("<td>Precio</td>")
                    response.write("<td>Precio total</td>")
                response.write("</tr>")
                do while not RS.Eof 
                    response.write("<tr>")
                        name=RS("nombre")
                        response.write("<td>"&name&"</td>")
                        
                        vehicle=RS("vehiculo")
                        response.write("<td>"&vehicle&"</td>")

                        start=RS("inicio")
                        response.write("<td>"&start&"</td>")

                        endNumber=RS("fin")
                        response.write("<td>"&endNumber&"</td>")

                        vehiclePrice=RS("precio")
                        response.write("<td>"&vehiclePrice&"</td>")

                        if len(endNumber) < today then
                            totalPrice=DateDiff("D", start, endNumber)*vehiclePrice
                            response.write("<td>"&totalPrice&"</td>")
                        end if
                    response.write("</tr>")
                    RS.MoveNext
                loop
            response.write("</table>")

            Conn.Close
        %>
    </body>
</html>