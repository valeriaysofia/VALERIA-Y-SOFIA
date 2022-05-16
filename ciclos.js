var CantSaludos = 0; //dando el valor a la variable
 
while(CantSaludos < 10){ // q si la variable es menor a 5
    console.log("Hola ");//muestre el mensaje hola
    CantSaludos += 1;// vaya sumando de 1 en 1 
}
/*
¿Qué debe cambiar si quiere que salude 10 veces? cambiar el 5 por el 10 para q cuente hasta 10
¿Cuántas veces saluda si en vez de  CantSaludos += 1 escribe  CantSaludos += 2 ? Explique por qué

var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}
*/
var ciclo1=0
while(ciclo1<5){
    console.log(2);
    ciclo1 +=1
}


var ciclo2=0
while(ciclo2<8){
    console.log("va en la iteracion " + ciclo2);
   ciclo2+=1
}

var ciclo3=0
while(ciclo3<10){
    console.log("va en la iteracion " + ciclo3);
   ciclo3+=2
}

var ciclo4=prompt("ingrese ok para parar");
while(ciclo4 !="ok"){
    console.log("dijo " + ciclo4);
   ciclo4=prompt("ingrese ok para parar");
}

console.log("punto 5");
ciclo4=prompt("ingrese un negativo para parar");
while(ciclo5 >=0){
    console.log("dijo"+ ciclo5)
ciclo5=prompt("ingrese un negativo para detenerse"); 
}

console.log ("punto 6")
var suma=0
var num1;
var num2;
while(suma <=20){ 
    num1=parseInt(prompt("ingrese un valor"))
    num2=parseInt(prompt("ingrese otro valor"))
    suma=num1+num2;
}