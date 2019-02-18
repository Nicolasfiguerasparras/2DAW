<%
    sessionCookie = Request.Cookies("openSession")
    if not sessionCookie = "" then
        Session("username") = sessionCookie
    elseif Session("username") = "" then
        response.redirect("../login.html")
    end if

    if not Session("username") = "admin" and not Session("username") = "" then
        response.redirect("../index.asp")
    end if
%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Buscar cliente</title>
    </head>
    <body>
        <h1>Buscar clientes</h1>

        <nav>
            <a href="clientes.asp">Clientes</a>
            <a href="../Vehiculos/vehiculos.asp">Vehiculos</a>
            <a href="../Reservas/indexReservas.asp">Reservas</a>
            <%
                response.write("<a href=../disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
            %>
        </nav>

        <br><br>

        <a href="crearCliente.asp">Introducir cliente</a>
        <a href="listarCliente.asp">Listar clientes</a>
        <a href="buscarCliente.asp">Buscar clientes</a>
        <a href="../index.asp">Volver al inicio</a>

        <br><br>

        <form action="buscarCliente.asp" method="POST" name="form">
            <label for="search">Introduzca el nombre</label>
            <input type="text" name="search" placeholder="Escriba el nombre a buscar">
            <input type="submit" name="searchInput" value="Buscar">
        </form>
        
        <br><br>

        <%
            searchInput = request.form("search")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")
            if(len(searchInput)>0)then
                    
                sSQL = "select * from cliente where nombre like '%"&searchInput&"%'"
                set RS = Conn.Execute(sSQL)
                response.write("<table border=1>")
                    response.write("<tr>")
                        response.write("<td>Nombre</td>")
                        response.write("<td>Telefono</td>")
                        response.write("<td>Nick</td>")
                        response.write("<td>Contraseña</td>")
                    response.write("</tr>")
                    Do While Not rs.Eof
                        response.write("<tr>")
                            name = RS("nombre")
                            response.write("<td>"&name&"</td>")
                            tel = RS("telefono")
                            response.write("<td>"&tel&"</td>")
                            nick = RS("nick")
                            response.write("<td>"&nick&"</td>")
                            pass = RS("pass")
                            response.write("<td>"&pass&"</td>")
                        response.write("</tr>")
                        rs.MoveNext
                    Loop
                response.write("</table>")

            end if     
            Conn.Close
        %>
    </body>
</html>