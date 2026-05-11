// Lista.jsx — usa estructura similar a FlatList para pintar todos los items
import Item from './Item'

// eslint-disable-next-line react/prop-types
export default function Lista({ tareas = [] }) {
    return (
        <div style={estilos.contenedor}>
            {tareas.length === 0 ? (
                <p style={estilos.mensajeVacio}>No hay tareas. ¡Agrega una para comenzar!</p>
            ) : (
                tareas.map((item) => (
                    <Item key={item.id.toString()} tarea={item} />
                ))
            )}
        </div>
    )
}

const estilos = {
    contenedor: {
        padding: '20px',
        minHeight: '200px',
    },
    mensajeVacio: {
        textAlign: 'center',
        color: '#999',
        fontSize: '16px',
        paddingTop: '40px',
    },
}