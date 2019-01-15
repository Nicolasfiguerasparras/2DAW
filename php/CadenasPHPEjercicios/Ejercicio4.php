<!DOCTYPE html>
<!--
Escribir una página en PHP que contenga 5 cadenas de caracteres. El
código PHP deberá comprobar si las cadenas de caracteres comienzan
igual en parejas de 2. Para considerar que empiezan igual deberán tener
al menos los 3 primeros caracteres iguales. Mostrar el resultado en una
tabla de colores.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio4</title>
    </head>
    <body>
        <?php
            $agua="agua";
            $azul="azul";
            $aguacero="aguacero";
            $azucena="azucena";
            $romero="romero";
            echo "<table border>";
                echo "<tr>";
                    echo "<td/>";
                    echo "<td>$agua</td>";
                    echo "<td>$azul</td>";
                    echo "<td>$aguacero</td>";
                    echo "<td>$azucena</td>";
                    echo "<td>$romero</td>";
                echo "</tr>";
                echo "<tr>";
                    echo "<td>$agua</td>";
                    if (strncmp($agua, $agua, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($agua, $azul, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($agua, $aguacero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($agua, $azucena, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($agua, $romero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                echo "</tr>";
                echo "<tr>";
                    echo "<td>$azul</td>";
                    if (strncmp($azul, $agua, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azul, $azul, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azul, $aguacero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azul, $azucena, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azul, $romero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                echo "</tr>";  
                echo "<tr>";
                    echo "<td>$aguacero</td>";
                    if (strncmp($aguacero, $agua, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($aguacero, $azul, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($aguacero, $aguacero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($aguacero, $azucena, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($aguacero, $romero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                echo "</tr>";
                echo "<tr>";
                    echo "<td>$azucena</td>";
                    if (strncmp($azucena, $agua, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azucena, $azul, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azucena, $aguacero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azucena, $azucena, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($azucena, $romero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                echo "</tr>";
                echo "<tr>";
                    echo "<td>$romero</td>";
                    if (strncmp($romero, $agua, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($romero, $azul, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($romero, $aguacero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($romero, $azucena, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                    if (strncmp($romero, $romero, 3) !== 0) {
                        echo "<td bgcolor='#FF0000'/>";
                    }else{
                        echo "<td bgcolor='#008000'/>";
                    }
                echo "</tr>";
            echo "</table>";
                    
        ?>
    </body>
</html>