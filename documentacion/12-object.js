// ╔════════════════════════════════════════════════════════════════════╗
// ║                         OBJECTS                                    ║
// ╚════════════════════════════════════════════════════════════════════╝
// Un Object es una colección de pares CLAVE: VALOR.
// Las claves son strings (o Symbols) y los valores pueden ser de cualquier tipo.


// ============================================
// 1. FORMAS DE DECLARAR OBJETOS
// ============================================
//
//  ┌──────────────────┬───────────────────────────────────────┐
//  │ Forma            │ Ejemplo                               │
//  ├──────────────────┼───────────────────────────────────────┤
//  │ Literal { }      │ { nombre: 'Juan' }                    │
//  │ new Object()     │ new Object()                          │
//  │ Object.create()  │ Object.create(proto)                  │
//  └──────────────────┴───────────────────────────────────────┘

// --- 1.1 Literal (recomendado) ---
let obj = { nombre: 'Juan', edad: 25 };

// --- 1.2 Constructor ---
let obj2 = new Object();

// --- 1.3 Object.create() — hereda de un prototipo ---
let obj3 = Object.create(null);    // objeto sin prototipo


// ============================================
// 2. ACCEDER, AÑADIR Y ELIMINAR PROPIEDADES
// ============================================
//
//  ┌────────────┬──────────────────┬──────────────────────────┐
//  │ Operación  │ Notación punto   │ Notación corchetes       │
//  ├────────────┼──────────────────┼──────────────────────────┤
//  │ Leer       │ obj.nombre       │ obj['nombre']            │
//  │ Añadir     │ obj.p1 = 'v1'    │ obj['p2'] = 'v2'        │
//  │ Eliminar   │ delete obj.p1    │ delete obj['p2']         │
//  └────────────┴──────────────────┴──────────────────────────┘
//  💡 Usa corchetes cuando la clave es dinámica o tiene caracteres especiales.

obj.ciudad = 'Madrid';             // añadir con punto
obj['pais'] = 'España';            // añadir con corchetes

delete obj.ciudad;                 // eliminar propiedad


// ============================================
// 3. MÉTODOS ÚTILES DE OBJECT
// ============================================
//
//  ┌─────────────────────┬────────────────────────────────────┐
//  │ Método              │ Devuelve                           │
//  ├─────────────────────┼────────────────────────────────────┤
//  │ Object.keys(obj)    │ Array de claves                    │
//  │ Object.values(obj)  │ Array de valores                   │
//  │ Object.entries(obj) │ Array de [clave, valor]            │
//  │ Object.assign(d, f) │ Copia propiedades de f → d         │
//  │ Object.freeze(obj)  │ No modificar, no eliminar, no añadir│
//  │ Object.seal(obj)    │ No eliminar, no añadir (SÍ modificar)│
//  └─────────────────────┴────────────────────────────────────┘

let keys    = Object.keys(obj);       // ['nombre', 'edad', 'pais']
let values  = Object.values(obj);     // ['Juan', 25, 'España']
let entries = Object.entries(obj);    // [['nombre','Juan'], ['edad',25], ...]

// --- 3.1 Object.assign() — copiar propiedades ---
let destino = { a: 1 };
let fuente  = { b: 2, c: 3 };
Object.assign(destino, fuente);
console.log(destino);                 // { a: 1, b: 2, c: 3 }

// --- 3.2 freeze vs seal ---
Object.freeze(obj);  // ❄️  Inmutable total
Object.seal(obj);    // 🔒 Solo permite modificar valores existentes


// ============================================
// 4. RECORRER OBJETOS
// ============================================

// --- 4.1 for...in ---
for (let clave in obj)
    console.log(clave + ': ' + obj[clave]);

// --- 4.2 Con Object.entries() y for...of ---
for (let [clave, valor] of Object.entries(obj))
    console.log(`${clave}: ${valor}`);


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Declarar: literal { } es la forma preferida
//  📌 Acceso: punto (obj.x) o corchetes (obj['x'])
//  📌 keys / values / entries para extraer datos
//  📌 freeze = inmutable total, seal = solo modificar
//  📌 Recorrer: for...in o Object.entries() + for...of
//
// ============================================