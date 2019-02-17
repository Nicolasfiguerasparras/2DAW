
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

response.write("<h3>Busqueda de un vehiculo</h3>")
 response.write("<form action='buscarVehiculo.asp' method='POST' name='form'>")

 	response.write("<label for='busqueda'>Busqueda por modelo, marca y matricula</label><br>")
 	response.write("<input type='text' name='busqueda' placeholder='búsqueda' required><br>")

 	response.write("<input type='submit' name='Buscar' value='Buscar'><br><br>")
response.write("</form>")

buscar = request.form("busqueda")

Set Conn=Server.CreateObject("ADODB.Connection")
	Conn.open("conector")
IF(len(buscar)>0)then
	
sSQL="SELECT * FROM vehiculo where matricula like '"&buscar&"' or modelo like '"&buscar&"' or marca like '"&buscar&"'"
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
			mat = RS("matricula")
			response.write("<td>"&mat&"</td>")
			mode = RS("modelo")
			response.write("<td>"&mode&"</td>")
			mar = RS("marca")
			response.write("<td>"&mar&"</td>")
			numP = RS("n_puertas")
			response.write("<td>"&numP&"</td>")
			cat = RS("categoria")
			response.write("<td>"&cat&"</td>")
			prec = RS("precio")
			response.write("<td>"&prec&"</td>")
		response.write("</tr>")
	rs.MoveNext
Loop
	response.write("</table>")
END if


		
Conn.Close
%>