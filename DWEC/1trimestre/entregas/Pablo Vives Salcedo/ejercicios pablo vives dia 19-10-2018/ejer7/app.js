let datos=noticias["page"]["items"];

for (let i=0;i<datos.length;i++)
{
	document.write("<h1>"+datos[i]["longTitle"]+"</h1>");
	document.write("<img src='"+datos[i]["imageSEO"]+"'>");
	document.write("<a href='"+datos[i]["htmlUrl"]+"'>enlace pincha aqui</a>");
}


let censo={
	Granada:150000,
	Madrid: 3000000,
	Barcelon:2879000,
}


let traductor={
   casa:"house",
   rojo:"red"
}

let morse={
	A:".-",
	B:"-...",
	C:"-.-."
}
