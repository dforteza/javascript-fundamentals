/**
 ***************************************************
 ********************* ARRAYS ********************** 
 *************************************************** 
 * 
 * Un array es una asignacion lineal de memoria donde los elementos son accedidos a traves de indices numericos.
 * 
 * JavaScript utiliza un tipo de arrays distinto, pues utiliza objetos que disponen de caracteristicas que le hacen parecer un array.
 * 
 * Internamente convierte los indices del array en strings que son utilizados como nombres de propiedades.
 * 
 * Ejemplos:
 * var arrayVacio = [];
 * 
 * var arrayNumeros = [
 *      'uno', 'dos', 'tres'
 * ];
 * 
 * arrayVacio[1];           // undefined
 * arrayNumeros[1];         // 'dos'
 * 
 * arrayVacio.length        // 0
 * arrayNumeros.length      // 3
 * 
 * Si representamos el array como un objeto:
 * 
 * var arrayNumeros2 = {
 *      '0': 'uno',
 *      '1': 'dos',
 *      '2': 'tres'
 * }
 * 
 * Ambos arrays contienen 3 propiedades y estas propiedades tienen los mismos nombres y valores.
 * La diferencia esta en que:
 * - arrayNumeros: hereda de Array.prototype.
 * - arrayNumeros2: hereda de Object.prototype.
 * 
 * Array.prototype y Object.prototype son dos objetos especiales en JavaScript que proporcionan un conjunto de propiedades y métodos que se heredan automáticamente a través de la cadena de prototipos de los objetos creados a partir de ellos.
 * 
 * -    Array.prototype es el prototipo del objeto Array. Cualquier objeto Array creado a partir de Array() o el constructor Array tiene acceso a las propiedades y métodos en Array.prototype, como por ejemplo el método push(), pop() o join().
 * -    Object.prototype es el prototipo del objeto Object. Cualquier objeto creado a partir de Object() o el constructor Object tiene acceso a las propiedades y métodos en Object.prototype, como por ejemplo el método toString().
 * 
 * La diferencia entre ambos radica en el tipo de objeto que se crea y hereda las propiedades y métodos del prototipo, mientras Array.prototype se utiliza para crear y manipular arreglos en javascript, Object.prototype es el prototipo base de todos los objetos en javascript.
 * En resumen Array.prototype es específico para arreglos mientras que Object.prototype es para cualquier objeto en javascript, todos los objetos heredan las propiedades y métodos de Object.prototype.
 * 
 ***************************************************
 ********************* METODOS ********************* 
 *************************************************** 
 * 
 * 
 * Array.prototype.concat(arr1, arr2, ...)                              - Devuelve un nuevo array compuesto por los elementos del array actual seguidos de los elementos de los arrays pasados como argumentos.
 * Array.prototype.join(separator)                                      - Devuelve una cadena formada por los elementos del array unidos con el separador especificado.
 * Array.prototype.pop()                                                - Extrae el último elemento del array y lo devuelve.
 * Array.prototype.push(element1, element2, ...)                        - Añade uno o varios elementos al final del array y devuelve la nueva longitud del array.
 * Array.prototype.reverse()                                            - Invierte el orden de los elementos del array y lo devuelve.
 * Array.prototype.shift()                                              - Extrae el primer elemento del array y lo devuelve.
 * Array.prototype.slice(start, end)                                    - Devuelve un nuevo array compuesto por los elementos del array desde la posición start hasta la posición end-1.
 * Array.prototype.sort()                                               - Ordena los elementos del array y lo devuelve.
 * Array.prototype.splice(start, deleteCount, element1, element2, ...)  - Añade o elimina elementos de un array y devuelve los elementos eliminados.
 * Array.prototype.unshift(element1, element2, ...)                     - Añade uno o varios elementos al principio del array y devuelve la nueva longitud del array.
 * 
 * 
 * Ejemplos:
 * 
 * concat:
 * let array1 = [1, 2, 3];
 * let array2 = [4, 5, 6];
 * let array3 = array1.concat(array2);
 * console.log(array3); // [1, 2, 3, 4, 5, 6]
 * 
 * 
 * join:
 * let array = [1, 2, 3];
 * let string = array.join(", ");
 * console.log(string); // "1, 2, 3"
 * 
 * 
 * pop:
 * let array = [1, 2, 3];
 * let lastElement = array.pop();
 * console.log(lastElement); // 3
 * console.log(array); // [1, 2]
 * 
 * 
 * push:
 * let array = [1, 2, 3];
 * let newLength = array.push(4, 5, 6);
 * console.log(newLength); // 6
 * console.log(array); // [1, 2, 3, 4, 5, 6]
 * 
 * 
 * reverse:
 * let array = [1, 2, 3];
 * let reversedArray = array.reverse();
 * console.log(reversedArray); // [3, 2, 1]
 * 
 * 
 * shift:
 * let array = [1, 2, 3];
 * let firstElement = array.shift();
 * console.log(firstElement); // 1
 * console.log(array); // [2, 3]
 * 
 * 
 * slice:
 * let array = [1, 2, 3, 4, 5, 6];
 * let newArray = array.slice(2, 4);
 * console.log(newArray); // [3, 4]
 * 
 * 
 * sort:
 * let array = [3, 2, 1];
 * let sortedArray = array.sort();
 * console.log(sortedArray); // [1, 2, 3]
 * 
 * 
 * splice:
 * let array = [1, 2, 3, 4, 5];
 * let removedElements = array.splice(1, 2, 6, 7);
 * console.log(removedElements); // [2, 3]
 * console.log(array); // [1, 6, 7, 4, 5]
 * 
 * 
 * unshift:
 * let array = [1, 2, 3];
 * let newLength = array.unshift(4, 5, 6);
 * console.log(newLength); // 6
 * console.log(array); // [4, 5, 6, 1, 2, 3]
 * 
 * 
 */