/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  
  var n=funcion.length,j=0;
  var arrayF=[];

    for(let i=0;i<n;i++){
   // console.log(funcion[i]);
    if(funcion[i]===true){
      arrayF[j]=productos[i];
      j++;
    }
  }
   console.log(arrayF);
    return arrayF;
  
 
   

};

Array.prototype.p =function (array,propiedad)
{
  var array1=[];
  var n=array.length;
  for(let i=0;i<n;i++){
    if (array[i][propiedad]>=50){
      array1[i]=true;
      //console.log(array1[i]);
    }
      else array1[i]=false;
}
console.log(array1);
return array1;
}

var productos = [{price: 100,name: 'tv'}, {price: 50,name: 'phone'}, {price: 30,name: 'lamp'}] 
var NA=productos.p(productos,'price');
filtrar(productos.p(productos,'price'));

// [{price: 100, name:'tv'}];


// No modifiques nada debajo de esta linea //

module.exports = filtrar