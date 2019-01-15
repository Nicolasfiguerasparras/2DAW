let noticia=noticias["page"]["items"];

for(let i=0 ; i<noticia.length; i++){
	document.write("<h1>"+noticia[i]["longTitle"]+"</h1>");
	document.write("<img src='"+noticia[i]["imageSEO"]+"'/><br>");
	document.write("<a href='"+noticia[i]["htmlUrl"]+"'>Enlace</a>");
}