<!--Codificar una página en PHP que recorra los números desde el 260
hasta el 110, mostrando sólo los números que sean múltiplos de 3 o de
2. Hacerlo utilizando los 3 tipos de bucles existentes en PHP.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio2</title>
    </head>
    <body>
        <?php
            echo "<b>Bucle FOR:</b> <br><br>";
            $numero_primero=2;
            $numero_segundo=3;
            for($contador=260;$contador>=110;$contador--){
                $comp_divisor_primero=$contador%$numero_primero;
                $comp_divisor_segundo=$contador%$numero_segundo;
                if($comp_divisor_primero==0){
                    echo "$contador es un múltiplo de $numero_primero";
                    echo "<br>";
                }elseif($comp_divisor_segundo==0){
                    echo "$contador es un múltiplo de $numero_segundo";
                    echo "<br>";

                }
            }
            /*Aquí hay que cambiar esta wea*/
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
