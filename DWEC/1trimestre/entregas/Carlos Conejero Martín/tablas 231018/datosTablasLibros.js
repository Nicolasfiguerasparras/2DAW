let libros={

    "978-0062511409":{
        Titulo:"El Alquimista",
        NombreAutor:"Paulo",
        ApellidoAutor:"Coelho",
        Precio:"$8.46"
    },

    "978-0307744593":{
        Titulo:"Aleph",
        NombreAutor:"Paulo",
        ApellidoAutor:"Coelho",
        Precio:"$12.23"

    },

    "978-034580704":{
        Titulo:"El peregrino",
        NombreAutor:"Paulo",
        ApellidoAutor:"Coelho",
        Precio:"$12.20"
    }
}

document.write("<table border='1'");
document.write("<tr>");
document.write("    <th style='background-color:black;color:white';>ISBN</th>");
document.write("    <th style='background-color:blue;color:white'>Título</th>");
document.write("    <th style='background-color:blue;color:white'>Nombre Autor</th>");
document.write("    <th style='background-color:blue;color:white'>Apellido Autor</th>");
document.write("    <th style='background-color:blue;color:white'>Precio</th>");
document.write("</tr>");

let contador=0;
for(dato in libros) {

    document.write("<tr>");
     if(contador==0) {
        document.write("    <td style='background-color:#5688d8;color:black'>"+dato+"</td>");
        contador++;
    }else{
        document.write("    <td style='background-color:#8fb2ea;color:black'>"+dato+"</td>");
        contador=0;
    }

    for(persona in libros[dato]) {

        if(contador==0) {

            document.write("    <td style='background-color:#5688d8;color:black'>"+libros[dato][persona]+"</td>");
            contador++;
        }else{

            document.write("    <td style='background-color:#8fb2ea;color:black'>"+libros[dato][persona]+"</td>");
            contador=0;
        }  
    }
    document.write("</tr>");
}
document.write("</table>");