<%
    sessionCookie = Request.Cookies("openSession")
    if not sessionCookie = "" then
        Session("username") = sessionCookie
    elseif Session("username") = "" then
        response.redirect("login.html")
    end if
%>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Index</title>
</head>
<body>
    <h1>Index</h1>
    <nav>
        <a href="Clientes/clientes.html">Clientes</a>
        <a href="/Vehiculos/vehiculos.html">Vehiculos</a>
        <a href="/Reservas/reservas.html">Reservas</a>
        <a href="/Factura/factura.html">Factura</a>
        <%
            response.write("<a href=disconnect.asp>Cerrar sesión de "&Session("username")&"</a>")
        %>
    </nav>
</body>
</html>