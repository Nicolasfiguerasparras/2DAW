
<!--#include file="../funciones.asp"-->
<%
call menuAdmin1()

response.write("<h3>Inserta un vehiculo nuevo</h3>")
				response.write("<form action='nuevoVehiculo.asp' method='POST' enctype='multiport/form-data'> ")
		response.write("<label for='matricula'>matricula</label><br>")
			response.write("<input type='text' name='matricula' placeholder='matricula' id='matricula' required>")
		response.write("<br/><br/>")

		response.write("<label for='modelo'>modelo </label><br>")
			response.write("<input type='text' name='modelo' placeholder='modelo' id='modelo' required>")
		response.write("<br/><br/>")

		response.write("<label for='marca'>marca</label><br>")
			response.write("<input type='text' name='marca' id='marca' placeholder='marca' required>")
		response.write("<br/><br/>")

		response.write("<label for='n_puertas'>n_puertas</label><br>")
			response.write("<input type='text' name='n_puertas' id='n_puertas' placeholder='n_puertas' required>")
		response.write("<br/><br/>")

		response.write("<label for='categoria'>categoria</label><br>")
			response.write("<input type='text' name='categoria' id='categoria' placeholder='categoria' required>")
		response.write("<br/><br/>")

		response.write("<label for='precio'>precio</label><br>")
			response.write("<input type='text' name='precio' id='precio' placeholder='precio' required>")
		response.write("<br/><br/>")

		response.write("<input type='submit' name='Insertar' value='Insertar'>")
			response.write("<input type='reset' name='Borrar' value='Borrar'>")
		response.write("</form><br>")


matricula = request.form("matricula")
modelo = request.form("modelo")
marca = request.form("marca")
n_puertas = request.form("n_puertas")
categoria = request.form("categoria")
precio = request.form("precio")
insertar = request.form("Insertar")

Set Conn=Server.CreateObject("ADODB.Connection")
Conn.open("conector")

IF(len(insertar)>0)then
	sSQL = "Insert into vehiculo (matricula, modelo, marca, n_puertas, categoria, precio) values ('"&matricula&"', '"&modelo&"', '"&marca&"', '"&n_puertas&"', '"&categoria&"', '"&precio&"')"
	set RS = Conn.Execute(sSQL)
END if
		
Conn.Close
%>