// ╔════════════════════════════════════════════════════════════════════╗
// ║                    DOM (Document Object Model)                     ║
// ╚════════════════════════════════════════════════════════════════════╝
// El DOM es la REPRESENTACIÓN EN ÁRBOL de un documento HTML.
// JavaScript puede acceder y modificar cualquier parte de ese árbol.
//
//  Document
//  │
//  ├── html
//  │   ├── head
//  │   │   └── title → "Mi Página"
//  │   └── body
//  │       ├── h1 → "Título"
//  │       ├── p  → "Texto..."
//  │       └── div#miDiv
//  │           ├── p  → "Párrafo dentro del div"
//  │           └── a  → "Un enlace"
//
// Todo en el DOM es un NODO. Tipos: 
//  1- Nodo documento  → el nodo raíz (document)
//  2- Nodo elemento   → cada etiqueta HTML (div, p, a...)
//  3- Nodo texto      → el texto dentro de un elemento
//  4- Nodo atributo   → atributos de nodos elemento / Nodos de 2º nvl
//  5- Nodo comentario → cometarios HTML

// ============================================
// 1. MÉTODOS DE SELECCIÓN
// ============================================
//
//   Reapso id, class y tag
//  ┌─────────┬───────────────────┬────────┬──────────────────────┐
//  │         │ HTML              │  CSS   │  JS (querySelector)  │
//  ├─────────┼───────────────────┼────────┼──────────────────────┤
//  │ id      │ id="titulo"       │ #titulo│ '#titulo'            │
//  │ class   │ class="rojo"      │ .rojo  │ '.rojo'              │
//  │ tag     │ <p>, <div>...     │ p, div │ 'p', 'div'           │
//  └─────────┴───────────────────┴────────┴──────────────────────┘
//  id = único en la página | class = reutilizable | tag = la propia etiqueta
//
//  ┌──────────────────────────────┬────────────────────────────────────┐
//  │ Método (Document)            │ Devuelve → ELEMENTO(S)             │
//  ├──────────────────────────────┼────────────────────────────────────┤
//  │ getElementById('id')         │ 1 elemento (o null)                │
//  │ getElementsByClassName('c')  │ HTMLCollection (en vivo)           │
//  │ getElementsByTagName('tag')  │ HTMLCollection (en vivo)           │
//  │ querySelector('selector')    │ 1er elemento que coincida          │
//  │ querySelectorAll('selector') │ NodeList (estática, todos)         │
//  └──────────────────────────────┴────────────────────────────────────┘
//
//  💡 querySelector usa selectores CSS → el más versátil.
//  ⚠️ HTMLCollection se actualiza sola si el DOM cambia, NodeList no.

// --- 1.1 getElementById ---
const titulo = document.getElementById('titulo');

// --- 1.2 getElementsByClassName ---
const rojos = document.getElementsByClassName('rojo'); // todos los .rojo

// --- 1.3 getElementsByTagName ---
const parrafos = document.getElementsByTagName('p');   // todos los <p>

// --- 1.4 querySelector (el primero) ---
const primero = document.querySelector('.rojo');        // primer .rojo
const dentro  = document.querySelector('#caja .rojo');  // selector CSS compuesto

// --- 1.5 querySelectorAll (todos) ---
const todos = document.querySelectorAll('.rojo');
todos.forEach(el => console.log(el.textContent));

// --- 1.6 Navegar por el árbol ---
//
//  ┌─────────────────────────┬────────────────────────────────────────┐
//  │ Propiedad               │ Devuelve                               │
//  ├─────────────────────────┼────────────────────────────────────────┤
//  │ parentElement           │ Elemento padre                         │
//  │ children                │ Hijos (solo elementos) - HTMLCollection│
//  │ firstElementChild       │ Primer hijo elemento                   │
//  │ lastElementChild        │ Último hijo elemento                   │
//  │ nextElementSibling      │ Hermano siguiente                      │
//  │ previousElementSibling  │ Hermano anterior                       │
//  └─────────────────────────┴────────────────────────────────────────┘

const div = document.querySelector('#caja');
console.log(div.parentElement);        // Padre
console.log(div.children);            // Hijos directos / HTMLCollection
console.log(div.firstElementChild);   // = div.children[0]
console.log(div.nextElementSibling);  // Hermano siguiente


// ============================================
// 2. MÉTODOS DE MANIPULACIÓN
// ============================================

// --- 2.1 Modificar contenido ---
//
//  ┌──────────────┬─────────────────────────────────────────────┐
//  │ Propiedad    │ Descripción                                 │
//  ├──────────────┼─────────────────────────────────────────────┤
//  │ textContent  │ Lee/cambia solo el TEXTO (seguro)           │
//  │ innerHTML    │ Lee/cambia el HTML interno (⚠️ XSS)         │
//  │ value        │ Lee/cambia el valor de un input/select      │
//  └──────────────┴─────────────────────────────────────────────┘

titulo.textContent = 'Nuevo título';
titulo.innerHTML = '<em>Cursiva</em>';

// --- 2.2 Modificar atributos ---
titulo.setAttribute('id', 'nuevoId');
titulo.getAttribute('id');             // "nuevoId"
titulo.removeAttribute('id');

// --- 2.3 Modificar clases ---
//
//  ┌──────────────────────┬──────────────────────────────────────┐
//  │ Método               │ Qué hace                             │
//  ├──────────────────────┼──────────────────────────────────────┤
//  │ classList.add('c')   │ Añade una clase                      │
//  │ classList.remove('c')│ Quita una clase                      │
//  │ classList.toggle('c')│ Añade/quita (interruptor)            │
//  └──────────────────────┴──────────────────────────────────────┘

titulo.classList.add('activo');
titulo.classList.remove('activo');
titulo.classList.toggle('activo');

// --- 2.4 Crear y añadir elementos ---
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy nuevo';
document.body.appendChild(nuevoDiv);   // Añade al final del body

// --- 2.5 Insertar en posición específica ---
const ref = document.querySelector('#titulo');
ref.after(nuevoDiv);                   // Después del título
// ref.before(nuevoDiv);              // Antes del título
// parent.insertBefore(nuevo, ref);   // Alternativa clásica

// --- 2.6 Eliminar y reemplazar ---
nuevoDiv.remove();                     // Se elimina a sí mismo
// parent.removeChild(hijo);          // Elimina un hijo
// parent.replaceChild(nuevo, viejo); // Reemplaza un hijo


// ============================================
// 3. MÉTODOS DE ESTILO
// ============================================
// Para ACCEDER Y MODIFICAR ESTILOS CSS
// Se accede con element.style.propiedad (camelCase)
// ⚠️ CSS usa guiones (background-color), JS usa camelCase (backgroundColor)
//
//  ┌──────────────────────────┬────────────────────────────────────┐
//  │ CSS                      │ JavaScript                         │
//  ├──────────────────────────┼────────────────────────────────────┤
//  │ color                    │ .style.color                       │
//  │ background-color         │ .style.backgroundColor             │
//  │ font-size                │ .style.fontSize                    │
//  │ margin                   │ .style.margin                      │
//  │ padding                  │ .style.padding                     │
//  │ border                   │ .style.border                      │
//  │ display                  │ .style.display                     │
//  │ visibility               │ .style.visibility                  │
//  │ opacity                  │ .style.opacity                     │
//  │ width / height           │ .style.width / .style.height       │
//  │ position                 │ .style.position                    │
//  │ z-index                  │ .style.zIndex                      │
//  └──────────────────────────┴────────────────────────────────────┘

// --- 3.1 Cambiar estilos individuales ---
const elem = document.querySelector('#titulo');
elem.style.color = 'blue';
elem.style.backgroundColor = '#333';
elem.style.fontSize = '20px';
elem.style.border = '1px solid black';

// --- 3.2 Cambiar varios estilos de golpe con cssText ---
elem.style.cssText = 'color: green; font-size: 16px; padding: 10px;';

// --- 3.3 Ocultar / mostrar elementos ---
elem.style.display = 'none';          // Oculta (no ocupa espacio)
elem.style.display = 'block';         // Muestra de nuevo

elem.style.visibility = 'hidden';     // Invisible (SÍ ocupa espacio)
elem.style.visibility = 'visible';    // Visible de nuevo

// --- 3.4 Leer y eliminar un estilo ---
elem.style.getPropertyValue('color'); // Lee el valor → "blue"
elem.style.removeProperty('color');   // Elimina esa propiedad


// ============================================
// 4. MÉTODOS DE FORMULARIOS
// ============================================
// Los formularios se seleccionan como cualquier elemento.
// Sus controles (inputs, selects...) se leen/escriben con .value
//
//  ┌────────────────────────┬─────────────────────────────────────┐
//  │ Método / Propiedad     │ Qué hace                            │
//  ├────────────────────────┼─────────────────────────────────────┤
//  │ form.submit()          │                                     │
//  │ form.reset()           │                                     │
//  │ form.elements          │ Colección de todos los controles    │
//  │ form.action            │ URL a la que se envía               │
//  │ form.method            │ Método HTTP (GET / POST)            │
//  │ form.checkValidity()   │ ¿Es válido? → true / false          │
//  │ input.value            │ Lee/cambia el valor de un campo     │
//  │ input.focus()          │ Pone el cursor en ese campo         │
//  └────────────────────────┴─────────────────────────────────────┘

// --- 4.1 Seleccionar formulario y leer campos ---
const formulario = document.querySelector('#miFormulario');
const nombre = document.querySelector('#nombre');
console.log(nombre.value);             // Lee lo que escribió el usuario

// --- 4.2 Enviar y resetear ---
formulario.submit();                   // Envía el formulario
formulario.reset();                    // Limpia todos los campos

// --- 4.3 Recorrer todos los controles ---
for (let i = 0; i < formulario.elements.length; i++) {
    console.log(formulario.elements[i].name, formulario.elements[i].value);
}

// Alternativa con forEach (hay que convertir a array porque elements es HTMLCollection)
[...formulario.elements].forEach(campo => {
    console.log(campo.name, campo.value);
});

// --- 4.4 Validación ---
if (formulario.checkValidity())
    console.log("Formulario válido");
else
    formulario.reportValidity();       // Muestra mensajes de error al usuario

// --- 4.5 Prevenir envío por defecto (muy común) ---
formulario.addEventListener('submit', function(event) {
    event.preventDefault();            // Evita que se recargue la página
    console.log("Formulario interceptado");
});


// ============================================
// 5. IMÁGENES, SELECT Y TABLAS (lo esencial)
// ============================================

// --- 5.1 Imágenes ---
const img = document.querySelector('#miImagen');
img.src = 'nueva_imagen.jpg';          // Cambia la imagen
img.alt = 'Descripción de la imagen';  // Texto alternativo
img.width = 300;                       // Ancho en px
img.height = 200;                      // Alto en px

// --- 5.2 Select (listas desplegables) ---
const select = document.querySelector('#miSelect');
select.value;                          // Valor de la opción seleccionada
select.selectedIndex;                  // Índice de la opción seleccionada
select.options;                        // Colección de todas las opciones

// Añadir y eliminar opciones
select.add(new Option('Texto', 'valor')); // Añade opción al final
select.remove(0);                         // Elimina opción por índice

// --- 5.3 Tablas ---
const tabla = document.createElement('table');
const tbody = tabla.createTBody();     // Crea <tbody>
const fila  = tbody.insertRow();       // Inserta <tr>
const celda = fila.insertCell();       // Inserta <td>
celda.textContent = 'Contenido';

tabla.deleteRow(0);                    // Elimina fila por índice
fila.deleteCell(0);                    // Elimina celda por índice

document.body.appendChild(tabla);      // Añade la tabla al body


// ============================================
// RESUMEN RÁPIDO
// ============================================
//
//  📌 Seleccionar:  querySelector / querySelectorAll (los más útiles)
//  📌 Navegar:      parentElement / children / siblings
//  📌 Contenido:    textContent (seguro) / innerHTML (HTML) / value (inputs)
//  📌 Atributos:    getAttribute / setAttribute / removeAttribute
//  📌 Clases:       classList.add / remove / toggle
//  📌 Crear:        createElement → appendChild / before / after
//  📌 Eliminar:     remove() o removeChild()
//  📌 Estilos:      element.style.propiedad (camelCase)
//  📌 Ocultar:      display: none (desaparece) / visibility: hidden (invisible)
//  📌 Formularios:  .value (leer campos) / submit() / reset() / preventDefault()
//  📌 Imágenes:     img.src / img.alt / img.width / img.height
//  📌 Select:       select.value / select.options / add() / remove()
//  📌 Tablas:       createTBody → insertRow → insertCell → textContent
//
// ============================================
