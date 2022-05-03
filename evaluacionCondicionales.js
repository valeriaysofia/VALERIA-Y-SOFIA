//punto 1
var ValorVariable= 200;
 
if (ValorVariable < 210){
   console.log("La condición es verdadera")
}

//punto 2
var valor= 80;
 
if (valor >= 60 || valor <= 10){
   console.log("El valor es correcto")
}

//punto3 
var numero=29;
 
if (numero===20){
   console.log('El número es igual que "20" en valor y tipo');
}else if(numero>30 && numero<40){
    console.log('El número es mayor que 30 y menor a 40');
}else if(numero==30 || numero<=29){
    console.log("El número es igual que 30 o menor igual que 29");
}else if(numero>=40){
    console.log("El número es mayor igual que 40");
}

//Respuesta 3.A
numero=20
//Respuesta 3.B
    numero=35
//Respuesta 3.C
    numero=29
//Respuesta 3.D
    numero=45
    
    //punto 4
var numero1=6
var numero2=2
var operacion="resta"
if(operacion=="suma"){ 
console.log("el resultado de la suma es " +(numero1+numero2));
}else if(operacion="resta"){ 
    console.log("el resultado de la resta es " +(numero1-numero2));
}else if(operacion="multiplicacion"){ 
    console.log("el resultado de la multiplicacion es " +(numero1*numero2));
 }

 //punto 5
 var producto="sandwich"
if (producto=="sandwich"){
  console.log("el precio del sanwich es de $2500")
}
else if (producto=="churro"){
  console.log("el precio del churro es de $2000")
}
else if (producto=="salchipapa"){
  console.log("el precio del salchipapa es de $2800")
}
else if (producto=="empanada"){
  console.log("el precio del empanada es de $1000")
}

//punto6
var evento="cumpleaños adulto"
var personas="5"
if (evento=="boda"){
  console.log("el precio del boda es $" + (150000+5*25000))
}
else if (evento=="cumpleaños adulto"){
  console.log("el precio de cumpleaños adulto es $"+(65000+5*25000))
}
else if (evento=="cumpleaños niño"){
  console.log("el precio de cumpleaños niños es $"+(95000+5*25000))
}
else if (evento=="cena romantica"){
  console.log("el precio de cena romantica es $"+(45000+5*25000))
}

