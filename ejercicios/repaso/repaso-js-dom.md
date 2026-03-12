# Repaso JS + DOM — Estructura para el examen

## Estructura base de cualquier ejercicio

```js
// 1 DATOS
let items = []        // array si almacenas cosas
let contador = 0      // variable simple si es un valor

// 2 CAPTURAR — una sola vez, fuera de todo
const input   = document.querySelector('#miInput')
const lista   = document.querySelector('#miLista')
const btnAdd  = document.querySelector('#miBoton')

// 3 RENDER — solo muestra, nunca decide
function render() {
  lista.innerHTML = ''
  items.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    lista.appendChild(li)
  })
}

// 4 LÓGICA — lee, valida, modifica datos, llama a render
function addItem() {
  const texto = input.value.trim()

  if (texto === '') { alert('Campo vacío'); return }

  items.push(texto)
  input.value = ''
  render()
}

// 5 EVENTOS — siempre al final
btnAdd.addEventListener('click', addItem)
render() // render inicial si hace falta
```

---

## Reglas

**1 — Los datos viven en variables JS, nunca en el DOM**
```js
// Error
contador = display.textContent + 1

// Correcto
contador++
display.textContent = contador
```

**2 — Cada acción sigue siempre este orden**
```
leer → validar → modificar datos → render
```

**3 — render solo pinta, nunca decide ni modifica datos**
```js
// Error
function render() {
  contador++
}

// Correcto
function render() {
  display.textContent = contador
}
```

---

## Operaciones sobre arrays

```js
items.push(x)               // añadir al final
items = items.filter(...)   // eliminar (genera nuevo array)
items.find(...)             // buscar uno
items.forEach(...)          // recorrer para pintar
items.filter(...)           // filtrar para mostrar
```

---

## Validaciones típicas

```js
if (texto === '')                // campo vacío — con trim() antes
if (texto.length < 5)            // longitud mínima
if (isNaN(Number(valor)))        // no es número
if (num < 0 || num > 100)        // fuera de rango
if (!email.includes('@'))        // formato email
if (!select.value)               // nada seleccionado en select
if (!/^\d{9}$/.test(telefono))   // regex: exactamente 9 dígitos
```

---

## Errores más comunes en examen

| ❌ Error | ✅ Correcto |
|---|---|
| `'clik'` | `'click'` |
| `'Hola ${x}'` comillas normales | `` `Hola ${x}` `` backticks |
| `elemento === 0` para asignar | `elemento = 0` |
| `Number() === null` | `isNaN(Number())` |
| Pasar parámetro y modificarlo dentro | Usar la variable global directamente |
| `querySelector` dentro de render | Capturar fuera, una sola vez |

---

## Chuleta mental — pregúntate esto en orden

```
¿Qué datos manejo?        → variable o array
¿Qué elementos necesito?  → querySelector por cada uno
¿Cuándo actúo?            → addEventListener('click', ...)
¿Qué puede fallar?        → validar con alert + return
¿Cómo actualizo?          → push / filter / find
¿Cómo muestro?            → render()
```

---

## Snippets de situaciones frecuentes

**Añadir a lista**
```js
items.push(texto)
input.value = ''
render()
```

**Eliminar por id**
```js
items = items.filter(item => item.id !== id)
render()
```

**Modificar un elemento**
```js
const item = items.find(item => item.id === id)
item.completada = !item.completada
render()
```

**Filtrar sin modificar el array original**
```js
const resultado = items.filter(item =>
  item.nombre.toLowerCase().includes(buscar.toLowerCase())
)
```

**Total con reduce**
```js
const total = items.reduce((acc, item) => acc + item.precio, 0)
```

**Mostrar / ocultar**
```js
if (elemento.style.display === 'none') {
  elemento.style.display = 'block'
} else {
  elemento.style.display = 'none'
}
```
