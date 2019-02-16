<%
    Session.Abandon
    response.Cookies("openSession") = ""
    Session("username") = ""
    response.redirect("index.asp")
%>