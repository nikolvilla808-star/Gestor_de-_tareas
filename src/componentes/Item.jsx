// Item.jsx — versión mejorada con flexbox

// eslint-disable-next-line react/prop-types
export default function Item({ tarea = { texto: 'Tarea de ejemplo', completada: false } }) {
    return (
        <article style={estilos.item}>
            <p style={estilos.texto}>{tarea.texto}</p>
            <span style={{
                ...estilos.estado,
                ...(tarea.completada ? estilos.completada : estilos.pendiente)
            }}>
                {tarea.completada ? 'Lista' : 'Pendiente'}
            </span>
        </article>
    );
}

const estilos = {
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        margin: '4px 12px',
        borderRadius: 8,
        border: '1px solid #e0e0e0',
    },
    texto: {
        fontSize: 16,
        flex: 1,
        margin: 0,
    },
    estado: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 12,
        whiteSpace: 'nowrap',
        marginLeft: 16,
    },
    completada: {
        backgroundColor: '#d4edda',
        color: '#155724',
    },
    pendiente: {
        backgroundColor: '#fff3cd',
        color: '#856404',
    },
};