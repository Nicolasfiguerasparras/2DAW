let numb1, numb2, numb3, numb4, media;

numb1 = parseFloat(prompt("Introduce un número"));
numb2 = parseFloat(prompt("Introduce otro número"));
numb3 = parseFloat(prompt("Introduce uno más número"));
numb4 = parseFloat(prompt("Introduce el último número"));

media = (numb1 + numb2 + numb3 + numb4) / 4;

alert("La media de " + numb1 + ", " + numb2 + ", " + numb3 + " y " + numb4 + " es igual a " + media);