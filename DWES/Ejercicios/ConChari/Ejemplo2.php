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
		$variable=1000;
		foreach ($numeros as $valor){
			if($valor<$variable){
				$variable=$valor;
			}
		}
		echo $variable;
	?>
   </BODY>
</HTML>