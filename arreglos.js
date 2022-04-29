/*los arreglos son estructuras de cualquier tipo de datos, es decir string, int, double, array, objetos, entre.Los arreglos tienen operaciones tales como consultar,modificar, insertar y eliminar
los arreglos se declaran con corchetes []

creacion de arreglos
*/
var arreglo=["juan",14]
console.log (arreglo);

var notasEstudiantes=[["sofia",4.8],["isa",4.0]]
console.log (notasEstudiantes);
//consultar contenido del arreglo
console.log(notasEstudiantes[0])
console.log(notasEstudiantes[0][0]);

//modificar elementos
console.log(arreglo[0]+" tiene "+arreglo[1]+" años");
arreglo[1]=15;
console.log(arreglo[0]+" tiene "+arreglo[1]+" años");


notasEstudiantes[1][1]=5
console.log(notasEstudiantes[1][0] + " obtuvo "+ notasEstudiantes[1][1]+ " como nota final")
console.log(notasEstudiantes[0][0] + " obtuvo "+ notasEstudiantes[0][1]+ " como nota final")


//agregar elementos al arreglo
console.log("sin agregar " + arreglo);
arreglo.push("10a");
console.log("agregado " + arreglo);

//agregar elementos al arreglo desde el inicio
console.log("sin agregar " + arreglo);
arreglo.unshift("  perez");
console.log("agregado " + arreglo);

//eliminar elementos al arreglo 
console.log("sin eliminar " + arreglo);
arreglo.pop();//elimina el ultimo dato
console.log("eliminado " + arreglo);
arreglo.shift();//elimina el primer elemento
console.log("elimina.shift"+ arreglo)
//ejercicio

/*1. Crear el arreglo con los valores
-analisis 6
-tecnologia 
-desarrollo
2. cambiar desarrollo por BBDD 17
3. convertir el vector en:26 41
-introduccion
-analisis
-tecnologia 
*/
var arreglo =["analisis,tecnologia, desarollo"]
arreglo[2]=BBDD;

//agregar elementos al arreglo
console.log("sin agregar " + arreglo);
arreglo.push("10a");
console.log("agregado " + arreglo);

//agregar elementos al arreglo desde el inicio
console.log("sin agregar " + arreglo);
arreglo.unshift("  perez");
console.log("agregado " + arreglo);

//eliminar elementos al arreglo 
console.log("sin eliminar " + arreglo);
arreglo.pop();//elimina el ultimo dato
console.log("eliminado " + arreglo);
arreglo.shift();//elimina el primer elemento
console.log("elimina.shift"+ arreglo)

