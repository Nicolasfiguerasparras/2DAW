<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio2</title>
</head>
<style>
	table {
	    border-collapse: collapse;
	    width: 20%;
	}

	th, td {
	    text-align: left;
	    padding: 8px;
	}

	tr{
		width: 20%;
	}

	tr{
		background-color: #f2f2f2;
	}

	th {
	    background-color: #4CAF50;
	    color: white;
	    width: 10%;
	}

</style>
<body>
	<?php
		$matriz1[0]="Dato 0";
		$matriz1[1]="Dato 1";
		$matriz1[2]="Dato 2";
		$matriz1[3]="Dato 3";
		$matriz1[4]="Dato 4";
		echo "
			<table border=4>
				<tr>
					<th>0</th>
					<td>$matriz1[0]</td>
				</tr>
				<tr>
					<th>1</th>
					<td>$matriz1[1]</td>
				</tr>
				<tr>
					<th>2</th>
					<td>$matriz1[2]</td>
				</tr>
				<tr>
					<th>3</th>
					<td>$matriz1[3]</td>
				</tr>
				<tr>
					<th>4</th>
					<td>$matriz1[4]</td>
				</tr>
			</table>
		";
	?>
</body>
</html>