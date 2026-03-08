// ╔════════════════════════════════════════════════════════════════════╗
// ║                         EVENTOS                                    ║
// ╚════════════════════════════════════════════════════════════════════╝
// Un EVENTO es una ACCIÓN que ocurre en la página (clic, tecla, envío
// de formulario...) y que JavaScript puede detectar para ejecutar código.
//
// La forma estándar de escuchar un evento:
//
//   elemento.addEventListener("evento", función)
//
// addEventListener permite añadir VARIOS manejadores al mismo evento
// sin que se pisen entre ellos. También permite elegir la fase de
// propagación (capture / bubble).
//
// Para eliminar un listener:
//
//   elemento.removeEventListener("evento", función)
//   (la función debe ser la MISMA referencia, no una anónima)


// ============================================================
//  1. EVENTOS DE RATÓN
// ============================================================
//
// --- 1.1 Referencia rápida ---
//
// ┌────────────────┬──────────────────────────────────────────────────┐
// │ Evento         │ ¿Cuándo se dispara?                              │
// ├────────────────┼──────────────────────────────────────────────────┤
// │ click          │ Al hacer clic (presionar + soltar)               │
// │ dblclick       │ Al hacer doble clic                              │
// │ mousedown      │ Al PRESIONAR el botón (sin soltarlo aún)         │
// │ mouseup        │ Al SOLTAR el botón                               │
// │ mouseenter     │ Al entrar el puntero en el elemento              │
// │ mouseleave     │ Al salir el puntero del elemento                 │
// │ mousemove      │ Cada vez que el ratón se mueve sobre el elemento │
// │ contextmenu    │ Al hacer clic derecho (menú contextual)          │
// │ wheel          │ Al usar la rueda del ratón                       │
// └────────────────┴──────────────────────────────────────────────────┘
//
// 💡 mouseenter/mouseleave → solo detectan el elemento en sí
//    mouseover/mouseout    → también detectan los hijos (burbujean)
//    En la mayoría de casos, mouseenter/mouseleave es lo que quieres.
//
//
// --- 1.2 Ejemplos prácticos ---

// click — el más común de todos
const boton = document.querySelector("#btn");
boton.addEventListener("click", () => {
    console.log("¡Has hecho clic!");
});

// dblclick — doble clic
boton.addEventListener("dblclick", () => {
    console.log("Doble clic detectado");
});

// mousedown / mouseup — útil para drag & drop o efectos al mantener
boton.addEventListener("mousedown", () => console.log("Botón presionado"));
boton.addEventListener("mouseup", () => console.log("Botón soltado"));

// mouseenter / mouseleave — hover sin propagación a hijos
const caja = document.querySelector("#caja");
caja.addEventListener("mouseenter", () => {
    caja.style.background = "lightblue";
});
caja.addEventListener("mouseleave", () => {
    caja.style.background = "";
});

// mousemove — se dispara CONSTANTEMENTE
document.addEventListener("mousemove", (e) => {
    console.log(`Posición: X=${e.clientX}, Y=${e.clientY}`);
});

// contextmenu — bloquear o personalizar el clic derecho
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Clic derecho bloqueado");
});

// wheel — detectar scroll con la rueda
document.addEventListener("wheel", (e) => {
    // e.deltaY > 0 = scroll hacia abajo | < 0 = scroll hacia arriba
    console.log(e.deltaY > 0 ? "Scroll abajo" : "Scroll arriba");
});

//
// --- 1.3 El objeto event en eventos de ratón ---
//
// Cuando se dispara un evento de ratón, la función recibe un objeto
// con información útil:
//
// ┌──────────────┬───────────────────────────────────────────────────┐
// │ Propiedad    │ Descripción                                       │
// ├──────────────┼───────────────────────────────────────────────────┤
// │ e.clientX/Y  │ Posición del ratón respecto a la ventana visible  │
// │ e.pageX/Y    │ Posición respecto a la página completa (con scroll)│
// │ e.target     │ El elemento EXACTO donde ocurrió el evento        │
// │ e.button     │ Qué botón se pulsó (0=izq, 1=medio, 2=derecho)   │
// └──────────────┴───────────────────────────────────────────────────┘


// ============================================================
//  2. EVENTOS DE FORMULARIO  ← fundamentales para recoger datos
// ============================================================
//
// --- 2.1 Referencia rápida ---
//
// ┌────────────┬──────────────────────────────────────────────────────┐
// │ Evento     │ ¿Cuándo se dispara?                                  │
// ├────────────┼──────────────────────────────────────────────────────┤
// │ submit     │ Al enviar el formulario (botón submit o Enter)       │
// │ reset      │ Al restablecer el formulario                         │
// │ focus      │ Cuando un campo recibe el foco (clic o Tab)          │
// │ blur       │ Cuando un campo pierde el foco                       │
// │ change     │ Cuando el valor cambia Y el campo pierde el foco     │
// │ input      │ Cada vez que el usuario escribe (en tiempo real)     │
// └────────────┴──────────────────────────────────────────────────────┘
//
// 💡 change vs input:
//    input  → se dispara con CADA tecla, ideal para búsquedas en vivo
//    change → se dispara al terminar de editar (al salir del campo)
//
//
// --- 2.2 Ejemplos prácticos ---

// submit — lo más importante: SIEMPRE preventDefault para evitar recarga
const formulario = document.querySelector("#miForm");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();   // evita que la página se recargue
    const nombre = document.querySelector("#nombre").value;
    console.log(`Formulario enviado. Nombre: ${nombre}`);
});

// reset — interceptar el restablecimiento
formulario.addEventListener("reset", () => {
    console.log("Formulario restablecido");
});

// focus / blur — resaltar el campo activo
const campoNombre = document.querySelector("#nombre");
campoNombre.addEventListener("focus", () => {
    campoNombre.style.borderColor = "blue";
});
campoNombre.addEventListener("blur", () => {
    campoNombre.style.borderColor = "";
});

// input — validación o búsqueda en tiempo real
const buscador = document.querySelector("#buscador");
buscador.addEventListener("input", (e) => {
    console.log(`Buscando: ${e.target.value}`);
});

// change — útil en selects y checkboxes
const select = document.querySelector("#pais");
select.addEventListener("change", (e) => {
    console.log(`País seleccionado: ${e.target.value}`);
});

//
// --- 2.3 Patrón típico de validación ---
//
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    if (!email.includes("@")) {
        alert("Email no válido");
        return;           // corta la ejecución, no envía nada
    }

    console.log("Todo correcto, procesando...");
});


// ============================================================
//  3. EVENTOS DE TECLADO
// ============================================================
//
// ┌────────────┬──────────────────────────────────────────────────────┐
// │ Evento     │ ¿Cuándo se dispara?                                  │
// ├────────────┼──────────────────────────────────────────────────────┤
// │ keydown    │ Al presionar una tecla (se repite si se mantiene)    │
// │ keyup      │ Al soltar la tecla                                   │
// └────────────┴──────────────────────────────────────────────────────┘
//
// Propiedades útiles del evento:
//   e.key   → el carácter ("a", "Enter", "Escape"...)
//   e.code  → la tecla física ("KeyA", "ArrowUp"...)

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        console.log("Has pulsado Escape");
    }
});

// ╔════════════════════════════════════════════════════════════════════╗
// ║                       RESUMEN RÁPIDO 📋                            ║
// ╠════════════════════════════════════════════════════════════════════╣
// ║                                                                    ║
// ║  🔹 Escuchar:  elemento.addEventListener("evento", función)        ║
// ║  🔹 Eliminar:  elemento.removeEventListener("evento", función)     ║
// ║                                                                    ║
// ║  🔹 Ratón:   click, dblclick, mouseenter/leave, mousemove          ║
// ║  🔹 Forms:   submit (+ preventDefault), focus/blur, input, change  ║
// ║  🔹 Teclado: keydown / keyup  (e.key para saber la tecla)          ║
// ║                                                                    ║
// ║  🔹 preventDefault()    → evita el comportamiento por defecto      ║
// ║  🔹 stopPropagation()   → evita que el evento suba por el DOM      ║
// ║  🔹 Delegación          → un listener en el padre, e.target        ║
// ║                                                                    ║
// ╚════════════════════════════════════════════════════════════════════╝
