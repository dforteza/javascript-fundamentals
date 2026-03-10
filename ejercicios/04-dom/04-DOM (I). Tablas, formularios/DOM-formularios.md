# Métodos del DOM para Formularios

1. form.submit()

- Descripción: Envía el formulario.
Ejemplo:

```javascript
const formulario = document.getElementById('miFormulario');
formulario.submit(); // Envía el formulario
```

2. form.reset()

- Descripción: Restablece todos los controles de un formulario a sus valores predeterminados.
Ejemplo:

```javascript
const formulario = document.getElementById('miFormulario');
formulario.reset(); // Restablece el formulario
```

3. form.elements

- Descripción: Devuelve una colección de todos los controles en el formulario.
Ejemplo:

```javascript
const elementos = formulario.elements; // Obtiene todos los elementos del formulario
for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i].name); // Muestra el nombre de cada elemento
}
```

4. form.action

- Descripción: Establece o obtiene la URL a la que se enviará el formulario.
Ejemplo:

```javascript
formulario.action = "https://mi-servidor.com/enviar"; // Establece la URL del formulario

```
5. form.method

- Descripción: Establece o obtiene el método HTTP que se utilizará para enviar el formulario (GET o POST).
Ejemplo:

```javascript
formulario.method = "POST"; // Establece el método como POST
```

6. form.target

- Descripción: Establece o obtiene el destino donde se abrirá la respuesta del formulario.
Ejemplo:

```javascript
formulario.target = "_blank"; // Abre la respuesta en una nueva pestaña

```
7. form.checkValidity()

- Descripción: Verifica si el formulario cumple con las restricciones de validación. Devuelve true si es válido, false si no lo es.
Ejemplo:

```javascript
if (formulario.checkValidity()) {
    console.log("Formulario válido");
} else {
    console.log("Formulario no válido");
}

```
8. form.reportValidity()

- Descripción: Muestra un mensaje de error para los elementos que no son válidos y devuelve true si el formulario es válido.
Ejemplo:

```javascript
if (formulario.reportValidity()) {
    console.log("Formulario válido");
}

```
9. form.focus()

- Descripción: Establece el foco en el formulario, lo que puede ser útil para resaltar el formulario cuando se carga la página.
Ejemplo:

```javascript
formulario.focus(); // Establece el foco en el formulario
```

10. form.addEventListener(type, listener)

- Descripción: Agrega un evento al formulario (como submit o reset).
Ejemplo:

```javascript
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    console.log("Formulario enviado");
});
```