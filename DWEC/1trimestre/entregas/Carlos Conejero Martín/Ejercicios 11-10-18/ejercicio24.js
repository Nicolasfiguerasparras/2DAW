let filas=prompt("Cuantas filas tiene la tabla?");
let cols=prompt("Cuantas columnas tiene la tabla?");

let cont=1;


for(let i=1;i<=filas;i++) {

    
    for(let j=1;j<=cols;j++){

     if(j==1){

        document.write("<div class='bajar caja'>"+cont+"</div>");
     }else{
      
        document.write("<div class='caja'>"+cont+"</div>");
     }
       cont++;
    }
}