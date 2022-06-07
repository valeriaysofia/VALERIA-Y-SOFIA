for(var i=1;i<=10;i++){
    console.log (i)
}
for(var i=10;i>=1;i--){
    console.log (i)
}
var limite=prompt("ingrese el limite")
var sumatoria=0
for(var i=0; i<=limite; i++){
    sumatoria+=i;

}
console.log(sumatoria);

var inicio=prompt("ingrese el incio");
var fin=prompt("ingrese el fin");
for(var i=inicio; i<=fin;  i++){
    if(i%2==0){
    console.log(i);
}
}

var arregloNombres=[];
for(var i=0; i<5; i++){
    var nombre=prompt("ingrese un nombre");
    arregloNombres.push(nombre);
} 
for(var i=0; i <arregloNombres.length; i++ ){ 
console.log("el nombre " +i+" es " + arregloNombres[i])
}

var cantNotas =parseInt(prompt("ingrese la cantidad de notas"));
var arregloNotas= [];
for(var i=0; i<cantNotas; i++){
var nota=parseInt (prompt ("nota " + (i+1))); 
arregloNotas.push (nota);
}

var sumatoria=0;
for(var i=0; i<cantNotas; i++){
sumatoria+=arregloNotas[i];
}
var promedio=sumatoria/cantNotas;
console.log("el promedio de notas es " + promedio);