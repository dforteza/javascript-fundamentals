# Métodos y Propiedades para la Manipulación y Creación de Tablas en el DOM

1. document.createElement(tagName)

- Descripción: Crea un nuevo elemento en el DOM.

Ejemplo:

```javascript
const tabla = document.createElement('table');
```

2. table.createTHead()

- Descripción: Crea un elemento <thead> para una tabla.

Ejemplo:

```javascript
const thead = tabla.createTHead();
```

3. table.createTBody()

- Descripción: Crea un elemento <tbody> para una tabla.

Ejemplo:

```javascript
const tbody = tabla.createTBody();
```

4. table.createTFoot()

- Descripción: Crea un elemento <tfoot> para una tabla.

Ejemplo:

```javascript
const tfoot = tabla.createTFoot();
```

5. table.insertRow(index)

- Descripción: Inserta una nueva fila (<tr>) en la tabla en la posición especificada.

Ejemplo:

```javascript
const fila = tbody.insertRow(); // Al final de tbody
const fila2 = tbody.insertRow(0); // En la primera posición
```

6. row.insertCell(index)

- Descripción: Inserta una nueva celda (<td>) en la fila en la posición especificada.

Ejemplo:

```javascript
const celda = fila.insertCell(); // Al final de la fila
const celda2 = fila.insertCell(0); // En la primera posición
```

7. cell.innerText

- Descripción: Establece o obtiene el texto contenido en una celda.

Ejemplo:

```javascript
celda.innerText = "Contenido de la celda";
```

8. cell.innerHTML

- Descripción: Establece o obtiene el contenido HTML de una celda.

Ejemplo:

```javascript
celda.innerHTML = "<strong>Contenido en negrita</strong>";
```

9. table.appendChild(node)

- Descripción: Agrega un nodo (tabla, fila, celda, etc.) como hijo al final del elemento.

Ejemplo:

```javascript
document.body.appendChild(tabla); // Agrega la tabla al body
```

10. thead.insertRow()

- Descripción: Inserta una nueva fila en el <thead>.

Ejemplo:

```javascript
const filaEncabezado = thead.insertRow();
```

11. tfoot.insertRow()

- Descripción: Inserta una nueva fila en el <tfoot>.

Ejemplo:

```javascript
const filaPie = tfoot.insertRow();
```

12. table.deleteRow(index)

- Descripción: Elimina una fila de la tabla en la posición especificada.

Ejemplo:

```javascript
tabla.deleteRow(0); // Elimina la primera fila
```

13. row.deleteCell(index)

- Descripción: Elimina una celda de la fila en la posición especificada.

Ejemplo:

```javascript
fila.deleteCell(0); // Elimina la primera celda de la fila
```

14. table.caption

- Descripción: Permite acceder y establecer un elemento <caption> que describe la tabla.

Ejemplo:

```javascript
const caption = tabla.createCaption();
caption.innerText = "Título de la tabla";
```

15. row.className

- Descripción: Establece o obtiene el nombre de la clase CSS de una fila.

Ejemplo:

```javascript
fila.className = "miClase"; // Agrega una clase CSS a la fila
```