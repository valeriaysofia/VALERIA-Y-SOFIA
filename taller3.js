var piscina
piscina = prompt ("digite la cantidad de litros que caben en la piscina");
var hora = piscina*1/145
console.log("se demora " + hora + "horas para llenar la piscina");
//2
var milimetros
var metros
metros =prompt("digite un valor en metros que quieras convertir a milimetros") ;
milimetros=metros*1000
console.log ("la equivalencia de "+ metros+"m en milimetros es " + milimetros + "mm");
//3
var decimetros
decimetros=milimetros/100
console.log("la equivalencia en decimetros es de " + decimetros +"dm");
//4
var kilometros
kilometros=decimetros/10000
console.log("la equivalencia en kilometros es de " +  kilometros + "km");
//5
var horas
var total
horas=prompt("digite la cantidad de horas que hablo por llamada");
total= horas*60*120
console.log("el precio a pagar es de "+ total + " pesos");
//6
var horasClas
var precio
horasClas = prompt("digite la cantidad de horas que duro la clase");
precio = (horasClas-1)*(25000)+40000
console.log ("el precio de la clase es de " + precio+ " pesos");