import { useState } from 'react'

export default function Item({ tarea, onCompletar, onEliminar }) {
  const [resaltado, setResaltado] = useState(false)

  const manejarCompletar = (evento) => {
    evento.stopPropagation()
    onCompletar(tarea.id)
  }

  const manejarEliminar = (evento) => {
    evento.stopPropagation()
    onEliminar(tarea.id)
  }

  return (
    <article
      className={`item ${resaltado ? 'resaltado' : ''}`}
      onClick={() => setResaltado((prev) => !prev)}
    >
      <div>
        <p className="texto">{tarea.texto}</p>

        <span className={`estado ${tarea.completada ? 'completada' : 'pendiente'}`}>
          {tarea.completada ? 'Lista' : 'Pendiente'}
        </span>
      </div>

      <div className="acciones">
        <button type="button" onClick={manejarCompletar}>
          ✓
        </button>
        <button type="button" onClick={manejarEliminar}>
          ✕
        </button>
      </div>
    </article>
  )
}
