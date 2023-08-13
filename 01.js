/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
   var array1=[],j=0;
    n=array.length;
    for(let i=0;i<n;i++){
        if (typeof(array[i])=='number'){
        array1[j]=array[i];
        j++;}
        else array[i]=array[i];}
    
  console.log(array1);
  }
soloNumeros(array=[1,5,7,'solo','boca',31,'alex',25,'river']); 



// No modifiques nada debajo de esta linea //


module.exports = soloNumeros