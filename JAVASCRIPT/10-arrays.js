// ===== ARRAYS ===== //

// FORMS TO DECLARE ARRAYS
    // 1. Using ARRAY LITERAL
    let fruits = ['Apple', 'Banana', 'Cherry'];
    console.log(fruits);

    // 2. Using ARRAY CONSTRUCTOR
    let vegetables = new Array('Carrot', 'Broccoli', 'Spinach');
    console.log(vegetables);

    // 3. Using METHOD ARRAY.OF
    let grains = Array.of('Rice', 'Wheat', 'Oats');
    console.log(grains);

// ACCESSING ELEMENTS []
    console.log(fruits[0]); // First element

// COMMON ARRAY METHODS
    // Adding elements
    fruits.push('Date'); // Add to the end
    fruits.unshift('Mango'); // Add to the beginning

    // Removing elements
    let lastFruit = fruits.pop(); // Remove from the end
    let firstFruit = fruits.shift(); // Remove from the beginning

    // Complex method
    // SPLICE(start, deleteCount, i1, ..., iN) -> Eliminar, Reemplazar, Añadir
    let citrus = fruits.splice(1, 2, 'Orange', 'Lemon');


    // subarray
    let someFruits = fruits.slice(1, 3); // From index 1 to 3 (not inclusive)

    // Finding elements
    let index = fruits.indexOf('Cherry');

// ITERATING OVER ARRAYS
    // Using for loop
    for (let i = 0; i < fruits.length; i++) 
        console.log(`${i}: ${fruits[i]}`);

    // Using for...of loop with entries()
    for (let [idx, fruit] of fruits.entries()) 
        console.log(`${idx}: ${fruit}`);
    
