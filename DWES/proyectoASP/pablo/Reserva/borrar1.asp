<HTML>
<HEAD>
<TITLE>Borrar1.asp</TITLE>
</HEAD>
<BODY>
<div align="center">
<h1>Borrar un registro</h1>
<br>
<%
'Instanciamos y abrimos nuestro objeto conexion 
Set Conn = Server.CreateObject("ADODB.Connection")

Conn.Open "conector"
%>

<FORM METHOD="POST" ACTION="borrar2.asp">
Nombre<br>
<%
'Creamos la sentencia SQL y la ejecutamos

sSQL="Select * From reservas"
set RS = conn.execute(sSQL)
%>
<select name="nombre">
<%
'Generamos el menu desplegable
Do While not RS.eof%>
   <option><%=RS("cliente")%>
   <%RS.movenext
Loop
%>
</select>
<br>
<INPUT TYPE="SUBMIT" value="Borrar">
</FORM>
</div>

</BODY>
</HTML>