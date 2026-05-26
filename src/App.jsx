import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Estudiar React', completada: false },
    { id: 2, texto: 'Hacer ejercicio', completada: true },
    { id: 3, texto: 'Leer 10 páginas', completada: false },
  ])

  const agregarTarea = (texto) => {
    setTareas((prevTareas) => [
      ...prevTareas,
      { id: Date.now(), texto, completada: false },
    ])
    setMostrarFormulario(false)
  }

  const alternarCompletada = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id))
  }

  const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length
  const tareasPendientes = tareas.length - tareasCompletadas

  return (
    <div className="app">
      <Encabezado />

      <div className="panel-control">
        <button
          className="boton-toggle"
          onClick={() => setMostrarFormulario((visible) => !visible)}
        >
          {mostrarFormulario ? 'Ocultar formulario' : 'Agregar tarea'}
        </button>

        <div className="resumen">
          <span>Tareas: {tareas.length}</span>
          <span>Completadas: {tareasCompletadas}</span>
          <span>Pendientes: {tareasPendientes}</span>
        </div>
      </div>

      {mostrarFormulario && <Formulario onAgregarTarea={agregarTarea} />}

      <Lista
        tareas={tareas}
        onAlternarTarea={alternarCompletada}
        onEliminarTarea={eliminarTarea}
      />

      <PiePagina />
    </div>
  )
}

export default App
