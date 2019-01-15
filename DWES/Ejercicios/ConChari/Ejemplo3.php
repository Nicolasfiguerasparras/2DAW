<HTML>
   <HEAD>
      <TITLE></TITLE>
   </HEAD>
   <BODY>
	<?php
		$numeros[]=400;
		$numeros[]=7;
		$numeros[]=5;
		$numeros[]=2015;
		$numeros[]=2018;
		$contador=0;
		foreach ($numeros as $valor){
			$contador=$contador+1;
		}
		echo $contador;
	?>
   </BODY>
</HTML>