<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $array["Granada"]=150000;
            $array["Madrid"]=3000000;
            $array["Barcelona"]=2879200;
            $array["Málaga"]=240000;
            $array["Sevilla"]=50000;
            $array["Valencia"]=1584600;
            $array["Tarragona"]=485210;
            echo "<table>";
                for($i=0;$i<7;$i++){
                    echo "<tr>";
                        echo "<td>key($array)</td>";
                        echo "<td>current($array)</td>";
                    echo "</tr>";
                }
            echo "</table>";
        ?>
    </body>
</html>
