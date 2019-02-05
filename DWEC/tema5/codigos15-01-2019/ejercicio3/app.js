$(document).ready(Start);

function Start(){
   $("#crear").click(Crear);	
}


function Crear()
{
   let datos=$("#datos").val();
   let partes;
   let lista_ordenada;
   let elemento;
   let select;
   let tabla;
   let fila;
   let celda;

   if(datos!=""){
   	  partes=datos.split(",");
   	  lista_ordenada=$("<ol></ol>");
   	  for(let i=0;i<partes.length;i++){
   	  	elemento=$("<li></li>");
   	  	elemento.text(partes[i]);
   	  	lista_ordenada.append(elemento);
   	  }
   	  let primer_div=$("div.card-body").first();
   	  primer_div.html("");
   	  primer_div.append(lista_ordenada);
//----------------------------------------------------
   	  select=$("<select></select>");
   	  for(let i=0;i<partes.length;i++){
   	  	elemento=$("<option></option>");
   	  	elemento.text(partes[i]);
   	  	elemento.attr("value",partes[i]);
   	  	select.append(elemento);
   	 }
   	  let segundo_div=$("div.card-body").eq(1);
   	  segundo_div.html("");
   	  segundo_div.append(select);
//--------------------------------------------------
     tabla=$("<table></table>");
     tabla.attr("border",1);
     for(let i=0;i<partes.length;i++){
     	celda=$("<td></td>");
     	celda.text(partes[i]);
     	fila=$("<tr></tr>");
     	if(i%2==0){
            fila.css("background-color","red");
     	}else{
     		fila.css("background-color","green");
     	}
     	fila.append(celda);
     	tabla.append(fila);
     }
     let tercer_div=$("div.card-body").last();
   	 tercer_div.html("");
   	 tercer_div.append(tabla);
   	 
   }else{
   	  alert("Debes introducir datos");
   }
}