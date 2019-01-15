<HTML>
   <HEAD>
      <TITLE></TITLE>
   </HEAD>
   <BODY>
	<?php
		$coche['marca']="Seat";
		$coche['modelo']="Ibiza";
		$coche['puertas']=5;
		$coche['año']=2015;
		echo "<table border>";
		echo "<tr><td>Marca</td><td>Modelo</td>";
		echo "<td>Puertas</td><td>Año</td>";
		echo "</tr>";
		foreach ($coche as $valor){
			echo "<td> $valor </td>";
		}
		echo "</tr></table>";
	?>
   </BODY>
</HTML>