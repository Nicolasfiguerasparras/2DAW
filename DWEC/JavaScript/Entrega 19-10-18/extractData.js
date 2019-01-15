let dataSplitted = noticias["page"]["items"];
for (let i=0;i<dataSplitted.length;i++){
	document.write("<h1>"+dataSplitted[i]["longTitle"]+"</h1>");
	document.write("<img src='"+dataSplitted[i]["imageSEO"]+"'>");
document.write("<a href='"+dataSplitted[i]["htmlUrl"]+"'>"+dataSplitted[i]["htmlUrl"]+"</a>");}
