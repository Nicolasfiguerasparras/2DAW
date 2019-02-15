<%
    user = request.form("user")
    pass = request.form("pass")
    openSession = request.form("openSession")
    
    'Comprobamos si el usuario es admin

    if user = "admin" and pass = "admin" then
        Session("username") = user
        if openSession="openSession" then
            response.Cookies("openSession") = user
        end if
        response.redirect("index.asp")
    else
        response.redirect("loginError.html")
    end if
%>