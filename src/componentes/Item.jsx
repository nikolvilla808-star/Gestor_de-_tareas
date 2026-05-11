// Item.jsx — recibe una tarea (objeto) por props

// eslint-disable-next-line react/prop-types
export default function Item({ tarea = { texto: 'Tarea de ejemplo', completada: false } }) {
    return (
        <article style={estilos.item}>
            <p style={estilos.texto}>{tarea.texto}</p>
            <p style={estilos.estado}>
                {tarea.completada ? 'Completada' : 'Pendiente'}
            </p>
        </article>
    );
}

const estilos = {
    item: {
        padding: 14,
        margin: '4px 12px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: 6,
    },
    texto: {
        fontSize: 16,
        margin: 0,
    },
    estado: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
        marginBottom: 0,
    },
};