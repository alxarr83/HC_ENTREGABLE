/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:

  var n=0,j=0;
   var cadena = num.toString();
   cadena=cadena.split("");
   n=cadena.length;
   for(let i=0;i<n;i++){
  
   if(cadena[n-1-i]===cadena[i]){
      j++;
   }
   else {console.log(false);
      break;}
   }

   if (n===j) console.log(true);

}

numeroSimetrico(11711);

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico