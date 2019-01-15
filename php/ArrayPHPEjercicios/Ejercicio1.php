<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio1</title>
    </head>
    <body>
        <?php
            $contador=0;
            while($contador<12){
                $vector[] = mt_rand(1,1000);
                $contador++;
            }
            echo "<table border>";
                echo "<th>Vector original";
                    $cont=1;
                    echo "<td>$vector[0]";
                    while($cont<12){
                        echo " - $vector[$cont]";
                        $cont++;
                    }
                echo "</td></th>";
                echo "<tr>";
                    $mayor=0;
                    for($i=0;$i<12;$i++){
                        if($vector[$i]>$mayor){
                            $mayor=$vector[$i];
                        }
                    }
                    echo "<td>Mayor</td>";
                    echo "<td>$mayor</td>";
                echo "</tr>";
                echo "<tr>";
                    $menor=1000;
                    for($i=0;$i<12;$i++){
                        if($vector[$i]<$menor){
                            $menor=$vector[$i];
                        }
                    }
                    echo "<td>Menor</td>";
                    echo "<td>$menor</td>";
                echo "</tr>";
                echo "<tr>";
                    echo "<td>Vector inverso</td>";
                    $inverso=array_reverse($vector);
                    $conta=1;
                    echo "<td>$inverso[0]";
                    while($conta<12){
                        echo " - $inverso[$conta]";
                        $conta++;
                    }
                    echo "</td>";
                echo "</tr>";
                echo "<tr>";
                    echo "<td>Vector ordenado</td>";
                    $vector_ordenado = $vector;
                    sort($vector_ordenado);
                    $contad=1;
                    echo "<td>$vector_ordenado[0]";
                        while($contad<12){
                            echo " - $vector_ordenado[$contad]";
                            $contad++;
                        }
                    echo "</td>";
                echo "</tr>";
                echo "<tr>";
                    echo "<td>Vector solo pares</td>";
                    echo "<td>";
                        for($i=0;$i<12;$i++){
                            $comp=$vector[$i]%2;
                            if($comp==0){
                                echo "$vector[$i] -";
                            }
                        }
                    echo "</td>";
                echo "</tr>";
                echo "<tr>";
                    echo "<td>Vector solo impares</td>";
                    echo "<td>";
                        for($i=0;$i<12;$i++){
                            $comp=$vector[$i]%2;
                            if($comp!=0){
                                echo "$vector[$i] -";
                            }
                        }
                    echo "</td>";
                echo "</tr>"; 
            echo "</table>";
        ?>
    </body>
</html>