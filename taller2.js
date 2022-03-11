//punto 1
var lado = prompt("ingrese el lado del cuadrado ");
console.log("el lado vale del cuadrado vale " + lado);
var area
area=lado**2;
console.log("el area del cuadrado vale " + area);

var ladoCubo = prompt("ingrese el lado del cubo ");
console.log("el lado del cubo vale " + ladoCubo);
var volumen
volumen=ladoCubo**3;
console.log("el volumen del cubo es " + volumen);

//punto2
var baseRectangulo = prompt("ingrese la longitud de la base del rectangulo");
console.log(" la longitud de la base vale " + baseRectangulo);
var ladoRectangulo = prompt("ingrese el lado de el rectángulo ");
console.log(" el lado de el rectángulo vale " + ladoRectangulo);
var areaRectangulo
areaRectangulo=ladoRectangulo*baseRectangulo;
console.log("el area del cuadrado vale " + areaRectangulo);

var perimetro
perimetro=2*(ladoRectangulo+baseRectangulo);
console.log("el perimetro del rectangulo " + perimetro)

//punto3
var diametro = prompt ("ingrese el diametro del circulo");
console.log("el diametro del circulo vale "+ diametro); 
var radio
radio=diametro/2
console.log(radio)
var areaCirculo 
areaCirculo=radio *Math.PI;
console.log("el area del circulo es " + areaCirculo)

//punto4
var base1=prompt("ingrese la base del trapezoide");
console.log("la base1 del trapezoide vale "+ base1); 
var base2=prompt("ingrese la base2 del trapezoide");
console.log("la base1 del trapezoide vale "+ base2); 
var areaTrapezoide
areaTrapezoide=1/2* (base1+base2) 
console.log(areaTrapezoide)
console.log("el area del trapezoide es " + areaTrapezoide)

//punto5
var ancho=prompt("ingrese el ancho de la piscina");
console.log("el ancho de la piscina es "+ ancho); 
var largo=prompt("ingrese el largo de la piscina");
console.log("el largo de la piscina es "+ largo); 
var profundidad=prompt("ingrese la profundidad de la piscina");
console.log("la profundidad de la piscina "+ profundidad);
var volumen 
volumen= largo*ancho*profundidad;
console.log (volumen);
console.log ("los litros que llenarian la piscina son " + volumen + "L");

//punto6
var anchoMuro=prompt("ingrese el ancho de el muro");
console.log("el ancho de el muro es "+ anchoMuro); 
var altoMuro=prompt("ingrese el alto de el muro");
console.log("el largo de el muro es "+ altoMuro); 
var areaMuro
areaMuro=(altoMuro*anchoMuro)*22
console.log (areaMuro);
console.log("el precio a pagar para el pintor es " + areaMuro + ".000$")

//punto7
//puntoA
var centimetros=prompt("ingrese la longitud en cm ");
var kilometro1
kilometro1=centimetros*10000;
console.log ("la equivalencia en kilometros es " + kilometro1 +"km");
//puntoB
var decilitros=prompt("ingrese el volumen en decilitros ");
var litro1 
litro1= decilitros/10
console.log ("la equivalencia en litros es " + litro1 + "L")
//puntoC
var microgramo=prompt("ingrese la masa en microgramos ");
var gramo 
gramo= microgramo*100000
console.log ("la equivalencia en gramos es " + gramo +"g")
//
var kilometro=prompt("ingrese la longitud en km ");
var milimetro 
milimetro=kilometro*1000000
console.log("la equivalencia en milimetros es " + milimetro +"ml")
