<!DOCTYPE html>
<html lang="en">
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
        Set Conn = Server.CreateObject("ADODB.Connection")
        Conn.Open("proyecto")
        sSQL="SELECT cl.codigo, cl.nombre, ve.matricula, re.cliente, re.vehiculo, re.inicio, re.fin FROM cliente cl, vehiculo ve, reservas re WHERE re.cliente=cl.codigo and re.vehiculo=ve.matricula"

        borrar = request.form("Borrar")

        set RS = Conn.Execute(sSQL)

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
                    fechaI = RS("inicio")
                    response.write("<td>"&fechaI&"</td>")
                    fechaF = RS("fin")
                    response.write("<td>"&fechaF&"</td>")

                    
                    response.write("<td><a href='borrarReserva.asp?cliente="&rs("cliente")&"&vehiculo="&vehiculo&"&inicio="&fechaI&"'>Borrar</a></td>")
                response.write("</tr>")
            rs.MoveNext
        Loop
            response.write("</table>")
        Conn.Close
    %>
</body>
</html>