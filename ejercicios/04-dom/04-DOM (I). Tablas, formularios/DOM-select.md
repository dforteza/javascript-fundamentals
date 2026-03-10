# Métodos del DOM para Listas Desplegables

1. select.options

- Descripción: Devuelve una colección de todas las opciones (<option>) dentro de un <select>.
Ejemplo:

```javascript
const select = document.getElementById('miSelect');
const opciones = select.options; // Obtiene todas las opciones del select
for (let i = 0; i < opciones.length; i++) {
    console.log(opciones[i].value); // Muestra el valor de cada opción
}
```

2. select.selectedIndex

- Descripción: Devuelve el índice de la opción seleccionada en el <select>.

Ejemplo:

```javascript
const indiceSeleccionado = select.selectedIndex; // Obtiene el índice de la opción seleccionada
console.log(indiceSeleccionado); // Muestra el índice
```

3. select.value

- Descripción: Establece o obtiene el valor de la opción seleccionada.

Ejemplo:

```javascript
const valorSeleccionado = select.value; // Obtiene el valor de la opción seleccionada
console.log(valorSeleccionado); // Muestra el valor
```

4. select.add(newOption, referenceOption)

- Descripción: Agrega una nueva opción al <select>. Se puede especificar un nodo de referencia para insertarla en una posición específica.

Ejemplo:
```javascript
const nuevaOpcion = new Option("Nueva Opción", "nuevo_valor");
select.add(nuevaOpcion); // Agrega una nueva opción al final
```

5. select.remove(index)

- Descripción: Elimina una opción en el índice especificado.
Ejemplo:

```javascript
select.remove(0); // Elimina la primera opción del select
```

6. select.length

- Descripción: Devuelve el número de opciones en el <select>.

Ejemplo:

```javascript
const cantidadOpciones = select.length; // Obtiene el número de opciones
console.log(cantidadOpciones); // Muestra la cantidad de opciones
```

7. select.disabled

- Descripción: Establece o obtiene el estado de habilitación del <select>. Si es true, el control estará deshabilitado.

Ejemplo:

```javascript
select.disabled = true; // Deshabilita el select
```

8. select.size

- Descripción: Establece o obtiene el número de opciones visibles a la vez en el <select>.

Ejemplo:

```javascript
select.size = 5; // Muestra 5 opciones a la vez
```

9. select.multiple

- Descripción: Establece o obtiene el estado de selección múltiple del <select>. Si es true, se pueden seleccionar múltiples opciones.

Ejemplo:

```javascript
select.multiple = true; // Permite la selección múltiple
```

10. select.focus()

- Descripción: Establece el foco en el <select>, permitiendo al usuario interactuar inmediatamente.

Ejemplo:

```javascript
select.focus(); // Establece el foco en el select
```