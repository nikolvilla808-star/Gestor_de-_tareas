// Formulario.jsx — para agregar nuevas tareas, buscar y filtrar

export default function Formulario() {
    return (
        <section style={estilos.formulario}>
            <div style={estilos.contenedorInput}>
                <input
                    type="text"
                    placeholder="Escribe una nueva tarea..."
                    style={estilos.input}
                />
                <button style={estilos.botonAgregar}>Agregar</button>
            </div>
            <input
                type="text"
                placeholder="Buscar tareas..."
                style={estilos.inputBuscar}
            />
            <div style={estilos.contenedorFiltros}>
                <button style={{ ...estilos.botonFiltro, ...estilos.botonActivo }}>Todas</button>
                <button style={estilos.botonFiltro}>Pendientes</button>
                <button style={estilos.botonFiltro}>Completadas</button>
            </div>
        </section>
    );
}

const estilos = {
    formulario: {
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    contenedorInput: {
        display: 'flex',
        gap: '12px',
        marginBottom: '16px',
    },
    input: {
        flex: 1,
        padding: '12px 16px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        outline: 'none',
    },
    botonAgregar: {
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    inputBuscar: {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '16px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    contenedorFiltros: {
        display: 'flex',
        gap: '12px',
    },
    botonFiltro: {
        flex: 1,
        padding: '12px 16px',
        fontSize: '16px',
        fontWeight: '500',
        backgroundColor: '#fff',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: '8px',
        cursor: 'pointer',
    },
    botonActivo: {
        backgroundColor: '#007BFF',
        color: '#fff',
        borderColor: '#007BFF',
    },
};