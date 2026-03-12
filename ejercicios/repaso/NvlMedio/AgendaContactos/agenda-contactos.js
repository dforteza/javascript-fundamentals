let contactos = []

const colores = { amigos: '#4caf50', trabajo: '#2196f3', familia: '#ff9800' }

function renderAgenda() {
  const agenda = document.querySelector('#agenda')
  const textoBuscar = document.querySelector('#buscar').value.toLowerCase()

  const resultado = contactos.filter(c =>
    c.nombre.toLowerCase().includes(textoBuscar)
  )

  if (contactos.length === 0) {
    agenda.innerHTML = '<p>La agenda está vacía</p>'
    return
  }

  agenda.innerHTML = ''
  resultado.forEach(c => {
    const div = document.createElement('div')
    const colorGrupo = colores[c.grupo] || '#999'
    div.innerHTML = `
      <strong>${c.nombre}</strong> — ${c.telefono} — ${c.email}
      <span style="background:${colorGrupo};color:#fff;padding:2px 8px;border-radius:10px;font-size:0.8em">${c.grupo}</span>
      <button data-id="${c.id}">Eliminar</button>
    `
    agenda.appendChild(div)
  })

  // Delegación de eventos para eliminar
  agenda.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id)
      contactos = contactos.filter(c => c.id !== id)
      renderAgenda()
    })
  })
}

function addContacto() {
  const nombre = document.querySelector('#nombre').value.trim()
  const telefono = document.querySelector('#telefono').value.trim()
  const email = document.querySelector('#email').value.trim()
  const grupo = document.querySelector('#grupo').value

  if (nombre.length < 2) { alert('El nombre debe tener al menos 2 caracteres'); return }
  if (!/^\d{9}$/.test(telefono)) { alert('El teléfono debe tener exactamente 9 dígitos numéricos'); return }
  if (!email.includes('@') || !email.includes('.')) { alert('El email no tiene formato válido'); return }
  if (grupo === '') { alert('Selecciona un grupo'); return }

  contactos.push({ id: Date.now(), nombre, telefono, email, grupo })
  renderAgenda()
}

document.querySelector('#btnAdd').addEventListener('click', addContacto)
document.querySelector('#buscar').addEventListener('input', renderAgenda)
renderAgenda()