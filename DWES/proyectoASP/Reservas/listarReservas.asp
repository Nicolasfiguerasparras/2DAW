<%
    sessionCookie = Request.Cookies("openSession")
    if not sessionCookie = "" then
        Session("username") = sessionCookie
    elseif Session("username") = "" then
        response.redirect("../login.html")
    end if

    if not Session("username") = "admin" and not Session("username") = "" then
        Set Conn = Server.CreateObject("ADODB.Connection")
        Conn.Open("proyecto")
        sSQL = "select * from cliente where nick='"&Session("username")&"'"
        set RS = Conn.Execute(sSQL)
        code = RS("codigo")
    end if
%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Listar reservas</title>
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
        
        <%
            if Session("username") = "admin" then
                response.write("<a href='crearReserva.asp'>Introducir reserva</a> ")
            end if
        %>
        <a href="listarReservas.asp">Listar reservas</a>
        <a href="buscarReservas.asp">Buscar reservas</a>
        <a href="../index.asp">Volver al inicio</a>

        <br><br>

        
        <%
            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")
            
            adminQuery = "SELECT cl.codigo, cl.nombre, ve.matricula, re.cliente, re.vehiculo, re.inicio, re.fin FROM cliente cl, vehiculo ve, reservas re WHERE re.cliente=cl.codigo and re.vehiculo=ve.matricula"
            clientQuery = "SELECT cl.codigo, cl.nombre, ve.matricula, re.cliente, re.vehiculo, re.inicio, re.fin FROM cliente cl, vehiculo ve, reservas re WHERE cl.codigo="&code&" and re.cliente=cl.codigo and re.vehiculo=ve.matricula"

            borrar = request.form("Borrar")

            if Session("username") = "admin" then
                set RS = Conn.Execute(adminQuery)
            else
                set RS = Conn.Execute(clientQuery)
            end if

                response.write("<table border=1>")
                    response.write("<tr>")
                        response.write("<td>Cliente</td>")
                        response.write("<td>Matricula</td>")
                        response.write("<td>Fecha Inicio</td>")
                        response.write("<td>Fecha Fin</td>")
                    response.write("</tr>")
            Do While Not rs.Eof
                    response.write("<tr>")
                        cliente = RS("nombre")
                        response.write("<td>"&cliente&"</td>")
                        vehiculo = RS("matricula")
                        response.write("<td>"&vehiculo&"</td>")
                        fechaInicio = RS("inicio")
                        response.write("<td>"&fechaInicio&"</td>")
                        fechaFin = RS("fin")
                        response.write("<td>"&fechaFin&"</td>")

                        if Session("username") = "admin" then
                            response.write("<td><a href='borrarReserva.asp?cliente="&rs("cliente")&"&vehiculo="&vehiculo&"&inicio="&fechaInicio&"'>Borrar</a></td>")
                        end if
                    response.write("</tr>")
                rs.MoveNext
            Loop
                response.write("</table>")
            Conn.Close
        %>
    </body>
</html>