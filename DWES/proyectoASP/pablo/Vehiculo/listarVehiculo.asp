<!--#include file="../funciones.asp"-->
<%
call menuUsuario1()
Set Conn=Server.CreateObject("ADODB.Connection")
Conn.open("conector")
sSQL="SELECT * FROM Vehiculo"
set RS = Conn.Execute(sSQL)

	response.write("<table border=1>")
		response.write("<tr>")
			response.write("<td>Matrícula</td>")
			response.write("<td>Modelo</td>")
			response.write("<td>Marca</td>")
			response.write("<td>Nº Puertas</td>")
			response.write("<td>Categoría</td>")
			response.write("<td>Precio/día</td>")
		response.write("</tr>")
Do While Not rs.Eof
		response.write("<tr>")
			matricula = RS("matricula")
			response.write("<td>"&matricula&"</td>")
			modelo = RS("modelo")
			response.write("<td>"&modelo&"</td>")
			marca = RS("marca")
			response.write("<td>"&marca&"</td>")
			puertas = RS("n_puertas")
			response.write("<td>"&puertas&"</td>")
			categoria = RS("categoria")
			response.write("<td>"&categoria&"</td>")
			precio = RS("precio")
			response.write("<td>"&precio&"</td>")
			'Para modificar Vehiculo'
	rs.MoveNext
Loop
	response.write("</table>")
Conn.Close
%>