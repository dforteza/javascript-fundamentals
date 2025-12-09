// ============================================
// DIFERENCIAS ENTRE VAR, LET Y CONST
// ============================================

// 1. ALCANCE (Scope)
// var: alcance de función o global
if (true) {
    var variableVar = "Soy var";
    let variableLet = "Soy let";
    const variableConst = "Soy const";
}
console.log(variableVar); // ✅ Funciona: "Soy var"
//console.log(variableLet); // ❌ Error: variableLet no está definida
// console.log(variableConst); // ❌ Error: variableConst no está definida

// 2. REASIGNACIÓN
var miVar = "inicial";
miVar = "modificado"; // ✅ Funciona

let miLet = "inicial";
miLet = "modificado"; // ✅ Funciona

const miConst = "inicial";
miConst = "modificado"; // ❌ Error: No se puede reasignar una constante

// 3. REDECLARACIÓN
var x = 1;
var x = 2; // ✅ Funciona con var

let y = 1;
// let y = 2; // ❌ Error: No se puede redeclarar con let

const z = 1;
// const z = 2; // ❌ Error: No se puede redeclarar con const

// 4. NOTA IMPORTANTE: const con objetos y arrays
const miPersona = { nombre: "Ana" };
miPersona.nombre = "Luis"; // ✅ Funciona: puedes modificar propiedades
miPersona.edad = 25; // ✅ Funciona: puedes agregar propiedades
// miPersona = {}; // ❌ Error: no puedes reasignar el objeto completo

const listaNumeros = [1, 2, 3];
listaNumeros.push(4); // ✅ Funciona: puedes modificar el contenido
// listaNumeros = [5, 6, 7]; // ❌ Error: no puedes reasignar el array completo

console.log("--- Ejemplos de var, let y const completados ---");

