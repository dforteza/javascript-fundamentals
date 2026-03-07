// ╔════════════════════════════════════════════════════════════════════╗
// ║              INTRODUCCIÓN A JAVASCRIPT                             ║
// ╚════════════════════════════════════════════════════════════════════╝

// ============================================
// 1. TIPOS DE DATOS
// ============================================
// JavaScript tiene 7 tipos primitivos y 1 tipo de referencia principal.
//
//  PRIMITIVOS                          REFERENCIA
//  ┌────────────┬──────────────┐      ┌────────────────────┐
//  │ string     │ "Hola"       │      │ object { }, [ ]    │
//  │ number     │ 42, 3.14     │      └────────────────────┘
//  │ boolean    │ true / false │
//  │ null       │ null         │
//  │ undefined  │ undefined    │
//  │ bigint     │ 123n         │
//  │ symbol     │ Symbol()     │
//  └────────────┴──────────────┘

// --- 1.1 String ---
let saludo = "¡Hola, mundo!";
let otraForma = 'Comillas simples';
let plantilla = `Template literal: ${saludo}`;
console.log(typeof saludo);      // "string"

// --- 1.2 Number ---
// Engloba enteros y decimales (no hay int/float separados)
let entero = 25;
let decimal = 3.14;
let especial1 = Infinity;
let especial2 = NaN;            
console.log(typeof entero);       // "number"

// --- 1.3 Boolean ---
let esEstudiante = true;
let aprobado = false;
console.log(typeof esEstudiante); // "boolean"

// --- 1.4 Null ---
// Valor intencionalmente vacío
let valorNulo = null;
console.log(typeof valorNulo);    // "object" ← bug histórico de JS

// --- 1.5 Undefined ---
// Variable declarada pero sin valor asignado
let valorIndefinido;
console.log(typeof valorIndefinido); // "undefined"

// --- 1.6 BigInt ---
let grande = 9007199254740991n;
console.log(typeof grande);       // "bigint"

// --- 1.7 Symbol ---
let id = Symbol("id");
console.log(typeof id);           // "symbol"

// --- 1.8 Object (tipo de referencia) ---
let persona = { nombre: "Ana", edad: 30 };
let numeros = [1, 2, 3, 4, 5];   // Los arrays también son objetos
console.log(typeof persona);      // "object"
console.log(typeof numeros);      // "object"
console.log(Array.isArray(numeros)); // true  ← forma correcta de verificar

// --- 1.9 Secuencias de escape ---
//  \n  → salto de línea      \"  → comilla doble
//  \t  → tabulación           \\  → barra invertida
let texto = "Ella dijo: \"Hola, ¿cómo estás?\"";
let multilinea = "Línea 1\nLínea 2\nLínea 3";


// ============================================
// 2. DECLARACIÓN Y ASIGNACIÓN DE VARIABLES
// ============================================
//
//  ┌──────────┬────────────┬──────────────┬───────────────┐
//  │ Palabra  │  Alcance   │ Reasignable  │ Redeclarable  │
//  ├──────────┼────────────┼──────────────┼───────────────┤
//  │ var      │ función    │     SI       │      SI       │
//  │ let      │ bloque { } │     SI       │      NO       │
//  │ const    │ bloque { } │     NO       │      NO       │
//  └──────────┴────────────┴──────────────┴───────────────┘

// --- 2.1 Alcance (Scope) ---
if (true) {
    var variableVar   = "Soy var";
    let variableLet   = "Soy let";
    const variableConst = "Soy const";
}
console.log(variableVar);       // ✅ "Soy var"  → accesible fuera del bloque
// console.log(variableLet);    // ❌ ReferenceError
// console.log(variableConst);  // ❌ ReferenceError

// --- 2.2 Reasignación ---
var miVar = "inicial";
miVar = "modificado";            // ✅

let miLet = "inicial";
miLet = "modificado";            // ✅

const miConst = "inicial";
// miConst = "modificado";       // ❌ TypeError

// --- 2.3 Redeclaración ---
var x = 1;
var x = 2;                       // ✅ var permite redeclarar

let y = 1;
// let y = 2;                    // ❌ SyntaxError

const z = 1;
// const z = 2;                  // ❌ SyntaxError

// --- 2.4 const con objetos y arrays ---
//   const impide reasignar la REFERENCIA, no mutar el contenido.
const miPersona = { nombre: "Ana" };
miPersona.nombre = "Luis";       // ✅ se modifica la propiedad
miPersona.edad = 25;             // ✅ se agrega una propiedad
// miPersona = {};               // ❌ no se puede reasignar

const lista = [1, 2, 3];
lista.push(4);                   // ✅ se modifica el contenido
// lista = [5, 6, 7];            // ❌ no se puede reasignar

// BUENA PRÁCTICA:
//    → Usar const por defecto.
//    → Usar let solo cuando se necesite reasignar.
//    → Evitar var en código moderno.


// ============================================
// 3. CONVERSIONES DE TIPO
// ============================================
//
//  ┌──────────────────────────────────────────────────────────┐
//  │         Número → String          String → Número         │
//  ├──────────────────────────────────────────────────────────┤
//  │  String(num)                     Number(str)             │
//  │  num.toString()                  parseInt(str, 10)       │
//  │  "" + num       (implícita)      parseFloat(str)         │
//  │  `${num}`       (template)       +str          (unario)  │
//  └──────────────────────────────────────────────────────────┘

var num = 12345;
var str = "67890";

// --- 3.1 Número → String ---
var strNum1 = String(num);        // "12345" — función global
var strNum2 = num.toString();     // "12345" — método del prototipo
var strNum3 = "" + num;           // "12345" — concatenación implícita
var strNum4 = `${num}`;           // "12345" — template literal

console.log(strNum1, typeof strNum1); // "12345" "string"

// --- 3.2 String → Número ---
var numFromStr1 = Number(str);       // 67890
var numFromStr2 = parseInt(str, 10); // 67890  — siempre indicar la base (10)
var numFromStr3 = parseFloat("3.14");// 3.14
var numFromStr4 = +str;             // 67890  — operador unario +

console.log(numFromStr1, typeof numFromStr1); // 67890 "number"


// ============================================
// 4. CUADROS DE DIÁLOGO DEL NAVEGADOR
// ============================================
//
//  ┌──────────────┬─────────────────────┬──────────────────────┐
//  │   Método     │     Propósito       │    Retorna           │
//  ├──────────────┼─────────────────────┼──────────────────────┤
//  │ alert()      │ Mostrar mensaje     │ undefined            │
//  │ confirm()    │ Pedir confirmación  │ true / false         │
//  │ prompt()     │ Pedir dato al user  │ string / null        │
//  └──────────────┴─────────────────────┴──────────────────────┘

// --- 4.1 alert() ---
// Muestra un mensaje informativo con botón "Aceptar".
alert("¡Esto es una alerta!");

// --- 4.2 confirm() ---
// Muestra un mensaje con botones "Aceptar" y "Cancelar".
let respuesta = confirm("¿Deseas continuar?");
if (respuesta) {
    console.log("El usuario aceptó.");
} else {
    console.log("El usuario canceló.");
}

// --- 4.3 prompt() ---
// Muestra un campo de texto para que el usuario escriba.
// El segundo parámetro es el valor por defecto (opcional).
let nombre = prompt("Introduce tu nombre:", "Invitado");
if (nombre !== null) {
    console.log("¡Hola, " + nombre + "!");
} else {
    console.log("El usuario canceló el prompt.");
}


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Tipos de datos: 7 primitivos + object
//  📌 Declaraciones: const > let > var (preferencia recomendada)
//  📌 Conversiones: siempre verificar con typeof y cuidado con NaN
//  📌 Diálogos: alert / confirm / prompt (solo navegador)
//
// ============================================
