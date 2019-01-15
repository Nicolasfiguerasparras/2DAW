let datosUrl = noticias["page"]["items"];

for (var i = 0; i < datosUrl.length; i++) {
	document.write("<h1>" + datosUrl[i]["longTitle"] + "</h1>");
	document.write("<img src='" + datosUrl[i]["imageSEO"] + "' alt='" + datosUrl[i]["longTitle"] + "'><br>");
	document.write("<a href='" + datosUrl[i]["htmlUrl"] + "'>" + datosUrl[i]["longTitle"] + "</a>" + "<br><br><hr>");
};
