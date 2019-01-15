<HTML>
   <HEAD>
      <TITLE>Ejercicio 1</TITLE>
      <meta charset="UTF-8">
   </HEAD>
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