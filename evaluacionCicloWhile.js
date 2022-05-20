//primer punto 

console.log ("punto 1")
var max =prompt("ingrese el numero hasta donde quiere conocer los multiplos de 5")//mostrarle a el usuario el menjase
var numero = 0; //le dice a la variable cuanto vale
while(numero <= max){//que mientras la variable numero seamenor o igual al maximo que de el usuario 
    if((numero%5)==0){ //es para saber  si es multiplo de 5
  console.log(numero + " el", numero, "si es multiplo de 5")
}else{// si no es multiplo de 5
    console.log(numero + " el", numero, "no es multiplo de 5");//se muestra este mensaje
}
numero++;
}

//segundo punto

console.log("punto 2")
var acumulador=0;
var ciclo2=0
var articulos= prompt("p2 cuántos artículos va a registrar")
while(ciclo2<articulos){
var precio = parseInt (prompt ("ingrese el valor del articulo"));
  acumulador+= precio
  ciclo2+=1
}
 console.log("el total a pagar es " + acumulador);

//tercer punto

console.log("punto 3")
var acumulador=0;
var ciclo3=0
while(ciclo3 !="parar"){
  var precio = parseInt (prompt ("p3 ingrese el valor del articulo"));
  acumulador= precio*articulos
 ciclo3=prompt("ingrese parar para que se detenga");
}

  ciclo3+=1
 console.log("el total a pagar es " + acumulador);

//punto 4

console.log("punto 4")
var acumulador4= acumulador
var cantidad4=prompt("p4 desea registrar un articulo") 
var ciclo4=1
while(cantidad4=="si"){ 
var valor4=parseInt(prompt("ingrse el valor"))
acumulador4=ciclo4
cantidad4=prompt("desea registrar un articulo")
}
if(cantidad4>8){
  console.log("tiene un descuento del 10%")
  console.log ("el precio con descuento es de "+(valor4 * 0,10))
}else if (cantidad4>8){
  console.log ("tiene un descuento del 15%")
  console.log ("el precio con descuento es de "+(valor4 * 0,15))
 }else if (cantidad4>15){ 
 console.log("tiene un descuento del 20%")
 console.log ("el precio con descuento es de "+(valor4 * 0,20))
 }else{  (cantidad4>25)
console.log("tiene un descuento del 25%")
console.log ("el precio con descuento es de "+ (valor4 * 0,25))
 }

 // punto 5

console.log ("punto 5")
var limite=prompt("ingrese las notas que requiere")
var cic5=0
var contG=0
var contP=0
while (cic5<limite){
  var notas=prompt("ingrese el valor notas que requiere")
if (notas>3.5)
contG+=1;
else (notas<3.5)
contP+=1;

cic5++
}
if (contG<contP)
console.log("Debe abrirse el curso de verano")
else 
console.log ("La cantidad de estudiantes no es suficiente para curso de verano")
