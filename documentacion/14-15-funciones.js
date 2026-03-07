// ╔════════════════════════════════════════════════════════════════════╗
// ║                        FUNCIONES                                   ║
// ╚════════════════════════════════════════════════════════════════════╝
// Una función es un bloque de código reutilizable que realiza una tarea.
// Permite organizar, abstraer y evitar repetir código.


// ============================================
// 1. FUNCIÓN DECLARADA
// ============================================
// Se define con la palabra clave function + nombre + paréntesis + { }

function saludar() {
    console.log("¡Hola, mundo!");
}

saludar(); // ¡Hola, mundo!


// ============================================
// 2. PARÁMETROS, ARGUMENTOS Y RETURN
// ============================================
//
//  ┌─────────────┬──────────────────────────────────────────────┐
//  │ Concepto    │ Descripción                                  │
//  ├─────────────┼──────────────────────────────────────────────┤
//  │ Parámetro   │ Variable en la definición → (nombre)         │
//  │ Argumento   │ Valor real en la llamada  → ("Juan")         │
//  │ return      │ Devuelve un resultado y termina la función   │
//  └─────────────┴──────────────────────────────────────────────┘

// --- 2.1 Con parámetros ---
function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludarA("Juan");                  // ¡Hola, Juan!

// --- 2.2 Con return ---
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado);            // 8


// ============================================
// 3. FUNCIÓN ANÓNIMA
// ============================================
// Función sin nombre — se asigna a una variable o se usa directamente.

const despedir = function() {
    console.log("¡Adiós!");
};
despedir();

// Uso típico: como callback
setTimeout(function() {
    console.log("Esto aparece después de 2 segundos");
}, 2000);


// ============================================
// 4. FUNCIÓN FLECHA (Arrow Function 
// ============================================
// Sintaxis más corta. No tiene su propio this.
//
//  ┌─────────────────────────────────────────────────────────────┐
//  │  Tradicional              │  Arrow                          │
//  ├─────────────────────────────────────────────────────────────┤
//  │  function nombre() {}     │  const nombre = () => {}        │
//  │  function(a) { return a } │  (a) => a                       │
//  │  function(a,b) { ... }    │  (a, b) => { ... }              │
//  └─────────────────────────────────────────────────────────────┘

// --- 4.1 Sin parámetros ---
const mensaje = () => "¡Hola desde arrow!";
console.log(mensaje());

// --- 4.2 Un parámetro ---
const saludarFlecha = (nombre) => `¡Hola, ${nombre}!`;
console.log(saludarFlecha("Juan")); // ¡Hola, Juan!

// --- 4.3 Varios parámetros ---
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(5, 3));     // 8

// --- 4.4 Con bloque de código (varias líneas) ---
const calcularArea = (ancho, altura) => {
    const area = ancho * altura;
    return area;                    // Con { } hay que poner return explícito
};
console.log(calcularArea(5, 10));   // 50


// ============================================
// 5. DOCUMENTACIÓN CON JSDOC
// ============================================
// Comentarios especiales que describen la función para IDEs y documentación.

/**
 * Suma dos números y devuelve el resultado.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de a y b.
 */
function sumarDocumentada(a, b) {
    return a + b;
}


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  ┌──────────────────┬──────────────────────────────────────────┐
//  │ Tipo             │ Sintaxis                                 │
//  ├──────────────────┼──────────────────────────────────────────┤
//  │ Declarada        │ function nombre() { }                    │
//  │ Anónima          │ const fn = function() { }                │
//  │ Flecha           │ const fn = () => { }                     │
//  │ Flecha corta     │ const fn = (a) => a * 2                  │
//  └──────────────────┴──────────────────────────────────────────┘
//
//  📌 Parámetro = variable en la definición
//  📌 Argumento = valor en la llamada
//  📌 return devuelve resultado y termina la función
//  📌 Arrow sin { } → return implícito
//  📌 Arrow con { } → necesita return explícito
//  📌 JSDoc (@param, @returns) para documentar funciones
//
// ============================================
