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
            <a href="../Reservas/reservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <a href="crearCliente.asp">Introducir cliente</a>
        <a href="listarCliente.asp">Listar clientes</a>
        <a href='buscarCliente.asp'>Buscar clientes</a>
        <a href="../index.asp">Volver al inicio</a>

        <br><br>

        <%
            cliente = request.querystring("cliente")
            hoy=date()
            response.write(hoy&"<br>")
            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")
            sSQL = "SELECT cl.nombre, re.vehiculo, re.inicio, re.fin, ve.precio FROM cliente cl, vehiculo ve, reservas re WHERE cl.codigo=re.cliente and ve.matricula=re.vehiculo and cl.codigo="&cliente&""
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
                        nombre=RS("NOMBRE")
                        response.write("<td>"&nombre&"</td>")
                        
                        vehi=RS("vehiculo")
                        response.write("<td>"&vehi&"</td>")

                        inicio=RS("inicio")
                        response.write("<td>"&inicio&"</td>")

                        fin=RS("fin")
                        response.write("<td>"&fin&"</td>")

                        precioVehiculo=RS("precio")
                        response.write("<td>"&precioVehiculo&"</td>")

                        if len(fin) < hoy then
                            precioTotal=DateDiff("D", inicio, fin)*precioVehiculo
                            response.write("<td>"&precioTotal&"</td>")
                        end if
                    response.write("</tr>")
                    RS.MoveNext
                loop
            response.write("</table>")

            Conn.Close
        %>
    </body>
</html>