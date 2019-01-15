<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio1</title>
</head>
<body style="background-color:powderblue;">
	<?php
		$var1='Hola mundo';
		$var2=35;
		$var3=3.5;
		echo"
			<table border>
				<tr align=center>
					<td><b>Tipo</b></td>
					<td><b>Valor</b></td>
				</tr>
				<tr>
					<td>String (aqui deberia de sacar el tipo)</td>
					<td>$var1</td>
				</tr>
				<tr>
					<td>Int</td>
					<td>$var2</td>
				</tr>
				<tr>
					<td>Float</td>
					<td>$var3</td>
				</tr>
			</table>
		";
	?>
</body>
</html>