<%
    user = request.form("user")
    pass = request.form("pass")
    openSession = request.form("openSession")
    
    'Comprobamos si el usuario es admin

    if user = "admin" and pass = "admin" then
        Session("username") = "admin"
        if openSession="openSession" then
            response.Cookies("openSession") = "admin"
        end if
        response.redirect("index.asp")
    end if

    'Comprobamos si el usuario es otro cualquiera de la base de datos
    
    Set Conn = Server.CreateObject("ADODB.Connection") 'Inicializamos la conexión con ADODB
    Conn.Open("proyecto") 'Conectamos con la base de datos
    sSQL = "select * from cliente where nick='"&user&"' and pass='"&pass&"'" 'Realizamos la consulta
    set RS = Conn.Execute(sSQL) 'Ejecutamos la consulta

    if Not rs.eof then 'Comprobamos que la consulta devuelve algún dato leyendo el valor del código obtenido
        Session("username") = user
        if openSession="openSession" then
            response.Cookies("openSession") = user 'En caso de marcar el checkbox, creamos la cookie
        end if
        response.redirect("index.asp")
    else
        response.redirect("loginError.html")
    end if

    'Cerramos la conexión
    Conn.Close
%>