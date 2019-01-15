<!--Codificar una página en PHP que muestre por pantalla las 10 primeras
potencias de un número.-->
<HTML>
   <head>
        <meta charset="UTF-8">
        <title>Ejercicio 1</title>
    </head>
   <BODY>
	<?php
		$contador=1;
		$numero=5;
		$potencia=$numero;
		while($contador<=10){
			echo "Potencia $contador del número $numero: $potencia";
			$potencia=$numero*$potencia;
			$contador++;
			echo "<br>";
		}
	?>
   </BODY>
</HTML>