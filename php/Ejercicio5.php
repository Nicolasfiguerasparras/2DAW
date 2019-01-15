<!--Crear una página en PHP que tenga 3 cadenas de caracteres y las
muestre en una tabla ordenadas en orden alfabético.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 5</title>
    </head>
    <body>
        <?php
            $array=array("palabra","asignatura","base");
            sort($array);
            foreach($array as  $val) { 
                echo "$val <br>";
            }
        ?>
    </body>   
</html>