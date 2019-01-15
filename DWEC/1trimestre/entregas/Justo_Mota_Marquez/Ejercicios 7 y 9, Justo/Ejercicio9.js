let seccion = noticias["page"]["items"];

for (let i = 0; i < seccion.length; i++) {
	document.write("<h2>" + seccion[i]["longTitle"] + "</h2>");
	document.write("<a href='"+ seccion[i]["htmlUrl"] + "'>"+ i + "</a><br>");
	document.write("<img src='" + seccion[i]["imageSEO"] + "'>");
};