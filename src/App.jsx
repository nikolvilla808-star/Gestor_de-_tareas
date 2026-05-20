import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const tareas = [
    { id: 1, texto: 'Estudiar React', completada: false },
    { id: 2, texto: 'Hacer ejercicio', completada: true },
    { id: 3, texto: 'Leer 10 páginas', completada: false },
  ]

  return (
    <div className="app">
      <Encabezado />

      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        style={estilos.botonToggle}
         >
        {mostrarFormulario ? 'Ocultar formulario' : 'Agregar tarea'}
      </button>

      {mostrarFormulario && <Formulario />}

      <Lista tareas={tareas} />

      <PiePagina />
    </div>
  )
}

const estilos = {
  botonToggle: {
    margin: '20px',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1F3864',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
}
export default App