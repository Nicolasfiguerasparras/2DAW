// //EJERCICIO 19
// let limite=prompt("Cuantos numeros quiere en el select?");

// if(limite>0)
// {
// 	document.write("<select name='lista' id='lista'>");
// 	for(let i=1;i<=limite;i++)
// 	{
// 	   document.write("<option value='"+i+"'>"+i+"</option>")	
// 	}
// 	document.write("</select>");
// }else{
// 	document.write("<h1>Numero no valido</h1>");
// }

//EJERCICIO 21
let filas=prompt("Cuantas filas tiene la tabla?");
let cols=prompt("Cuantas columnas tiene la tabla?");

let cont=1;

document.write("<table border='1'>");
for(let i=1;i<=filas;i++)
{
	if(i % 2 !=0)
	{	
		document.write("<tr bgcolor='red'>");
	}else{
     	document.write("<tr bgcolor='green'>");
    }
    
    for(let j=1;j<=cols;j++)
    {
       document.write("<td>"+cont+"</td>");
       cont++;
    }
	document.write("</tr>");
}

document.write("</table>");

//CON LAS COLUMNAS

document.write("<table border='1'>");
for(let i=1;i<=filas;i++)
{
 	document.write("<tr>");
    
    for(let j=1;j<=cols;j++)
    {
       if(j % 2 !=0)
		{	
			document.write("<td bgcolor='red'>"+cont+"</td>");
		}else{
     		document.write("<td bgcolor='green'>"+cont+"</td>");
    	}
    cont++;
    }
	document.write("</tr>");
}

document.write("</table>");