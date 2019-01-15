<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio3</title>
</head>
<style>
	table {
	    border-collapse: collapse;
	    width: 10%;
	}

	th, td {
	    text-align: left;
	    padding: 8px;
	}

	tr{
		width: 20%;
	}

	tr{
		background-color: #f2f2f3;
	}

	th {
	    background-color: blue;
	    color: white;
	    width: 60%;
	}

</style>
<body>
	<?php
		$matriz1[0]="Valor 1";
		$matriz1[1]="Valor 2";
		$matriz1[2]="Valor 3";
		$matriz1[3]="1 + 2";
		$matriz1[4]="2 * 3";
		$matriz1[5]="1/3";
		$matriz1[6]="1+2+3";
		$matriz1[7]="(2+3)/1";
		echo "
			<table border=4>
				<tr>
					<th>$matriz1[0]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[1]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[2]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[3]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[4]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[5]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[6]</th>
					<td></td>
				</tr>
				<tr>
					<th>$matriz1[7]</th>
					<td></td>
				</tr>
			</table>
		";
	?>
</body>
</html>