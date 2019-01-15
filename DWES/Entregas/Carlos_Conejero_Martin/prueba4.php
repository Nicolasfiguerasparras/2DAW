<html>

<head>
	<meta charset="UTF-8">
	<title>Prueba</title>
</head>
<style type="text/css">

	.primero{
		background-color: #9829a5;
	}

	.segundo{
		background-color: #e1a4e8;
	}
</style>

<body>

	<?php

		$num1=$_GET["numUno"];
		$num2=$_GET["numDos"];
		$num3=$_GET["numTres"];

		$sumaPrimera=$num1+$num2;
		$multiPrimera=$num2*$num3;
		$divPrimera=$num1/$num3;
		$sumGrande=$num1+$num2+$num3;
		$ultima=($num2+$num3)/$num1;

		echo "<table border='1'>";
		echo "		<tr>";
		echo "			<td class='primero'>Valor 1</td>";
		echo "			<td class='segundo'>$num1</td>";
		echo "		</tr>";
		echo "			<td class='primero'>Valor 2</td>";
		echo "			<td class='segundo'>$num2</td>";
		echo "		</tr>";
		echo "			<td class='primero'>Valor 3</td>";
		echo "			<td class='segundo'>$num3</td>";
		echo "		</tr>";
		echo "			<td class='primero'>valor1 + valor2</td>";
		echo "			<td class='segundo'>$sumaPrimera</td>";
		echo "		</tr>";
		echo "			<td class='primero'>valor2 * valor3</td>";
		echo "			<td class='segundo'>$multiPrimera</td>";
		echo "		</tr>";
		echo "			<td class='primero'>valor1 / valor3</td>";
		echo "			<td class='segundo'>$divPrimera</td>";
		echo "		</tr>";
		echo "			<td class='primero'>valor1 + valor2 + valor3</td>";
		echo "			<td class='segundo'>$$sumGrande</td>";
		echo "		</tr>";
		echo "			<td class='primero'>(valor2 + valor3) / valor1</td>";
		echo "			<td class='segundo'>$ultima</td>";
		echo "		</tr>";
		echo "</table>";

	?>
</body>
</html>