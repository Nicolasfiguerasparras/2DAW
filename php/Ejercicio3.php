<!--Codificar una pÃ¡gina en PHP que recorra los nÃºmeros desde el 260
hasta el 110, mostrando sÃ³lo los nÃºmeros que sean mÃºltiplos de 3 o de
2. Hacerlo utilizando los 3 tipos de bucles existentes en PHP.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 2</title>
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

            echo "<br><br>";
            echo "<b>Bucle WHILE:</b> <br><br>";
            $contador_while=260;
            while($contador_while>=110){
                $comp_divisor_primero=$contador_while%$numero_primero;
                $comp_divisor_segundo=$contador_while%$numero_segundo;
                if($comp_divisor_primero==0){
                    echo "$contador_while es un múltiplo de $numero_primero";
                    echo "<br>";
                }elseif($comp_divisor_segundo==0){
                    echo "$contador_while es un múltiplo de $numero_segundo";
                    echo "<br>";
                }
            $contador_while--;
            }
            
            echo "<br><br>";
            echo "<b>Bucle FOREACH:</b> <br><br>";
            $numero_ini=260;
            while($numero_ini>=110){
                $array[]=$numero_ini;
                $numero_ini--;
            }
            foreach($array as $valor){
                $comp_divisor_primero=$valor%$numero_primero;
                $comp_divisor_segundo=$valor%$numero_segundo;
                if($comp_divisor_primero==0){
                    echo "$valor es un múltiplo de $numero_primero";
                    echo "<br>";
                }elseif($comp_divisor_segundo==0){
                    echo "$valor es un múltiplo de $numero_segundo";
                    echo "<br>";
                }
            }
        ?>
    </body>
</html>
