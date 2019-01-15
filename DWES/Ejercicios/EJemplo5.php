<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo5</title>
</head>
<body>
	<?php
		$matriz1['nombre']='Juan';
		$matriz1['apellido']='Fernandez';
		$matriz1['35']='35';
		$matriz1['edad']=null;
		echo "
			<table border>
				<tr>
					<td>$matriz1[nombre]</td>
					<td>$matriz1[apellido]</td>
				</tr>
			</table>
		";
	?>;
</body>
</html>