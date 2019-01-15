<!DOCTYPE html>
<!--
Codificar un documento PHP que partiendo de una cadena de
caracteres cualquiera, la rellene con 5 “-“ por delante y 3 “,” por detrás.
Después mostrará en una tabla la cadena antes de la transformación y
después de la transformación. 
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio3</title>
    </head>
    <body>
        <?php
            $cadena="osdijfsd";
            $cadena2=str_repeat("-", 5);
            $cadena3=str_repeat(",", 3);
            $cadena_semifin=$cadena2.$cadena;
            $cadena_fin=$cadena_semifin.$cadena3;
            echo $cadena_fin;
        ?>
    </body>
</html>
