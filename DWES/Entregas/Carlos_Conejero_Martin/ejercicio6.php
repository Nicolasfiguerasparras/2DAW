<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ejercicio 6</title>
	<style>
		table {
			border: 1px solid green;
		}

		th {
			background: green;
		}
	</style>
</head>
<body>
	<?php
		$cadena = array("Cacerola", "Extraterrestre", "Rata", "Rambo", "Carlos", "Garrapata");

		echo "<table>
				<tr>
					<th>Cadena</th>
					<th>Ocurrencias r</th>
				</tr>
				<tr>
			";

		for ($i=0; $i < count($cadena); $i++) {
			$convertirCad = strtolower($cadena[$i]);
			$contador = count_chars($convertirCad,"r");

			echo "<td>$cadena[$i]</td>";
			echo "<td>$contador</td>";
		}

		echo "</tr></table>";

	?>
</body>
</html>