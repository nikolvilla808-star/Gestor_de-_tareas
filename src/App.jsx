// App.jsx — el componente principal que reúne los componentes de la aplicación

import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'


function App() {
  // Datos de ejemplo que simulan estar guardados
  const tareas = [
    { id: 1, texto: "Estudiar React Native", completada: false },
    { id: 2, texto: "Hacer ejercicio", completada: true },
    { id: 3, texto: "Leer 10 páginas", completada: false }
  ]

  return (
    <div className="app">
      <Encabezado titulo="Mis Tareas" subtitulo="Organiza lo que tienes que hacer hoy" />
      <Formulario />
      <Lista tareas={tareas} />
      <PiePagina />
    </div>
  )
}

export default App