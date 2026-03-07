// ╔════════════════════════════════════════════════════════════════════╗
// ║                         MAPS                                       ║
// ╚════════════════════════════════════════════════════════════════════╝
// Un Map es una COLECCIÓN de pares clave-valor donde las claves pueden
// ser de CUALQUIER tipo (objetos, funciones, primitivos, etc.)


// ============================================
// 1. FORMAS DE DECLARAR MAPS
// ============================================
//
//  ┌─────────────────────┬──────────────────────────────────────┐
//  │ Forma               │ Ejemplo                              │
//  ├─────────────────────┼──────────────────────────────────────┤
//  │ Constructor vacío   │ new Map()                            │
//  │ Desde array de pares│ new Map([['a', 1], ['b', 2]])        │
//  │ Desde Object.entries│ new Map(Object.entries(obj))         │
//  └─────────────────────┴──────────────────────────────────────┘

// --- 1.1 Map vacío ---
let emptyMap = new Map();
console.log(emptyMap);             // Map(0) {}

// --- 1.2 Map desde array de pares [clave, valor] ---
let fruits = new Map([
    ['apple', 5],
    ['banana', 10],
    ['cherry', 15]
]);
console.log(fruits);               // Map(3) {'apple' => 5, ...}

// --- 1.3 Map desde objeto ---
let obj = { name: 'Ana', age: 25 };
let fromObj = new Map(Object.entries(obj));
console.log(fromObj);              // Map(2) {'name' => 'Ana', 'age' => 25}


// ============================================
// 2. MÉTODOS COMUNES
// ============================================
//
//  ┌──────────────┬────────────────────────────────────────────┐
//  │ Método       │ Descripción                                │
//  ├──────────────┼────────────────────────────────────────────┤
//  │ set(k, v)    │ Añade/actualiza par    → devuelve el Map   │
//  │ get(k)       │ Obtiene valor por clave→ undefined si no   │
//  │ delete(k)    │ Elimina por clave      → devuelve boolean  │
//  │ has(k)       │ Comprueba existencia   → devuelve boolean  │
//  │ clear()      │ Elimina todos          → no devuelve nada  │
//  │ size         │ Propiedad con el tamaño (no es método)     │
//  └──────────────┴────────────────────────────────────────────┘

let users = new Map();

// --- 2.1 Añadir elementos (set) ---
users.set('u001', { name: 'Ana', role: 'admin' });
users.set('u002', { name: 'Luis', role: 'user' });
users.set('u003', { name: 'María', role: 'user' })
     .set('u004', { name: 'Carlos', role: 'mod' }); // Se puede encadenar

// --- 2.2 Obtener elementos (get) ---
let user = users.get('u001');
console.log(user);                 // { name: 'Ana', role: 'admin' }
console.log(users.get('noexiste')); // undefined

// --- 2.3 Eliminar elementos (delete) ---
let deleted = users.delete('u004'); // true (existía y se eliminó)
let notFound = users.delete('xxx'); // false (no existía)

// --- 2.4 Comprobar existencia (has) ---
if (users.has('u001')) {
    console.log('Usuario u001 existe');
} else {
    console.log('Usuario u001 NO existe');
}

// --- 2.5 Tamaño del Map ---
console.log(users.size);           // Número de pares clave-valor

// --- 2.6 Limpiar el Map ---
// users.clear();                  // Elimina todos los elementos


// ============================================
// 3. RECORRER MAPS
// ============================================
//
//  ┌───────────────────┬──────────────────────────────────────┐
//  │ Método            │ Qué devuelve                         │
//  ├───────────────────┼──────────────────────────────────────┤
//  │ keys()            │ Iterador de claves                   │
//  │ values()          │ Iterador de valores                  │
//  │ entries()         │ Iterador de pares [clave, valor]     │
//  │ forEach()         │ Ejecuta función por cada par         │
//  │ for...of          │ Itera directamente (usa entries)     │
//  └───────────────────┴──────────────────────────────────────┘

// --- 3.1 for...of con destructuring ---
for (let [key, value] of users) {
    console.log(`${key}: ${value.name}`);
}

// --- 3.2 for...of con entries() (equivalente al anterior) ---
for (let [key, value] of users.entries()) {
    console.log(`${key}: ${value.name}`);
}

// --- 3.3 Solo claves ---
for (let key of users.keys()) {
    console.log(key);              // u001, u002, u003
}

// --- 3.4 Solo valores ---
for (let value of users.values()) {
    console.log(value.name);       // Ana, Luis, María
}

// --- 3.5 forEach ---
users.forEach((value, key) => {
    console.log(`${key} → ${value.name}`);
});


// ============================================
// 4. CONVERTIR MAP ↔ ARRAY / OBJECT
// ============================================
//
//  ┌─────────────────────┬──────────────────────────────────────┐
//  │ Conversión          │ Método                               │
//  ├─────────────────────┼──────────────────────────────────────┤
//  │ Map → Array pares   │ [...map] o Array.from(map)           │
//  │ Map → Array claves  │ [...map.keys()]                      │
//  │ Map → Array valores │ [...map.values()]                    │
//  │ Map → Object        │ Object.fromEntries(map)              │
//  │ Array → Map         │ new Map(arrayDePares)                │
//  │ Object → Map        │ new Map(Object.entries(obj))         │
//  └─────────────────────┴──────────────────────────────────────┘

let myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

// --- 4.1 Map a Array ---
const arrPairs = [...myMap];        // [['a', 1], ['b', 2], ['c', 3]]
const arrKeys = [...myMap.keys()];  // ['a', 'b', 'c']
const arrValues = [...myMap.values()]; // [1, 2, 3]

// --- 4.2 Map a Object ---
const myObj = Object.fromEntries(myMap);
console.log(myObj);                // { a: 1, b: 2, c: 3 }


// ============================================
// 5. MAP vs OBJECT — ¿Cuándo usar cada uno?
// ============================================
//
//  ┌──────────────────┬─────────────────┬─────────────────────┐
//  │ Característica   │ Object          │ Map                 │
//  ├──────────────────┼─────────────────┼─────────────────────┤
//  │ Tipo de claves   │ String/Symbol   │ Cualquier tipo      │
//  │ Orden de claves  │ No garantizado* │ Orden de inserción  │
//  │ Tamaño           │ Object.keys().l │ .size (O(1))        │
//  │ Iteración        │ No iterable     │ Iterable nativo     │
//  │ Rendimiento      │ Mejor para pocos│ Mejor para muchos   │
//  │ Serialización    │ JSON.stringify  │ No directo a JSON   │
//  └──────────────────┴─────────────────┴─────────────────────┘
//  * En ES6+ los objetos mantienen orden para claves string

// --- 5.1 Claves de cualquier tipo (ventaja de Map) ---
let objKey = { id: 1 };
let funcKey = () => {};

let specialMap = new Map();
specialMap.set(objKey, 'valor del objeto');
specialMap.set(funcKey, 'valor de la función');
specialMap.set(42, 'valor del número');

console.log(specialMap.get(objKey)); // 'valor del objeto'


// ============================================
// 6. CASOS DE USO PRÁCTICOS
// ============================================

// --- 6.1 Contar frecuencia de elementos ---
let words = ['hola', 'mundo', 'hola', 'javascript', 'mundo', 'hola'];
let frequency = new Map();

for (let word of words) {
    frequency.set(word, (frequency.get(word) || 0) + 1);
}
console.log(frequency);            // Map(3) {'hola' => 3, 'mundo' => 2, ...}

// --- 6.2 Caché simple ---
let cache = new Map();

function expensiveOperation(input) {
    if (cache.has(input)) {
        return cache.get(input);   // Retorna valor cacheado
    }
    let result = input * 2;        // Operación costosa simulada
    cache.set(input, result);
    return result;
}

// --- 6.3 Asociar metadatos a objetos sin modificarlos ---
let metadata = new Map();
let element = document.createElement('div');
metadata.set(element, { clicks: 0, lastAccess: new Date() });


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Map almacena pares clave-valor — claves de CUALQUIER tipo
//  📌 Crear: new Map() o new Map([[k1,v1], [k2,v2]])
//  📌 Añadir/Actualizar: set(key, value) — se puede encadenar
//  📌 Obtener: get(key) — undefined si no existe
//  📌 Eliminar: delete(key) — devuelve true/false
//  📌 Comprobar: has(key) — muy eficiente O(1)
//  📌 Tamaño: size (propiedad, no método)
//  📌 Recorrer: for...of, forEach(), keys(), values(), entries()
//  📌 A Object: Object.fromEntries(map)
//  📌 Desde Object: new Map(Object.entries(obj))
//  📌 Usar Map cuando: claves no-string, muchas adiciones/eliminaciones
//
// ============================================



