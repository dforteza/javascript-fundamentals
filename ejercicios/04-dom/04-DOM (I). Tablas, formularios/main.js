import {empresas} from "./empresas.js";
import {empleados} from "./empleados.js";

// # Crea una lista de empleados cuyo departamento sea tecnología
function tecEmployees(empleados)
{
    let employeeList = []
    for (let empleado of empleados)
    {
        if (empleado.departamento == "Tecnología")
            employeeList.push(empleado.nombre)
    }
    return (employeeList)
}

// # Crea una lista desplegable con los nombres de 
// las empresas teniendo la empresa U como predeterminada.
function EnterpriseNames(empresas)
{
    let names = []
    for (let empresa of empresas)
    {
        names.push(empresa.nombre)
    }

    return (names)
}

// # Crea una card por cada empleado con su nombre en letras de titulo y su cargo y departamento como parrafos. Las dimensiones de la card son libres.
function createEmployeeCards(empleados) {
    let cards = []
    
    for (let empleado of empleados) {
        let card = {
            nombre: empleado.nombre.toUpperCase(), // "letras de titulo" = mayúsculas
            cargo: empleado.cargo,
            departamento: empleado.departamento
        }
        cards.push(card)
    }
    
    return cards
    // Devuelve: [{nombre: "ANA", cargo: "Dev", departamento: "Tecnología"}, ...]
}

// # crea una lista desordenada con los empleados que tengan al menos 3 habilidades.
function employeesWithManySkills(empleados) {
    let lista = []
    
    for (let empleado of empleados) {
        if (empleado.habilidades && empleado.habilidades.length >= 3) {
            lista.push(empleado.nombre)
        }
    }
    
    return lista
}
// # Crea una tabla con todos los empleados mostrando nombre, salario y estado.
function employeeTable(empleados) 
{
    let tabla = []
    
    for (let empleado of empleados) 
    {
        tabla.push({
            nombre: empleado.nombre,
            salario: empleado.salario,
            estado: empleado.activo ? "Activo" : "Inactivo" // Suponiendo campo "activo"
        })
    }
    
    return tabla
}

// # Crea una tabla con todas las empresas que tengan su fundación anterior a 2022.
function empresasAntiguas(empresas) {
    let resultado = []
    
    for (let empresa of empresas) {
        if (empresa.fundacion < 2022) {
            resultado.push({
                nombre: empresa.nombre,
                fundacion: empresa.fundacion,
                sede: empresa.sede
            })
        }
    }
    
    return resultado
}

// # Crea una tabla con todas las empresas que tengan mas de 30 empleados mostrando tambien los empleados que han trabajado en dicha empresa

// # Crea un formulario donde se puedan insertar empleados con al, menos, nombre, cargo, departamento, salario. Al rellenar información y enviar, se debería poder insertar dicha información en la tabla de ejercicios anteriores de empleados.
// Estructura para nuevo empleado
function createNewEmployee(nombre, cargo, departamento, salario) {
    return {
        id: generarId(), // función aparte
        nombre: nombre,
        cargo: cargo,
        departamento: departamento,
        salario: salario,
        activo: true,
        fechaIngreso: new Date()
    }
}

// Para añadir a la tabla existente:
function addEmployeeToTable(empleados, nuevoEmpleado) {
    empleados.push(nuevoEmpleado)
    return empleados
}

// =============================================
// ========== CONSOLE.LOGS PARA PROBAR =========
// =============================================

console.log("========== EJERCICIO 1 ==========")
console.log("Empleados de Tecnología:")
console.log(tecEmployees(empleados))
console.log("")

console.log("========== EJERCICIO 2 ==========")
console.log("Nombres de empresas:")
console.log(EnterpriseNames(empresas))
console.log("")

console.log("========== EJERCICIO 3 ==========")
console.log("Cards de empleados (nombre en mayúsculas):")
console.log(createEmployeeCards(empleados))
console.log("")

console.log("========== EJERCICIO 4 ==========")
console.log("Empleados con 3 o más habilidades:")
console.log(employeesWithManySkills(empleados))
console.log("")

console.log("========== EJERCICIO 5 ==========")
console.log("Tabla de empleados (nombre, salario, estado):")
console.table(employeeTable(empleados))
console.log("")

console.log("========== EJERCICIO 6 ==========")
console.log("Empresas fundadas antes de 2022:")
console.log(empresasAntiguas(empresas))
console.log("")

console.log("========== EJERCICIO 7 ==========")
console.log("Empresas con más de 30 empleados y sus empleados:")
console.log(empresasGrandes(empresas, empleados))
console.log("")

console.log("========== EJERCICIO 8 ==========")
console.log("Ejemplo de creación de nuevo empleado:")
const nuevoEmpleado = createNewEmployee("Pedro Sánchez", "Analista", "Finanzas", 42000)
console.log("Nuevo empleado creado:")
console.log(nuevoEmpleado)
console.log("")