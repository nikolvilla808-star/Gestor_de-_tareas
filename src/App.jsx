// App.jsx — el componente principal que reúne los componentes de la aplicación

import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'


function App() {
  return (
    <div className="app">
      <Encabezado titulo="Mis Tareas" subtitulo="Organiza lo que tienes que hacer hoy" />
      <Formulario />
      <Lista />
      <Item tarea={{ texto: 'Estudiar React', completada: false }} />
      <PiePagina />
    </div>
  )
}

export default App