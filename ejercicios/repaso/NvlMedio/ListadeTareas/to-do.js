let tareas = []

function renderLista() 
{
	// Campos Lista
	const lista = document.querySelector('#lista')
	const contador = document.querySelector('#contador')
	lista.innerHTML = '' // limpia etiquetas

	// Recorrer Tareas
	tareas.forEach(tarea => {
		const li = document.createElement('li')
		li.style.textDecoration = tarea.completada ? 'line-through' : 'none'
		li.style.color = tarea.completada ? '#aaa' : '#000'

		const btnToggle = document.createElement('button')
		btnToggle.textContent = '✓'
		btnToggle.onclick = () => toggleCompletada(tarea.id)

		const btnEliminar = document.createElement('button')
		btnEliminar.textContent = '✗'
		btnEliminar.onclick = () => eliminarTarea(tarea.id)

		li.append(btnToggle, ' ' + tarea.texto + ' ', btnEliminar)
		lista.appendChild(li)
	})

	const pendientes = tareas.filter(t => !t.completada).length
	contador.textContent = pendientes + ' tareas pendientes'
}

function addTarea() 
{
	// Leer txtValue
	const input = document.querySelector('#tarea')
	const texto = input.value.trim()

	// Validaciones
	if (texto.length < 3) {
		alert('La tarea debe tener al menos 3 caracteres')
		return
	}

	// Crear New Task
	const nuevaTarea = { id: Date.now(), texto: texto, completada: false }
	tareas.push(nuevaTarea)
	input.value = '' // limpiar

	// Render
	renderLista()
}

function eliminarTarea(id) 
{
	tareas = tareas.filter(t => t.id !== id)
	renderLista()
}

function toggleCompletada(id) 
{
	const tarea = tareas.find(t => t.id === id)
	if (tarea) 
		tarea.completada = !tarea.completada
	renderLista()
}

document.querySelector('#btnAdd').addEventListener('click', addTarea)
renderLista()