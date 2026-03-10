# Métodos del DOM para Imágenes

1. img.src

- Descripción: Establece o obtiene la URL de la imagen.

Ejemplo:

```javascript
const img = document.getElementById('miImagen');
img.src = 'nueva_imagen.jpg'; // Cambia la fuente de la imagen
```

2. img.alt

- Descripción: Establece o obtiene el texto alternativo de la imagen, que se muestra si la imagen no 
se puede cargar.

Ejemplo:

```javascript
img.alt = 'Descripción de la imagen'; // Establece el texto alternativo
```
3. img.width

- Descripción: Establece o obtiene el ancho de la imagen en píxeles.

Ejemplo:

```javascript
img.width = 300; // Establece el ancho de la imagen a 300 píxeles
```

4. img.height

- Descripción: Establece o obtiene la altura de la imagen en píxeles.

Ejemplo:

```javascript
img.height = 200; // Establece la altura de la imagen a 200 píxeles
```

5. img.complete

- Descripción: Devuelve un valor booleano que indica si la imagen se ha cargado completamente.

Ejemplo:

```javascript
if (img.complete) {
    console.log('La imagen se ha cargado completamente.');
}
```

6. img.naturalWidth

- Descripción: Devuelve el ancho natural de la imagen (el ancho real de la imagen en píxeles).

Ejemplo:

```javascript
console.log(img.naturalWidth); // Muestra el ancho natural de la imagen
```

7. img.naturalHeight

- Descripción: Devuelve la altura natural de la imagen (la altura real de la imagen en píxeles).

Ejemplo:

```javascript
console.log(img.naturalHeight); // Muestra la altura natural de la imagen
```

8. img.style

- Descripción: Permite acceder y modificar los estilos CSS de la imagen.

Ejemplo:

```javascript
img.style.border = '2px solid red'; // Agrega un borde rojo a la imagen
```

9. img.onload

- Descripción: Establece una función que se ejecuta cuando la imagen se ha cargado completamente.

Ejemplo:

```javascript
img.onload = function() {
    console.log('La imagen se ha cargado.');
};
```

10. img.onerror

- Descripción: Establece una función que se ejecuta si ocurre un error al cargar la imagen.

Ejemplo:

```javascript
img.onerror = function() {
    console.log('Error al cargar la imagen.');
};
```

11. img.className

- Descripción: Establece o obtiene el nombre de la clase CSS de la imagen.

Ejemplo:

```javascript
img.className = 'miClase'; // Agrega una clase CSS a la imagen
```

12. img.style.display

- Descripción: Establece o obtiene el estilo de visualización de la imagen (ej. block, none).

Ejemplo:

```javascript
img.style.display = 'none'; // Oculta la imagen
```