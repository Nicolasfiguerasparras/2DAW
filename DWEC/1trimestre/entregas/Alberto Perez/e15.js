let notas = prompt("Ingrese 5 numeros");
let array = notas.split(" ").map(Number);
let media = 0;
let contador = 0;

for(let i = 0 ; i < array.length; i++){
	media += array[i]; 
	contador++;
	
}

media/=contador;
document.write(media);
