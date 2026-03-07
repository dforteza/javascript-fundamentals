import { paises } from '../paises.js';

/** Ejercicio 1: Unir países en una sola cadena
* Descripción: Escribe una función que convierta el array paises en una cadena donde cada país esté separado por una coma y un espacio.
*/
const ej01 = (arr) => arr.join(", ");

/** Ejercicio 2: Agregar un país al final de la lista
* Descripción: Crea una función que agregue un país al final del array paises.
*/
const ej02 = (arr, pais) => { arr.push(pais); return arr; };

/** Ejercicio 3: Eliminar el primer país de la lista
* Descripción: Escribe una función que elimine el primer país del array y devuelva el país eliminado.
*/
const ej03 = (arr) => arr.shift();

/** Ejercicio 4: Invertir el orden de los países
* Descripción: Crea una función que invierta el orden del array paises.
*/
const ej04 = (arr) => arr.reverse();

/** Ejercicio 5: Obtener una porción de la lista de países
* Descripción: Escribe una función que devuelva los países que se encuentran entre las posiciones 10 y 20 del array paises.
*/
const ej05 = (arr) => arr.slice(10, 21);

/** Ejercicio 6: Ordenar alfabéticamente los países
* Descripción: Crea una función que ordene el array de países alfabéticamente.
*/
const ej06 = (arr) => arr.sort();

/** Ejercicio 7: Agregar países al inicio de la lista
* Descripción: Escribe una función que agregue dos países al inicio del array paises.
*/
const ej07 = (arr, pais1, pais2) => { arr.unshift(pais1, pais2); return arr; };

/** Ejercicio 8: Eliminar y reemplazar países en la lista
* Descripción: Crea una función que elimine 3 países a partir del índice 5 y los reemplace por dos nuevos países.
*/
const ej08 = (arr, nuevo1, nuevo2) => { arr.splice(5, 3, nuevo1, nuevo2); return arr; };

/** Ejercicio 9: Unir dos listas de países
* Descripción: Escribe una función que acepte otro array de países y lo concatene con el array paises.
*/
const ej09 = (arr, otroArr) => arr.concat(otroArr);

/** Ejercicio 10: Eliminar el último país de la lista
* Descripción: Crea una función que elimine el último país de la lista y devuelva el país eliminado.
*/
const ej10 = (arr) => arr.pop();

// ============================================
// PRUEBAS
// ============================================
console.log("Ej01:", ej01([...paises]));
console.log("Ej02:", ej02([...paises], "Japón"));
console.log("Ej03:", ej03([...paises]));
console.log("Ej04:", ej04([...paises]));
console.log("Ej05:", ej05([...paises]));
console.log("Ej06:", ej06([...paises]));
console.log("Ej07:", ej07([...paises], "Corea", "India"));
console.log("Ej08:", ej08([...paises], "Chile", "Perú"));
console.log("Ej09:", ej09([...paises], ["Brasil", "México"]));
console.log("Ej10:", ej10([...paises]));
