<!--Crear un documento PHP que cree un array de al menos 4 posiciones.
Después el documento mostrará una tabla con el cuadrado y el cubo de cada valor.-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 8</title>
    </head>
    <body>
        <?php
            $array[]=15;
            $array[]=68;
            $array[]=48;
            $array[]=245;
            $array[]=856;
            for($tabla=1; $tabla<=10; $tabla++){
                echo "<table border=1 cellspacing=0>";
                for($i=1; $i<=10; $i++){
                    echo "<tr><td align=center><b>$tabla x $i</b></td>
                    <td align=center> ". ($tabla*$i) . "</td>
                    </tr>";
                }
                echo "</table> <br/>";
            }
        ?>
    </body>
</html>
