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
    
    Set Conn = Server.CreateObject("ADODB.Connection")
    Conn.Open("proyecto")
    sSQL = "select * from cliente where nick="&user&" and pass="&pass
    set RS = Conn.Execute(sSQL)

    if Not rs = "" then
        Session("username") = user
        if openSession="openSession" then
            response.Cookies("openSession") = user
        end if
        response.redirect("index.asp")
    else
        response.redirect("loginError.html")
    end if

    ' Do While Not rs.Eof
    '     response.write(RS("id"))
    '     rs.MoveNext
    ' Loop

    ' Conn.Close
%>