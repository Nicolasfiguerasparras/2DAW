let datos=noticias["page"]["items"];

for (let i=0;i<datos.length;i++)
{
	document.write("<h1>"+datos[i]["longTitle"]+"</h1>");
	document.write("<img src='"+datos[i]["imageSEO"]+"'>");
	document.write("<br>");
	document.write("<a href ='"+datos[i]["htmlUrl"]+"'>"+ "Ver" + "</a>");
}


