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
        <title>Crear cliente</title>
    </head>
    <body>
        <h1>Crear cliente</h1>

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

        <form action="crearCliente.asp" method="POST" enctype="multiport/form-data">
            <label for="name">Nombre</label> 
            <input type="text" name="name" placeholder="Nombre" id="name" required><br>

            <label for="telef">Teléfono </label> 
            <input type="text" name="telef" placeholder="Teléfono" id="telef" required><br>

            <label for="nick">Nick</label> 
            <input type="text" name="nick" id="nick" placeholder="Nick" required><br>

            <label for="contrasenia">Contraseña</label> 
            <input type="password" name="pass" placeholder="Contraseña" id="pass" required><br>

            <input type="submit" name="submit" value="Insertar">
            <input type="reset" name="Borrar" value="Borrar">
        </form>

        <%
            name = request.form("name")
            telef = request.form("telef")
            nick = request.form("nick")
            pass = request.form("pass")
            submit = request.form("submit")

            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open("proyecto")

            if len(submit) > 0 then
                sSQL = "insert into cliente (nombre, telefono, nick, pass) values ('"&name&"', '"&telef&"', '"&nick&"', '"&pass&"')"
                set RS = Conn.Execute(sSQL)
            end if

            Conn.Close
        %>
    </body>
</html>