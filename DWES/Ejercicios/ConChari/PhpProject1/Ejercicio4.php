<!--Crear una página en PHP que utilizando un array, muestre los números
del 20 al 30 y después muestre la suma de todos ellos.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 4</title>
    </head>
    <body>
        <?php
            $numero_aux=20;
            while($numero_aux<=30){
                $array[]=$numero_aux;
                $numero_aux++;
            }
            $suma=0;
            foreach($array as $valor){
                echo "$valor";
                $suma+=$valor;
                echo "<br>";
            }
            echo "<br><br>";
            echo "La suma de todos los valores es $suma";
        ?>
    </body>
</html>
