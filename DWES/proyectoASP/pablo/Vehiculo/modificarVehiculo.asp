
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

		Set Conn = Server.CreateObject("ADODB.Connection")

		Conn.Open("conector")

		matricula = request.querystring("matricula")
		modelo = request.querystring("modelo")
		marca = request.querystring("marca")
		puertas = request.querystring("puertas")
		categoria = request.querystring("categoria")
		precio = request.querystring("precio")

		
response.write("<h3>Modificar vehiculo</h3>")
				response.write("<form action='modificarVehiculo.asp' method='POST' enctype='multiport/form-data'> ")
		response.write("<label for='matricula'>matricula</label><br>")
			response.write("<input type='text' name='matricula' placeholder='matricula' id='matricula' value='"&matricula&"' required>")
		response.write("<br/><br/>")

		response.write("<label for='modelo'>modelo </label><br>")
			response.write("<input type='text' name='modelo' placeholder='modelo' id='modelo' value='"&modelo&"' required>")
		response.write("<br/><br/>")

		response.write("<label for='marca'>marca</label><br>")
			response.write("<input type='text' name='marca' id='marca' value='"&marca&"' placeholder='marca' required>")
		response.write("<br/><br/>")

		response.write("<label for='n_puertas'>n_puertas</label><br>")
			response.write("<input type='text' name='n_puertas' id='n_puertas' value='"&puertas&"' placeholder='n_puertas' required>")
		response.write("<br/><br/>")

		response.write("<label for='categoria'>categoria</label><br>")
			response.write("<input type='text' name='categoria' id='categoria' value='"&categoria&"' placeholder='categoria' required>")
		response.write("<br/><br/>")

		response.write("<label for='precio'>precio</label><br>")
			response.write("<input type='text' name='precio' id='precio' value='"&precio&"' placeholder='precio' required>")
		response.write("<br/><br/>")

		response.write("<input type='submit' name='Modificar' value='Modificar'>")
			response.write("<input type='reset' name='Borrar' value='Borrar'>")
		response.write("</form><br>")


	matricula1=Request.Form("matricula")
	modelo1=Request.Form("modelo")
	marca1=Request.Form("marca")
	puertas1=Request.Form("n_puertas")
	categoria1=Request.Form("categoria")
	precio1=Request.Form("precio")
	modificar=Request.form("Modificar")


	IF(len(modificar)>0) then
 
		insertar = "UPDATE vehiculo SET matricula='"&matricula1&"', modelo='"&modelo1&"', marca='"&marca1&"',n_puertas='"&puertas1&"',categoria='"&categoria1&"', precio='"&precio1&"' WHERE matricula='"&matricula1&"'"

			set RS=Conn.Execute(insertar)
		
	END if 

Conn.Close
%>