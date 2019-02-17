
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

response.write("<h3>Busqueda de una reserva</h3>")
 response.write("<form action='buscarReserva.asp' method='POST' name='form'>")

 	response.write("<label for='busqueda'>Busqueda por nombre</label><br>")
 	response.write("<input type='text' name='busqueda' placeholder='búsqueda' required><br>")

 	response.write("<input type='submit' name='Buscar' value='Buscar'><br><br>")
response.write("</form>")

buscar = request.form("busqueda")

Set Conn=Server.CreateObject("ADODB.Connection")
	Conn.open("conector")
IF(len(buscar)>0)then
	
sSQL="SELECT distinct cl.nombre, re.* FROM cliente cl, vehiculo ve , reservas re where cl.codigo=re.cliente and ve.matricula=re.vehiculo and (cl.nombre like '"&buscar&"' or ve.matricula like '"&buscar&"' or re.inicio like '"&buscar&"' or re.fin like '"&buscar&"')"
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
			vehiculo = RS("vehiculo")
			response.write("<td>"&vehiculo&"</td>")
			fechaI = RS("inicio")
			response.write("<td>"&fechaI&"</td>")
			fechaF = RS("fin")
			response.write("<td>"&fechaF&"</td>")
		response.write("</tr>")
	rs.MoveNext
Loop
	response.write("</table>")
END if
		
Conn.Close
%>