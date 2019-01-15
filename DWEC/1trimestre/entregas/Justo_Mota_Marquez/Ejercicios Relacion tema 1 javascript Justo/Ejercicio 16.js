let dni = ["T", "R", "W", "A", "G", "M", "Y", 
		   "F", "P", "D", "X", "B", "N", "J",
		   "Z", "S", "Q", "V", "H", "L", "C",
		   "K", "E"];

let num = parseInt(prompt("Introduce un DNI: "));

if ( num > 9999999 && num < 100000000) {
	let letra = num % 23;

	alert(dni[letra]);
}else{
	alert("Error. El numero debe tener 8 numeros");
}
