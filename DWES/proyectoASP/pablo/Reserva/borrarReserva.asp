<!--#include file="../funciones.asp"-->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<%
	call menuAdmin1()

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


