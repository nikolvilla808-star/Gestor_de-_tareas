import { useState } from 'react'

function Formulario() {
  const [nuevaTarea, setNuevaTarea] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (nuevaTarea.trim() === '') {
      alert('Por favor escribe una tarea')
      return
    }

    alert(`Tarea capturada: ${nuevaTarea}`)

    setNuevaTarea('')
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agregar nueva tarea</h2>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  )
}

export default Formulario