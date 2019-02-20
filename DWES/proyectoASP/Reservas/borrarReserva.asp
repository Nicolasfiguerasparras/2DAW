<%
    Set Conn = Server.CreateObject("ADODB.Connection")
    Conn.Open("proyecto")

    cliente=request.queryString("cliente")
    vehiculo=request.queryString("vehiculo")
    inicio=cdate(request.queryString("inicio"))
    today=Date

    if inicio > today then
        deleteQuery="Delete From reservas where cliente="&cliente&" and vehiculo='"&vehiculo&"' and inicio like '%"&inicio&"%'"
        response.write(deleteQuery)
        set RS = Conn.Execute(deleteQuery)
        response.redirect("listarReservas.asp")
    else
        response.write("No se pueden eliminar reservas pasadas.")
        response.write("<br>")
        response.write("<a href='listarReservas.asp'>Volver al listado de reservas</a>")
    end if
    Conn.Close
%>