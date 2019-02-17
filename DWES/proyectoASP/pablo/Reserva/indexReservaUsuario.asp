<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
<!--#include file="../funciones.asp"-->
<%
call menuUsuario1()

codigoCliente = Session("sesion")

Set Conn=Server.CreateObject("ADODB.Connection")
Conn.open("conector")
sSQL="SELECT cl.codigo, cl.nombre, ve.matricula, re.cliente, re.vehiculo, re.inicio, re.fin FROM cliente cl, vehiculo ve, reservas re WHERE re.cliente=cl.codigo and re.vehiculo=ve.matricula and cl.codigo="&codigoCliente&""

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
		response.write("</tr>")
	rs.MoveNext
Loop
	response.write("</table>")
Conn.Close
%>
