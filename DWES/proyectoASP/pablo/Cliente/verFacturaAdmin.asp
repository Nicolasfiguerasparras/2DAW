
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()
	cliente = request.querystring("cliente")
	hoy=date()
	response.write(hoy)
	Set Conn = Server.CreateObject("ADODB.Connection")

		Conn.Open("conector")

		sSQL="SELECT cl.nombre, re.vehiculo, re.inicio, re.fin, ve.precio FROM cliente cl, vehiculo ve, reservas re WHERE cl.codigo=re.cliente and ve.matricula=re.vehiculo and cl.codigo="&cliente&""
		set RS=Conn.Execute(sSQL)

		response.write("</br><table border=1>")
			response.write("<tr>")
				response.write("<td>Nombre</td>")
				response.write("<td>Matricula vehiculo</td>")
				response.write("<td>Fecha inicio</td>")
				response.write("<td>Fecha fin</td>")
				response.write("<td>Precio</td>")
				response.write("<td>Precio Total</td>")
			response.write("</tr>")
		do while not RS.Eof 
			response.write("<tr>")
				nombre=RS("NOMBRE")
				response.write("<td>"&nombre&"</td>")
				
				vehi=RS("vehiculo")
				response.write("<td>"&vehi&"</td>")

				inicio=RS("inicio")
				response.write("<td>"&inicio&"</td>")

				fin=RS("fin")
				response.write("<td>"&fin&"</td>")

				precioVehiculo=RS("precio")
				response.write("<td>"&precioVehiculo&"</td>")

				if(len(fin < hoy))then
				precioTotal=DateDiff("D", inicio, fin)*precioVehiculo
				response.write("<td>"&precioTotal&"</td>")
			end if
			RS.MoveNext
		loop
		response.write("</table>")
	Conn.Close

%>
</body>
</html>