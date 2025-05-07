let ferias = JSON.parse(localStorage.getItem('ferias')) || []

function guardarEnStorage() {
    localStorage.setItem('ferias', JSON.stringify(ferias))
}

// Registrar feria
document.getElementById('feriaForm').addEventListener('submit', e => {
    e.preventDefault()
    const feria = {
        lugar: document.getElementById('lugar').value,
        fechaInicio: document.getElementById('fechaInicio').value,
        fechaFin: document.getElementById('fechaFin').value,
        horario: document.getElementById('horario').value,
        emprendimientos: []
    }
    ferias.push(feria)
    guardarEnStorage()
    actualizarSelect()
    mostrarFerias()
    e.target.reset()
})

// Registrar emprendimiento
document.getElementById('emprendimientoForm').addEventListener('submit', e => {
    e.preventDefault()
    const index = document.getElementById('feriaSelect').value
    const nuevo = {
        nombre: document.getElementById('nombreEmp').value,
        categoria: document.getElementById('categoria').value,
        descripcion: document.getElementById('descripcionEmp').value,
        redSocial: document.getElementById('redSocial').value,
        producto: {
            nombre: document.getElementById('nombreProd').value,
            precio: document.getElementById('precioProd').value,
            descripcion: document.getElementById('descripcionProd').value,
            foto: document.getElementById('fotoProd').value
        }
    }
    ferias[index].emprendimientos.push(nuevo)
    guardarEnStorage()
    mostrarFerias()
    e.target.reset()
})

// Actualizar select de ferias
function actualizarSelect() {
    const select = document.getElementById('feriaSelect')
    select.innerHTML = ''
    ferias.forEach((feria, i) => {
        const option = document.createElement('option')
        option.value = i
        option.textContent = `${feria.lugar} - ${feria.fechaInicio}`
        select.appendChild(option)
    })
}

// Mostrar ferias y emprendimientos
function mostrarFerias() {
    const contenedor = document.getElementById('listaFerias')
    contenedor.innerHTML = ''

    ferias
        .sort((a, b) => new Date(a.fechaInicio) - new Date(b.fechaInicio))
        .forEach(feria => {
            const div = document.createElement('div')
            div.innerHTML = `
        <h3>${feria.lugar} (${feria.fechaInicio} - ${feria.fechaFin})</h3>
        <p><strong>Horario:</strong> ${feria.horario}</p>
        <ul>
        ${feria.emprendimientos.map(emp => `
            <li>
            <strong>${emp.nombre}</strong> (${emp.categoria})<br>
            ${emp.descripcion}<br>
            <a href="${emp.redSocial}" target="_blank">Red Social LINK</a><br>
            Producto: ${emp.producto.nombre} - $${emp.producto.precio}<br>
            ${emp.producto.descripcion}<br>
            <img src="${emp.producto.foto}" width="100">
            </li>
        `).join('')}
        </ul>
    `
            contenedor.appendChild(div)
        })
}

// Cargar datos iniciales
actualizarSelect()
mostrarFerias()
