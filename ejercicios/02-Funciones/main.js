import { trabajadores } from "./trabajadores.js";

// # Enunciados para trabajar con el objeto trabajadores

// ## Crea una función que imprima en la consola los nombres y puestos de 
// todos los trabajadores que están actualmente en la empresa.
function printInfo(arr)
{
    for (let trabajador of arr)
        console.log(`Nombre: ${trabajador.nombre} - Puesto: ${trabajador.puesto}`)
}
// ## Define una función que calcule y devuelva la suma total 
// de la experiencia de todos los trabajadores que están en la empresa.
function sumExperience(arr)
{
    let sum = 0

    for (let trabajador of arr)
        if (trabajador.enEmpresa)
            sum += Number(trabajador.experiencia)
    return (sum)
}
// ## Escribe una función que reciba un nombre de trabajador 
// y devuelva un array con sus habilidades.
function filterByName(arr, nb)
{
    if (nb == "")
        alert("Nombre Vacio")
    for (let trabajador of arr)
    {
        if (nb == trabajador.nombre)
        {
            for (let [idx, val] of trabajador.habilidades.entries())
                console.log(`Habilidad ${idx} - ${val}`)

        }
    }
}
// ## Crea una función que reciba un puesto y devuelva un array 
// con los nombres de los trabajadores que ocupan ese puesto.
function filterByJob(arr, job)
{
    let job_arr = Array.of()

    for (let trabajador of arr)
    {
        if (job == trabajador.puesto)
            job_arr.push(trabajador.nombre)
    }

    return (job_arr)
}

// ## Define una función que reciba un nombre y devuelva true 
// si el trabajador está en la empresa, o false en caso contrario.
function isInCorporate(arr, nb)
{
    let flag = false
    for (let trabajador of arr)
    {
        if (nb == trabajador.nombre)
            flag = true
    }
    return (flag)
}

printInfo(trabajadores)
console.log("------------------------------------")
console.log(`Suma de experiencia: ${sumExperience(trabajadores)}`)
console.log("------------------------------------")
filterByName(trabajadores, "Sara")
console.log("------------------------------------")
console.log(filterByJob(trabajadores, "Desarrolladora"))
console.log("------------------------------------")
if (isInCorporate(trabajadores, "Sara"))
    console.log("True")
else
    console.log("False")


