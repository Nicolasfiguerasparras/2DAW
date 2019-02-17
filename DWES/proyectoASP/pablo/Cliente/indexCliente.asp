<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

Set Conn=Server.CreateObject("ADODB.Connection")
Conn.open("conector")
sSQL="SELECT * FROM cliente"
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
			nom = RS("nombre")
			response.write("<td>"&nom&"</td>")
			tel = RS("telefono")
			response.write("<td>"&tel&"</td>")
			ni = RS("nick")
			response.write("<td>"&ni&"</td>")
			cont = RS("pass")
			response.write("<td>"&cont&"</td>")
			cliente = RS("codigo")
			response.write("<td><a href='verFacturaAdmin.asp?cliente="&cliente&"'>Ver factura</a></td>")
		response.write("</tr>")
			response.write("<a href='verFacturaUsuario.asp?cliente="&cliente&"'></a>")
	rs.MoveNext
Loop
	response.write("</table>")
Conn.Close
%>