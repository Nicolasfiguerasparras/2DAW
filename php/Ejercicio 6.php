<html>
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