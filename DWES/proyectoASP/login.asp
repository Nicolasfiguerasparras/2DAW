<%
    user = request.form("user")
    pass = request.form("pass")
    openSession = request.form("openSession")
    
    'Comprobamos si el usuario es admin

    if (user == "admin" && pass == "admin") then
        Session("session") = Array (user,pass,openSession)
    end if
%>