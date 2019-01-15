<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo2</title>
</head>
<body>
	<?php
		$num1=29;
		$num2=65;
		$suma=$num1+$num2;
		echo "<table border=2>";
		echo "
			<tr>
				<td>Número 1</td>
				<td>Número 2</td>
				<td>Suma</td>
			</tr>
			<tr>
				<td>$num1</td>
				<td>$num2</td>
				<td>$suma</td>
			</tr>";
	?>
	<p>También se puede llamar a una variable en mitad de un código metiendo php tal que así: <?php echo $num1 ?></p>
</body>
</html>