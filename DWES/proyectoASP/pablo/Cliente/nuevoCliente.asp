
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()



response.write("<h3>Inserta un cliente</h3>")
				response.write("<form action='nuevoCliente.asp' method='POST' enctype='multiport/form-data'> ")
		response.write("<label for='nombre'>Nombre</label><br>")
			response.write("<input type='text' name='nombre' placeholder='nombre' id='nombre' required>")
		response.write("<br/><br/>")

		response.write("<label for='telefono'>Telefono </label><br>")
			response.write("<input type='text' name='telefono' placeholder='telefono' id='telefono' required>")
		response.write("<br/><br/>")

		response.write("<label for='nick'>Nick</label><br>")
			response.write("<input type='text' name='nick' id='nick' placeholder='nick' required>")
		response.write("<br/><br/>")

		response.write("<label for='contrasenia'>Contraseña</label><br>")
			response.write("<input type='password' name='pass' placeholder='contraseña' id='pass' required>")
		response.write("<br/><br/>")

		response.write("<input type='submit' name='Insertar' value='Insertar'>")
			response.write("<input type='reset' name='Borrar' value='Borrar'>")
		response.write("</form><br>")


nombre = request.form("nombre")
telefono = request.form("telefono")
nick = request.form("nick")
pass = request.form("pass")
insertar = request.form("Insertar")

Set Conn=Server.CreateObject("ADODB.Connection")
Conn.open("conector")

IF(len(insertar)>0)then
	sSQL = "Insert into cliente (nombre, telefono, nick, pass) values ('"&nombre&"', '"&telefono&"', '"&nick&"', '"&pass&"')"
	set RS = Conn.Execute(sSQL)
END if
		
Conn.Close
%>