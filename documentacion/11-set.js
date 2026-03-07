// ╔════════════════════════════════════════════════════════════════════╗
// ║                         SETS                                       ║
// ╚════════════════════════════════════════════════════════════════════╝
// Un Set es una colección de valores ÚNICOS — no permite duplicados.
// A diferencia de los Arrays, los Sets NO TIENEN INDICES.


// ============================================
// 1. FORMAS DE DECLARAR SETS
// ============================================
//
//  ┌─────────────────────┬──────────────────────────────────────┐
//  │ Forma               │ Ejemplo                              │
//  ├─────────────────────┼──────────────────────────────────────┤
//  │ Constructor vacío   │ new Set()                            │
//  │ Desde iterable      │ new Set([1, 2, 3])                   │
//  │ Desde string        │ new Set('abc') → {'a','b','c'}       │
//  └─────────────────────┴──────────────────────────────────────┘

// --- 1.1 Set vacío ---
let emptySet = new Set();
console.log(emptySet);             // Set(0) {}

// --- 1.2 Set desde Array ---
let numbers = new Set([1, 2, 3, 3, 3]); // Duplicados se ignoran
console.log(numbers);              // Set(3) {1, 2, 3}

// --- 1.3 Set desde String ---
let letters = new Set('hello');
console.log(letters);              // Set(4) {'h', 'e', 'l', 'o'}


// ============================================
// 2. MÉTODOS COMUNES
// ============================================
//
//  ┌──────────────┬────────────────────────────────────────────┐
//  │ Método       │ Descripción                                │
//  ├──────────────┼────────────────────────────────────────────┤
//  │ add()        │ Añade un valor         → devuelve el Set   │
//  │ delete()     │ Elimina un valor       → devuelve boolean  │
//  │ has()        │ Comprueba existencia   → devuelve boolean  │
//  │ clear()      │ Elimina todos          → no devuelve nada  │
//  │ size         │ Propiedad con el tamaño (no es método)     │
//  └──────────────┴────────────────────────────────────────────┘

let fruits = new Set(['Apple', 'Banana']);

// --- 2.1 Añadir elementos ---
fruits.add('Cherry');              // Añade 'Cherry'
fruits.add('Apple');               // No hace nada (ya existe)
fruits.add('Orange').add('Grape'); // Se puede encadenar

// --- 2.2 Eliminar elementos ---
let deleted = fruits.delete('Banana'); // true (existía y se eliminó)
let notFound = fruits.delete('Mango'); // false (no existía)

// --- 2.3 Comprobar existencia ---
if (fruits.has('Apple')) {
    console.log('Apple está en el Set');
} else {
    console.log('Apple NO está en el Set');
}

// --- 2.4 Tamaño del Set ---
console.log(fruits.size);          // Número de elementos

// --- 2.5 Limpiar el Set ---
// fruits.clear();                 // Elimina todos los elementos


// ============================================
// 3. RECORRER SETS
// ============================================
//
//  ┌───────────────────┬──────────────────────────────────────┐
//  │ Método            │ Cuándo usarlo                        │
//  ├───────────────────┼──────────────────────────────────────┤
//  │ for...of          │ Forma más directa y legible          │
//  │ forEach()         │ Ejecutar algo por cada elemento      │
//  │ values()          │ Obtener iterador de valores          │
//  │ keys()            │ Igual que values() (por consistencia)│
//  │ entries()         │ Pares [valor, valor]                 │
//  └───────────────────┴──────────────────────────────────────┘

// --- 3.1 for...of ---
for (let fruit of fruits) {
    console.log(fruit);
}

// --- 3.2 forEach ---
// En Sets, el segundo parámetro es igual al primero (no hay índice)
fruits.forEach((value, valueAgain, set) => {
    console.log(value);
});

// --- 3.3 Iteradores ---
for (let value of fruits.values()) {
    console.log(value);
}


// ============================================
// 4. CONVERTIR SET ↔ ARRAY
// ============================================
//
//  ┌─────────────────────┬──────────────────────────────────────┐
//  │ Conversión          │ Método                               │
//  ├─────────────────────┼──────────────────────────────────────┤
//  │ Set → Array         │ [...miSet] o Array.from(miSet)       │
//  │ Array → Set         │ new Set(miArray)                     │
//  └─────────────────────┴──────────────────────────────────────┘

let mySet = new Set([1, 2, 3]);

// --- 4.1 Set a Array con spread operator ---
const arr1 = [...mySet];
console.log(arr1);                 // [1, 2, 3]

// --- 4.2 Set a Array con Array.from() ---
const arr2 = Array.from(mySet);
console.log(arr2);                 // [1, 2, 3]


// ============================================
// 5. CASOS DE USO PRÁCTICOS
// ============================================

// --- 5.1 Eliminar duplicados de un Array ---
let withDuplicates = [1, 2, 2, 3, 3, 3, 4];
let unique = [...new Set(withDuplicates)];
console.log(unique);               // [1, 2, 3, 4]

// --- 5.2 Operaciones de conjuntos (matemáticas) ---
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Unión (A ∪ B)
let union = new Set([...setA, ...setB]);
console.log(union);                // Set(6) {1, 2, 3, 4, 5, 6}

// Intersección (A ∩ B)
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);         // Set(2) {3, 4}

// Diferencia (A - B)
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);           // Set(2) {1, 2}


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Set almacena valores ÚNICOS — ignora duplicados automáticamente
//  📌 Crear: new Set() o new Set(iterable)
//  📌 Añadir: add() — se puede encadenar
//  📌 Eliminar: delete() — devuelve true/false
//  📌 Comprobar: has() — muy eficiente O(1)
//  📌 Tamaño: size (propiedad, no método)
//  📌 Recorrer: for...of o forEach()
//  📌 A Array: [...set] o Array.from(set)
//  📌 Caso típico: eliminar duplicados → [...new Set(array)]
//
// ============================================