<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo3</title>
</head>
<body>
	<?php
		$num1=25;
		$num2=13;
		$suma=$num1+$num2;
		$multiplicacion=$num1*$num2;
		$resta=$num1-$num2;
		$division=$num1/$num2;
		echo "<table border=2>";
		echo "
			<tr>
				<td>Operación</td>
				<td>Resultado</td>
				<td>Operación</td>
				<td>Resultado</td>
			</tr>
			<tr>
				<td>$num1 + $num2</td>
				<td>$suma</td>
				<td></td>
				<td>$multiplicacion</td>
			</tr>
			<tr>
				<td></td>
				<td>$resta</td>
				<td></td>
				<td>$division</td>
			</tr>";
	?>
</body>
</html>