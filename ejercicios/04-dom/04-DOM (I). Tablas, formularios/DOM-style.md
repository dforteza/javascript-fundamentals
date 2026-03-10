# Métodos y Propiedades para la Manipulación de Estilos en el DOM

1. element.style

- Descripción: Permite acceder y modificar los estilos CSS en línea de un elemento.

Ejemplo:

```javascript
const elemento = document.getElementById('miElemento');
elemento.style.color = 'blue'; // Cambia el color del texto a azul
```

2. element.style.propertyName

- Descripción: Establece o obtiene el valor de una propiedad CSS específica del elemento.

Ejemplo:

```javascript
elemento.style.backgroundColor = 'red'; // Cambia el color de fondo a rojo
```

3. element.style.cssText

- Descripción: Establece o obtiene todos los estilos CSS en línea de un elemento como un string.

Ejemplo:

```javascript
elemento.style.cssText = 'color: green; font-size: 16px;'; // Establece múltiples estilos
```

4. element.style.setProperty(propertyName, value, priority)

- Descripción: Establece el valor de una propiedad CSS, con la opción de especificar la prioridad (por ejemplo, important).

Ejemplo:

```javascript
elemento.style.setProperty('margin', '20px', 'important'); // Establece margen con !important
```

5. element.style.removeProperty(propertyName)

- Descripción: Elimina una propiedad CSS específica del elemento.

Ejemplo:

```javascript
elemento.style.removeProperty('color'); // Elimina la propiedad de color
```

6. element.style.getPropertyValue(propertyName)

- Descripción: Devuelve el valor de una propiedad CSS específica.

Ejemplo:

```javascript
const colorActual = elemento.style.getPropertyValue('color'); // Obtiene el color actual
console.log(colorActual);
```

7. element.style.display

- Descripción: Establece o obtiene el estilo de visualización del elemento (ej. block, none, inline).

Ejemplo:

```javascript
elemento.style.display = 'none'; // Oculta el elemento
```

8. element.style.visibility

- Descripción: Establece o obtiene la visibilidad de un elemento (visible, hidden).

Ejemplo:

```javascript
elemento.style.visibility = 'hidden'; // Hace el elemento invisible, pero ocupa espacio
```

9. element.style.opacity

- Descripción: Establece la opacidad del elemento, donde 0 es completamente transparente y 1 es completamente opaco.

Ejemplo:

```javascript
elemento.style.opacity = '0.5'; // Establece la opacidad al 50%
```

10. element.style.position

- Descripción: Establece la posición del elemento (static, relative, absolute, fixed, sticky).

Ejemplo:

```javascript
elemento.style.position = 'absolute'; // Cambia la posición a absoluta
```

11. element.style.zIndex

- Descripción: Establece el índice Z de un elemento, que controla su apilamiento en relación con otros elementos.

Ejemplo:

```javascript
elemento.style.zIndex = '10'; // Establece el índice Z a 10
```

12. element.style.width

- Descripción: Establece o obtiene el ancho del elemento.

Ejemplo:

```javascript
elemento.style.width = '200px'; // Establece el ancho a 200 píxeles
```

13. element.style.height

- Descripción: Establece o obtiene la altura del elemento.

Ejemplo:

```javascript
elemento.style.height = '100px'; // Establece la altura a 100 píxeles
```

14. element.style.border

- Descripción: Establece o obtiene las propiedades de borde del elemento.

Ejemplo:

```javascript
elemento.style.border = '1px solid black'; // Establece un borde negro de 1 píxel
```

15. element.style.fontSize

- Descripción: Establece o obtiene el tamaño de la fuente del texto del elemento.

Ejemplo:

```javascript
elemento.style.fontSize = '20px'; // Establece el tamaño de la fuente a 20 píxeles
```

16. element.style.margin

- Descripción: Establece o obtiene el margen exterior del elemento.

Ejemplo:

```javascript
elemento.style.margin = '10px'; // Establece un margen de 10 píxeles
```

17. element.style.padding

- Descripción: Establece o obtiene el relleno interior del elemento.

Ejemplo:

```javascript
elemento.style.padding = '5px'; // Establece un relleno de 5 píxeles
```