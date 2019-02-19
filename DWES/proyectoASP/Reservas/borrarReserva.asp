<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Borrar reserva</title>
    </head>
    <body>
        <%
            Set Conn = Server.CreateObject("ADODB.Connection")
            Conn.Open "conector"

            cliente=request.queryString("cliente")
            vehiculo=request.queryString("vehiculo")
            inicio=cdate(request.queryString("inicio"))
            
            sSQL="Delete From reservas where cliente="&cliente&" and vehiculo='"&vehiculo&"' and inicio like '%"&inicio&"%'"
            response.write(sSQL)
            set RS = Conn.Execute(sSQL)
        %>

            <h1><div align="center">Registro Borrado</div></h1>
            <div align="center"><a href="indexReserva.asp">Visualizar el contenido de la base</a></div>

        <%
            Conn.Close
        %>
    </body>
</html>