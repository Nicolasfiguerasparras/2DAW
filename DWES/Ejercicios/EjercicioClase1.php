<!DOCTYPE html>
<html>
<head>
	<title>EjercicioClase1</title>
</head>
<body>
	<?php
		$dia=date("N");
		if ($dia<=5){
			echo "Hoy es laborable";
		}
		else{
			echo "Hoy no es laborable";
		}
	?>
</body>
</html>