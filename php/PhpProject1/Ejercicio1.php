<!DOCTYPE html>
<!--Escribir una página en PHP que tenga un array de 5 cadenas. La página
deberá mostrar en una tabla cada cadena indicando de alguna forma si
dicha cadena contiene dentro el símbolo ‘p’-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio1</title>
    </head>
    <body>
        <?php
            $array=array("cadena1","capdena2","cadena3","capdena4","cadena5");
            echo "<table border>";
                echo "<tr>";
                    echo "<td>Cadena</td>";
                    echo "<td>Contiene el símbolo p</td>";
                echo "</tr>";
                for($i=0;$i<count($array);$i++){
                    echo "<tr>";
                        $cadena=$array[$i];
                        echo "<td>$cadena</td>";
                        if(strchr($cadena, 'p')){
                            echo "<td>Tiene mínimo una p</td>";
                        }else{
                            echo "<td>No tiene ninguna p</td>";
                        }
                    echo "</tr>"; 
                }
                   
            echo "</table>";
        ?>
    </body>
</html>
