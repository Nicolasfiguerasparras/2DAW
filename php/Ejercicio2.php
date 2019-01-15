<!--Crear un documento PHP que muestre por pantalla los múltiplos que
existen de 7 desde 1 hasta 100. Hacerlo utilizando los 3 tipos de bucles
que existen en PHP.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio2</title>
    </head>
    <body>
        <?php
            echo "<b>Bucle FOR:</b> <br><br>";
            $numero=7;
            for($contador=7;$contador<100;$contador++){
                $comp_divisor=$contador%$numero;
                if($comp_divisor == 0){
                    echo "$contador es un múltiplo de $numero";
                    echo "<br>";
                }
            }
            
            echo "<br><br>";
            echo "<b>Bucle WHILE:</b> <br><br>";
            $contador_while=1;
            while($contador_while<100){
                $comp_divisor_while=$contador_while%$numero;
                if($comp_divisor_while == 0){
                    echo "$contador_while es un múltiplo de $numero";
                    echo "<br>";
                }
                $contador_while++;
            }
            
            echo "<br><br>";
            echo "<b>Bucle FOREACH:</b> <br><br>";
            $numero_aux=7;
            while($numero_aux<=100){
                $array[]=$numero_aux;
                $numero_aux++;
            }
            foreach($array as $valor){
                if($valor%$numero==0){
                    echo "$valor es un múltiplo de $numero";
                    echo "<br>";
                }
            }
        ?>
    </body>
</html>
