console.log("Hola mundo");
// comentarios en linea
/*comentario 
de 
varias 
lineas 
*/

var nombreUsuario; 
let edadUsuario;
/* declarar Variables
*/
var nombreVariable;
//crear variable sin asignar valor 
/*
inicializar variables:
asignar un valor a el momento de crear la variable
*/
var gradoEstudiante="10A";
/*asignar un valor:
igualar una variable existente a un nuevo valor*/
edadUsuario=16;
//asignar valor desde otra variable
console.log(edadUsuario);
var edad=17
edadUsuario=edad;
console.log(edadUsuario)
/*asignar valor desde el teclado:
existen dos maneras de hacerlo, la primera es por ventana emergente y la segunda es por medio de un formulario en html
*/
var valor= prompt("ingrese un valor ");
console.log("la variable vale " + valor);
/*
constante: son valores que no pueden ser cambiados durante la ejecucion del codigo. las constantes siempre deben ser inicializadas
*/
const  PI = 3.1416;
//imPrimir Por consola
//simple 
console.log ("xd");
console.log (valor);
//concatenado 
console.log ("esto vale " + valor );
//operadores//
//suma//
var suma;
suma=5+4;
console.log(suma);
var a=12
suma =a+8
console.log(suma);
var b=20;
suma =a+b
console.log(suma);
//resta//
var resultado= a-b;
console.log (resultado);
resultado=b-a
console.log(resultado);
//multipicacion //
var producto;
producto=a*b;
console.log(producto);
//division//
var division;
division=a/b;
console.log(division);
divison=b/a
console.log(division);
var result;
result=a*b;
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);
var exp=3**2; 
console.log(exp);
//cadenas o string//
var cadenita1="3";
var cadenita2="5";
var sumacadenas= cadenita1+cadenita2;
console.log(sumacadenas);
var nombrecito= "Valeria";
var apellidito="Ramirez";
var nomCompleto= nombrecito+" "+apellidito;
console.log(nomCompleto);
var longitud=nombrecito.length;
console.log(longitud);
//encontrar caracteres dada la posicion en el vector//
var primeraLetra;
primeraLetra=nombrecito[0];
console.log(primeraLetra)
console.log(nombrecito[1]);
//encontrar la ultima posicion de una cadena o vector
nombrecito[nombrecito.length-1]
console.log(nombrecito[nombrecito.length-1]);
//se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra
//valores inmutables
//las posiciones de una cadena se pueden consultar pero no se puede reasignar su valor
nombrecito[0]="P"
console.log(nombrecito);
//ParSeo o Casting
/*se trata de convertir las variables a otro tipo de datos los cambios existentes son:
*a entero parseInt()
*a decimal parseFloat()
*a cadena String ()
*/
//convertir variables
var entero1=prompt("ingrese un entero")
var entero2=prompt("ingrese otro entero")
var sumaE =entero1 + entero2;
console.log ("sin parseInt" + sumaE);
//forma1
/*convertir el dato justo en el momento en el que se recibe por teclado
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/
entero1=parseInt (prompt("ingrese un entero"));
entero2=parseInt(prompt("ingrese otro entero"))
sumaE =entero1 + entero2;
console.log("convertido "+ sumaE);

//taller solicitar la altura del rectagulo solicitar la base del rectangulo
 altura=parseInt (prompt("ingrese la altura del rectangulo"));
 base=parseInt (prompt("ingrese la base del rectangulo"));
perimetro= altura + base + altura + base;
console.log("convertido" + perimetro);