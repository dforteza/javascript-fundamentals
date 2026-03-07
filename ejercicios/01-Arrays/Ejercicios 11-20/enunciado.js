import { paises } from "../paises.js"

/** Ejercicio 1: Agregar y ordenar países
* Descripción: Crea una función que agregue un nuevo país al final de la lista y luego ordene el arreglo alfabéticamente.
*/
const ej01 = (arr, p) => {
    arr.push(p);
    arr.sort();
    return arr;
}

/** Ejercicio 2: Eliminar y unir países
* Descripción: Escribe una función que elimine el primer país y luego una otro arreglo de países al final.
*/
const ej02 = (arr, arr2) => {
    arr.shift();
    return arr.concat(arr2);
}


/** Ejercicio 3: Obtener y modificar un rango de países
* Descripción: Crea una función que obtenga los países entre los índices 5 y 10, los elimine del arreglo original y los reemplace por dos nuevos países.
*/

const ej03 = (arr, p1, p2) => {
    arr.splice(5, 5, p1, p2)
    return arr;
}



/** Ejercicio 4: Unir, invertir y obtener longitud
* Descripción: Crea una función que una dos arreglos de países, invierta el resultado y devuelva la longitud del nuevo arreglo.
*/



/** Ejercicio 5: Reemplazar y unir cadenas
* Descripción: Escribe una función que reemplace el primer país del arreglo por otro y luego devuelva una cadena de los países unidos por un guion.
*/


/** Ejercicio 6: Eliminar y obtener subarreglo
* Descripción: Crea una función que elimine el último país y devuelva un subarreglo de los primeros 5 países.
*/


/** Ejercicio 7: Ordenar y obtener la longitud
* Descripción: Escribe una función que ordene el arreglo de países y devuelva la longitud del nuevo arreglo ordenado.
*/


/** Ejercicio 8: Eliminar y unir países con un nuevo
* Descripción: Crea una función que elimine el primer y último país y luego agregue un nuevo país al inicio.
*/

/** Ejercicio 9: Unir, ordenar y eliminar
* Descripción: Escribe una función que una dos arreglos de países, los ordene alfabéticamente y elimine el último país del nuevo arreglo.
*/


/** Ejercicio 10: Cambiar y mostrar resultado
* Descripción: Crea una función que cambie el tercer país y luego devuelva la cadena de los países unidos con una coma y un espacio.
*/


// ============================================
// PRUEBAS
// ============================================
console.log("EJ01: ", ej01([...paises], "Uganda"));
console.log("EJ02: ", ej02([...paises], ["Peru", "España"]));
console.log("EJ03: ", ej03([...paises], "Indonesia", "Malasia"));
