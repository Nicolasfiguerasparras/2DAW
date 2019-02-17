<HTML>
<HEAD>
<TITLE>Borrar2.asp</TITLE>
</HEAD>
<BODY>
<%
'Recogemos los valores del formulario
cliente=Request.Form("cliente")
vehiculo=Request.Form("vehiculo")

'Instanciamos y abrimos nuestro objeto conexion 
Set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open "conector"

'Ahora creamos la sentencia SQL 
sSQL="Delete From reservas Where cliente="&cliente&" and vehiculo='"&vehiculo&"'"

'Ejecutamos la orden 
set RS = Conn.Execute(sSQL)
%>

<h1><div align="center">Registro Borrado</div></h1>
<div align="center"><a href="indexReserva.asp">Visualizar el contenido de la base</a></div>

<%
'Cerramos el sistema de conexion
Conn.Close
%>

</BODY>
</HTML>