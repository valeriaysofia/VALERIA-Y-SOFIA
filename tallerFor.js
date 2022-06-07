console.log("punto 1")
var num2=parseInt(prompt("ingrese el numero donde va a inciar"))
var limite=prompt("ingrese un numero donde va a terminar")
var sumatoria=0
for(var i=num2; i<=limite; i++){
console.log (i)
}

console.log("punto 2")
var multiplos=prompt("ingrese el numero del que quiera saber su tabla de multiplicar")
for(var i=0; i<=10; i++){
   console.log(multiplos+"x"+i+"="+(multiplos*i)); 
}

console.log("punto 3")
var multi=prompt("ingrese el numero del que quiera saber su  tabla de multiplicar")
var lim3=prompt("ingrese el limite de los multiplos")
for(var i=0; i<=lim3; i++){
   console.log(multi+"x"+i+"="+(multi*i)); 
}

console.log("punto 4")
var arregloNum=[];
for(var i=0; i<10; i++){
    var num=parseInt(prompt("ingrese un numero"));
    arregloNum.push(num);
} 
var mayor=arregloNum[0]
for(var i=0; i <arregloNum.length; i++ ){ 
//si el numero dse la posicion i es mayor que Mayor => mayor=arregloNum[i]
if(arregloNum[i]>mayor){
   mayor= arregloNum[i]
}
}
console.log("el numero mayor es " + mayor)



console.log("punto 5")
var arregloArticulos=[];
for(var i=0; i<5; i++){
var articulo=prompt("ingrese los articulos que va a comprar")
arregloArticulos.push(articulo);
}
var arregloPrecio=[];
for(var i=0; i <arregloArticulos.length; i++ ){ 
   precio=prompt("ingrese el precio de "  + arregloArticulos[i])
   arregloPrecio.push(precio);
   }
   console.log("punto 6")
   var articulo=prompt("ingrese el articulo del cual quiera saber su precio")
   for(var i=0; i <arregloArticulos.length; i++ ){ 
      if (articulo==arregloArticulos[i])
      {console.log ("el precio del articulo es "+ arregloPrecio[i])}
      }
