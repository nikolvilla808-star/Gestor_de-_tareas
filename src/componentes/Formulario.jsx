import { useState } from 'react'

export default function Formulario({ onAgregarTarea }) {
  const [nuevaTarea, setNuevaTarea] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    const texto = nuevaTarea.trim()
    if (texto === '') {
      alert('Por favor escribe una tarea')
      return
    }

    onAgregarTarea(texto)
    setNuevaTarea('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Agregar nueva tarea</h2>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button type="submit">Agregar</button>
    </form>
  )
}
