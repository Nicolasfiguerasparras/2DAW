let datos=noticias["page"]["items"];

for(let i=0;i<datos.length;i++){
	document.write("<h1>"+datos[i]["longTitle"]+"</h1>");
	document.write("<img src='"+datos[i]["imageSEO"]+"'></img><br><br>");
	document.write("<a href='"+datos[i]["htmlUrl"]+"' target='_blank'>Enlace a la noticia</a>");
};