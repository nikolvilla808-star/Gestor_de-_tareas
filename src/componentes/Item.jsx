import { useState } from 'react'

export default function Item({ tarea }) {
  const [resaltado, setResaltado] = useState(false)

  const manejarCompletar = (evento) => {
    evento.stopPropagation()
    alert(`Completar: ${tarea.texto}`)
  }

  const manejarEliminar = (evento) => {
    evento.stopPropagation()
    alert(`Eliminar: ${tarea.texto}`)
  }

  return (
    <article
      onClick={() => setResaltado(!resaltado)}
      style={{
        ...estilos.item,
        ...(resaltado ? estilos.resaltado : {}),
      }}
       >
      <div>
        <p style={estilos.texto}>{tarea.texto}</p>

        <span
          style={{
            ...estilos.estado,
            ...(tarea.completada
              ? estilos.completada
              : estilos.pendiente),
          }}
        >
          {tarea.completada ? 'Lista' : 'Pendiente'}
        </span>
      </div>

      <div style={estilos.acciones}>
        <button onClick={manejarCompletar}>✓</button>
        <button onClick={manejarEliminar}>✕</button>
      </div>
    </article>
  )
  }

const estilos = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: '10px 0',
    borderRadius: 8,
    border: '1px solid #ddd',
    cursor: 'pointer',
  },

  resaltado: {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffc107',
  },

  texto: {
    margin: 0,
    marginBottom: 8,
     },

  estado: {
    padding: '4px 10px',
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },

  completada: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },

  pendiente: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },

  acciones: {
    display: 'flex',
    gap: '8px',
  },
}