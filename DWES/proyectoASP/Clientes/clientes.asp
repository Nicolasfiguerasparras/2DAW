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
        response.redirect("verFactura.asp?cliente="&code)
    end if
%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Clientes</h1>

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
        <a href='buscarCliente.asp'>Buscar clientes</a>
        <a href="../index.asp">Volver al inicio</a>
    </body>
</html>