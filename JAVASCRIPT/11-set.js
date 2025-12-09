// ===== SETS ===== //

// FORMS TO DECLARE SETS
    // Using SET CONSTRUCTOR
    // new Set(Iterable)
    let miSet = new Set([1, 2, 3])


// COMMON SETS METHODS

    // AÑADIR
    miSet.add(4)

    // ELIMINAR
    miSet.delete(4)

    // HAS -> COMPROBAR EXISTENCIA
    if (miSet.has(4))
        console.log("EXISTE")
    else
        console.log("NO EXISTE")

    // CLEAR -> LIMPIAR 
    miSet.clear()

    // SIZE -> TAMAÑO
    miSet.size

// RECORRER SETS
    // FOR ... OF
    for (let valor of miSet)
        valor;

    // FOR EACH
    miSet.forEach((valor, index) =>
    {
        console.log(`${index} - ${valor}`)
    }
    )

// TRANSFORMAR SET EN ARRAY
    // 1. OPERADOR ... SPREAD 
    // ... son el operador spread (propagación/expansión). 
    // Expande un iterable en sus elementos individuales.
    const arr = [...miSet];   

    // 2. METODO FROM   
    arr = Array.from(miSet)