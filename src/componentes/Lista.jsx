// Lista.jsx — usa estructura similar a FlatList para pintar todos los items
import Item from './Item'

// eslint-disable-next-line react/prop-types
export default function Lista({ tareas = [] }) {
    return (
        <div style={estilos.contenedor}>
            {tareas.map((item) => (
                <Item key={item.id.toString()} tarea={item} />
            ))}
        </div>
    )
}

const estilos = {
    contenedor: {
        paddingVertical: 8,
        padding: '8px 0',
    },
}