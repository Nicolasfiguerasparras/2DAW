<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Buscar reservas</h1>

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

        <form action="buscarReservas.asp" method="POST">
            <label for='busqueda'>Introduce el nombre, matrícula o fecha de inicio de la reserva</label>
            <input type='text' name='busqueda' required>

            <input type='submit' name='Buscar' value='Buscar'>
        </form>

        <%
            buscar = request.form("busqueda")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            if len(buscar) > 0 then
                
                searchQuery="SELECT distinct cl.nombre, re.* FROM cliente cl, vehiculo ve , reservas re where cl.codigo=re.cliente and ve.matricula=re.vehiculo and (cl.nombre like '%"&buscar&"%' or ve.matricula like '%"&buscar&"%' or re.inicio like '%"&buscar&"%' or re.fin like '%"&buscar&"%')"
                set RS = Conn.Execute(searchQuery)
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
                                vehiculo = RS("vehiculo")
                                response.write("<td>"&vehiculo&"</td>")
                                fechaInicio = RS("inicio")
                                response.write("<td>"&fechaInicio&"</td>")
                                fechaFin = RS("fin")
                                response.write("<td>"&fechaFin&"</td>")
                            response.write("</tr>")
                            rs.MoveNext
                        Loop
                    response.write("</table>")
            end if

            Conn.Close
        %>
    </body>
</html>