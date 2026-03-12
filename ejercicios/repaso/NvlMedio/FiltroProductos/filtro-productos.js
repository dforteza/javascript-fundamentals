const productos = [
  { id:1, nombre:"Teclado mecánico", categoria:"informatica", precio:89.99 },
  { id:2, nombre:"Ratón inalámbrico", categoria:"informatica", precio:34.50 },
  { id:3, nombre:"Auriculares BT",   categoria:"audio",       precio:129.00 },
  { id:4, nombre:"Cable HDMI",        categoria:"informatica", precio:12.99 },
  { id:5, nombre:"Altavoces 2.1",    categoria:"audio",       precio:79.95 },
  { id:6, nombre:"Monitor 24''",      categoria:"informatica", precio:249.00 },
  { id:7, nombre:"Micrófono USB",    categoria:"audio",       precio:59.90 },
]

function renderProductos() 
{
  const textoBuscar = document.querySelector('#buscar').value.toLowerCase()
  const categoriaSelec = document.querySelector('#categoria').value
  const grid = document.querySelector('#grid')
  const contador = document.querySelector('#contador')

  // Aplicar ambos filtros encadenados
  let resultado = productos
    .filter(p => categoriaSelec === '' || p.categoria === categoriaSelec)
    .filter(p => p.nombre.toLowerCase().includes(textoBuscar))

  contador.textContent = resultado.length + ' productos encontrados'
  grid.innerHTML = ''

  if (resultado.length === 0) {
    grid.innerHTML = '<p>No se encontraron productos</p>'
    return
  }

  resultado.forEach(p => {
    const div = document.createElement('div')
    div.innerHTML = `
      <strong>${p.nombre}</strong><br>
      Categoría: ${p.categoria}<br>
      Precio: ${p.precio.toFixed(2)} €
    `
    div.style.border = '1px solid #ccc'
    div.style.padding = '10px'
    div.style.margin = '8px 0'
    grid.appendChild(div)
  })
}

document.querySelector('#buscar').addEventListener('input', renderProductos)
document.querySelector('#categoria').addEventListener('change', renderProductos)
renderProductos()