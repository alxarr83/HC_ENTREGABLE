/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  var arrayLengths=[],n;
  let i=0,j=0,c=0;

  n=strings.length;

  for (i=0;i<n;i++){
    arrayLengths[i]=strings[i].length;
  }
  
  for (i=0;i<n;i++){
    for (j=0;j<n;j++){
      if(arrayLengths[i]>arrayLengths[j]){
        c=arrayLengths[j];
        arrayLengths[j]=arrayLengths[i];
        arrayLengths[i]=c;

      }
      //else strings[i]=strings[i];
      
      
    }
        
  }
  console.log(arrayLengths);

  for (i=0;i<n;i++){
    if(strings[i].length==arrayLengths[0])
    console.log(strings[i])
  }
}
stringMasLarga(strings=['alejandro','paragaricutirimicuaro','a','solo','pi','exacto']);
// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga