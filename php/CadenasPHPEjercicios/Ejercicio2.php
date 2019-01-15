<!DOCTYPE html>
<!--
Codificar un documento PHP que tenga un array de varias cadenas. El
documento mostrará para cada una de las cadenas si contienen alguno
de los siguientes caracteres: $, C, / o @. Con que la cadena contenga
uno de ellos es suficiente. 
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio2</title>
    </head>
    <body>
        <?php
            $array=array("ca/dCena1","ca/dCen@a2","caden$@a3","cade@Cna4","caCdena$5");
            echo "<table border>";
                echo "<tr>";
                    echo "<td align='center'><b>Cadena</b></td>";
                    echo "<td align='center'><b>Contiene alguno de los símbolos $, C, / o @</b></td>";
                echo "</tr>";
                for($i=0;$i<count($array);$i++){
                    echo "<tr>";
                        $cadena=$array[$i];
                        $noentra=true;
                        echo "<td>$cadena</td>";
                        echo "<td>";
                        if(strchr($cadena, '$')){
                            echo "Tiene mínimo un símbolo $";
                            $noentra=false;
                            echo "<br>";
                        }
                        if(strchr($cadena, 'C')){
                            echo "Tiene mínimo un símbolo C";
                            $noentra=false;
                            echo "<br>";
                        }
                        if(strchr($cadena, '/')){
                            echo "Tiene mínimo un símbolo /";
                            $noentra=false;
                            echo "<br>";
                        }
                        if(strchr($cadena, '@')){
                            echo "Tiene mínimo un símbolo @";
                            $noentra=false;
                            echo "<br>";
                        }
                        if($noentra=true){
                            echo "No tiene ningún símbolo";
                        }
                        echo "</td>";
                    echo "</tr>"; 
                }
            echo "</table>";
        ?>
    </body>
</html>
