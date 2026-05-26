import Item from './Item'

export default function Lista({ tareas = [], onAlternarTarea, onEliminarTarea }) {
  return (
    <section className="lista">
      {tareas.length === 0 ? (
        <p className="mensaje-vacio">No hay tareas. ¡Agrega una para comenzar!</p>
      ) : (
        tareas.map((item) => (
          <Item
            key={item.id.toString()}
            tarea={item}
            onCompletar={onAlternarTarea}
            onEliminar={onEliminarTarea}
          />
        ))
      )}
    </section>
  )
}
