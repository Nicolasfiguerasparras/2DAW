document.write("<table border='1'>");

for (var i = 0; i < 8; i++) {
	
	for (let j = 0; j < 8; j++) {
		
		if ((i + j) % 2 == 0) {
			
			document.write("<td bgcolor='black'>a</td>");
		
		}else{

			
			document.write("<td bgcolor='white'>a</td>");

	}


}
	document.write("</tr>");
}