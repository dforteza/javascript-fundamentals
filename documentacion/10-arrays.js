// ╔════════════════════════════════════════════════════════════════════╗
// ║                        ARRAYS                                      ║
// ╚════════════════════════════════════════════════════════════════════╝
// Un Array es una lista ORDENADA, MUTABLE y HETEROGENEA de elementos.


// ============================================
// 1. FORMAS DE DECLARAR ARRAYS
// ============================================
//
//  ┌─────────────────────┬──────────────────────────────────────┐
//  │ Forma               │ Ejemplo                              │
//  ├─────────────────────┼──────────────────────────────────────┤
//  │ Literal [ ]         │ ['a', 'b', 'c']                      │
//  │ Constructor new     │ new Array('a', 'b', 'c')             │
//  │ Array.of()          │ Array.of('a', 'b', 'c')              │
//  └─────────────────────┴──────────────────────────────────────┘

// --- 1.1 Literal de array ---
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

// --- 1.2 Constructor de Array ---
let vegetables = new Array('Carrot', 'Broccoli', 'Spinach');
console.log(vegetables);

// --- 1.3 Método Array.of ---
let grains = Array.of('Rice', 'Wheat', 'Oats');
console.log(grains);


// ============================================
// 2. ACCEDER A ELEMENTOS
// ============================================
// Los índices empiezan en 0.

console.log(fruits[0]);            // "Apple"  — primer elemento
console.log(fruits[fruits.length - 1]); // último elemento
console.log(fruits.at(-1));        // último elemento (ES2022)


// ============================================
// 3. MÉTODOS COMUNES
// ============================================
//
//  ┌──────────────┬────────────────────────────────────────────┐
//  │ Método       │ Descripción                                │
//  ├──────────────┼────────────────────────────────────────────┤
//  │ push()       │ Añade al final         → modifica original │
//  │ unshift()    │ Añade al inicio        → modifica original │
//  │ pop()        │ Elimina del final      → devuelve elem.    │
//  │ shift()      │ Elimina del inicio     → devuelve elem.    │
//  │ splice()     │ Elimina/reemplaza/añade→ modifica original │
//  │ slice()      │ Extrae subarray        → NO modifica       │
//  │ indexOf()    │ Busca un elemento      → devuelve índice   │
//  └──────────────┴────────────────────────────────────────────┘

// --- 3.1 Añadir elementos ---
fruits.push('Date');               // Añadir al final
fruits.unshift('Mango');           // Añadir al inicio

// --- 3.2 Eliminar elementos ---
let lastFruit = fruits.pop();      // Elimina y devuelve el último
let firstFruit = fruits.shift();   // Elimina y devuelve el primero

// --- 3.3 splice() — la navaja suiza de los arrays ---
// splice(inicio, cantidadEliminar, elem1, ..., elemN)
//
//  ┌────────────┬────────────────────┬────────────────────────────────┐
//  │ Caso       │ Llamada            │ Qué hace                       │
//  ├────────────┼────────────────────┼────────────────────────────────┤
//  │ Eliminar   │ splice(1, 2)       │ Borra 2 elem. desde índice 1   │
//  │ Reemplazar │ splice(1, 1, 'X')  │ Quita 1, mete 'X' en su lugar  │
//  │ Insertar   │ splice(2, 0, 'X')  │ No quita nada, inserta en 2    │
//  │ Desde fin  │ splice(-1, 1)      │ Elimina el último elemento     │
//  │ Vaciar     │ splice(0)          │ Elimina todo desde índice 0    │
//  └────────────┴────────────────────┴────────────────────────────────┘

// Caso 1: ELIMINAR — borrar 2 elementos desde el índice 1
let eliminados = fruits.splice(1, 2);
console.log(eliminados);          // elementos que se quitaron

// Caso 2: REEMPLAZAR — en el índice 1, quitar 1 y meter 2 nuevos
fruits.splice(1, 1, 'Orange', 'Lemon');

// Caso 3: INSERTAR sin eliminar — en el índice 2, meter 'Kiwi'
fruits.splice(2, 0, 'Kiwi');

// Caso 4: ELIMINAR desde el final — índices negativos
fruits.splice(-1, 1);             // elimina el último elemento

// Caso 5: VACIAR el array completo
// fruits.splice(0);              // elimina todos los elementos

// --- 3.4 slice() — extraer subarray (NO modifica el original) ---
let someFruits = fruits.slice(1, 3); // Desde índice 1 hasta 3 (no incluido)
let copia = fruits.slice();          // Copia superficial del array completo

// --- 3.5 Buscar elementos ---
let index = fruits.indexOf('Cherry');  // -1 si no lo encuentra


// ============================================
// 4. RECORRER ARRAYS
// ============================================
//
//  ┌───────────────────┬──────────────────────────────────────┐
//  │ Método            │ Cuándo usarlo                        │
//  ├───────────────────┼──────────────────────────────────────┤
//  │ for clásico       │ Necesitas control total del índice   │
//  │ for...of          │ Solo necesitas el valor              │
//  │ for...of+entries()│ Necesitas índice y valor             │
//  │ forEach()         │ Ejecutar algo por cada elemento      │
//  └───────────────────┴──────────────────────────────────────┘

// --- 4.1 Bucle for clásico ---
for (let i = 0; i < fruits.length; i++)
    console.log(`${i}: ${fruits[i]}`);

// --- 4.2 for...of con entries() ---
for (let [idx, fruit] of fruits.entries())
    console.log(`${idx}: ${fruit}`);

// --- 4.3 forEach ---
fruits.forEach((value, index) => {
    console.log(index, value);
});


// ============================================
// 5. ORDENAR
// ============================================
// sort() modifica el array original.
// Recibe una función comparadora (a, b):
//   → retorno < 0  → a va antes que b
//   → retorno > 0  → b va antes que a
//   → retorno === 0 → se quedan igual

fruits.sort();                            // Orden alfabético
fruits.sort((a, b) => a.length - b.length); // Por longitud del string

// 💡 Con números hay que usar comparador, si no ordena como strings:
let nums = [10, 1, 21, 2];
nums.sort((a, b) => a - b);              // [1, 2, 10, 21] ← correcto
// nums.sort() sin comparador daría [1, 10, 2, 21] ← incorrecto


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Declarar: literal [ ] es la forma preferida
//  📌 Añadir: push (final) / unshift (inicio)
//  📌 Eliminar: pop (final) / shift (inicio)
//  📌 splice(): eliminar, reemplazar e insertar en cualquier posición
//  📌 slice(): extraer sin modificar el original
//  📌 Recorrer: for, for...of, forEach
//  📌 sort(): siempre usar comparador con números
//
// ============================================