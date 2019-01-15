let arraynoticias = noticias.page.items;
for (let i = arraynoticias.length - 1; i >= 0; i--) {
	document.write("<p><h2>"+arraynoticias[i]["longTitle"]+"</h2><br><img src=\""+arraynoticias[i]["imageSEO"]+"\"><br><i>"+arraynoticias[i]["htmlUrl"]+"</i></p>");
};