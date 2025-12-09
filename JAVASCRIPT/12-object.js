// ===== OBJECTS ===== //

// FORMS TO DECLARE OBJECTS

    // 1. {}
    let obj = {};

    // 2. Using OBJECT Constructor
    obj = new Object();

    // 3. Using METHOD CREATE
    obj = Object.create();

// COMMON METHOS 

// Access Keys
let keys = Object.keys(obj)

// Acces values
let values = Object.values(obj)

// Acces items
let entries = Object.entries(obj)

// STRCPY 
let destino = { a: 1 };
let fuente = { b: 2, c: 3 };
Object.assign(destino, fuente);
console.log(destino); 

// Freeze y Seal

