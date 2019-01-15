<!--Codificar una página Web que cree un array de al menos 7 posiciones y
muestre todos los valores que tenga el array. Al final, también deberá
mostrarse la media de todos los valores numéricos que haya en el array,
indicando cuántos valores numéricos se han encontrado-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 7</title>
    </head>
    <body>
        <?php
            $array[]=15;
            $array[]=68;
            $array[]=48;
            $array[]=245;
            $array[]=856;
            $array[]=84;
            $array[]=64;
            $array[]=62;
            
            $suma=0;
            $num_valores=-1;
            foreach($array as $valor){
                $num_valores++;
                echo "Posición número $num_valores: $valor";
                $suma+=$valor;
                echo "<br>";
            }
            $media=$suma/$num_valores;
            echo "<br><br>";
            echo "Hay $num_valores números. <br>";
            echo "La media de todos los valores es $media";
        ?>
    </body>
</html>
