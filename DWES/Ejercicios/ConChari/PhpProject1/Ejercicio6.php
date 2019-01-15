<!--Crear una página en PHP que muestre las tablas de multiplicar-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 6</title>
    </head>
    <style type='text/css'>
        tr:nth-child(odd) {
            background-color: blueviolet;
        }
        tr:nth-child(even) {
            background-color: cyan;
        }
    </style>
    <body>
        <?php
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