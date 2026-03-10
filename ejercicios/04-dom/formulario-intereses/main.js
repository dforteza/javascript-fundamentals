function addSubject(e) {
    e.preventDefault()

    // 1- Recoger Texto
    const nbText = nb.value.trim()
    const apllText = apellidos.value.trim()
    const edadText = edad.value.trim()
    const mailText = email.value.trim()

    // 2- Validaciones
    if (nbText == "" || apllText == "") {
        alert("Campos vacios")
        return
    }
    
    const edadNum = Number(edadText)
    if (edadText == "" || !(edadNum >= 16 && edadNum <= 99)) {
        alert("Edad Incorrecta")
        return
    }

    if (!(mailText.includes('@') && mailText.includes('.'))) {
        alert("Email Incorrecto")
        return
    }

    const relLaboral = document.querySelector('input[name="empleo"]:checked')  // Mejor por name
    if (!relLaboral) {
        alert("Selecciona relacion laboral")
        return
    }

    let interests = []
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        interests.push(cb.id)
    });

    let frase = `${nbText} ${apllText} con email ${mailText} de ${edadText} años es ${relLaboral.value}`
    
    if (interests.length > 0) {
        frase += ` y le gusta ${interests.join(', ')}`
    } else {
        frase += ` y no tiene aficiones`
    }

    console.log(frase)
    
    // Aquí añadirías a la lista <ul>
    const lista = document.querySelector('ul')
    const li = document.createElement('li')
    li.textContent = frase
    lista.appendChild(li)
}

// 1- Capturar Campos
const nb = document.querySelector('#nombre')
const apellidos = document.querySelector('#apellidos')
const email = document.querySelector('#email')
const edad = document.querySelector('input[name="edad"]')
const btnAdd = document.querySelector('#boton')


document.addEventListener('DOMContentLoaded', function() {
    nb.value = "";
    apellidos.value = "";
    email.value = "";
    edad.value = "";
    document.querySelectorAll('input[type="radio"]').forEach(rb => { rb.checked = false });
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false }); 
});

btnAdd.addEventListener('click', addSubject)