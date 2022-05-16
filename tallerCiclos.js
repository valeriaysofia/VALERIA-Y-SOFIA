console.log("punto 1")
var ciclo1=0
while(ciclo1<7){
    console.log("va en la iteracion " + ciclo1);
   ciclo1+=1
}

console.log("punto 2")
var ciclo2=0
while(ciclo2<30){
    console.log("multiplo 3 " + ciclo2);
   ciclo2+=3
}

console.log("punto 3")
var ciclo3=0
while(ciclo3<50){
    console.log("par " + ciclo3);
   ciclo3+=2
}

console.log("punto 4");
var ciclo4=1
var lim=prompt("ingrese un numero para mostrar los impares");
while(ciclo4 < lim){
    console.log("numero impar "+ ciclo4)
   ciclo4+=2

}


console.log ("punto 5")
var numero = 0;

numero = prompt('Indique un número: ', '');
while ((numero % 2) == 0){
  console.log(numero + ' es par');
}




console.log("punto 6")
var acumulador = 0; //debe estar inicializado, por lo general en cero
var ciclo6=0
var estudiantes=parseInt (prompt("ingrese la cantidad de estudiantes para comenzar"));

while(ciclo6<estudiantes){
  
  var edad =prompt("ingrese una edad");
  acumulador+= edad
  ciclo6+=1
}
 console.log("el acumulado de las edades es" + acumulador);

 

console.log("punto 7")
var ciclo7=prompt("ingrese un color para la rifa");
while(ciclo7 !="azul"){
    console.log("dijo " + ciclo7);
   ciclo7=prompt("ingrese un color para la rifa");
}
console.log("felicitaciones ganó la rifa")
