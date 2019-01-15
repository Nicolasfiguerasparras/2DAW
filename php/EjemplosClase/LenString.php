<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $cadena="abecedario";
            $longitud=strlen($cadena);
            echo "<table border>";
                $contador=0;
                echo "<tr>";
                    echo "<td>Carácter</td>";
                    echo "<td>Posición</td>";
                echo "</tr>";
                while($contador<$longitud){
                    echo "<tr>";
                        echo "<td>$cadena[$contador]</td>";
                        echo "<td>$contador</td>";
                    echo "</tr>";
                    $contador++;
                }
            echo "</table>";
        ?>
    </body>
</html>
