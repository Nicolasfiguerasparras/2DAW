var decodifica = function(codigoMorse){
  var palabras = (codigoMorse).split('  ');
  var letras = palabras.map((w) => w.split(' '));
  var decodificado = [];
  for(var i = 0; i < letras.length; i++){
    decodificado[i] = [];
    for(var x = 0; x < letras[i].length; x++){
      if(morse[letras[i][x]]){
          decodificado[i].push( morse[letras[i][x]] );
      }
    }
  }
  return decodificado.map(arr => arr.join('')).join(' ');
}