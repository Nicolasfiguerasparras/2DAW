
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

response.write("<h3>Busqueda de un cliente</h3>")
 response.write("<form action='buscarCliente.asp' method='POST' name='form'>")

 	response.write("<label for='busqueda'>Busqueda por nombre</label><br>")
 	response.write("<input type='text' name='busqueda' placeholder='búsqueda' required><br>")

 	response.write("<input type='submit' name='Buscar' value='Buscar'><br><br>")
response.write("</form>")

buscar = request.form("busqueda")

Set Conn=Server.CreateObject("ADODB.Connection")
	Conn.open("conector")
IF(len(buscar)>0)then
	
sSQL="SELECT * FROM cliente where nombre like '"&buscar&"'"
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
		response.write("</tr>")
	rs.MoveNext
Loop
	response.write("</table>")
END if


		
Conn.Close
%>