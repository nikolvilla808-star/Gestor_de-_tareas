// PiePagina.jsx — versión mejorada

export default function PiePagina() {
    return (
        <footer style={estilos.pie}>
            <p style={estilos.texto}>Creado por Nikol Villa · SENA 2026</p>
        </footer>
    );
}

const estilos = {
    pie: {
        paddingVertical: 16,
        paddingTop: 16,
        paddingBottom: 16,
        textAlign: 'center',
        borderTopWidth: 1,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 12,
        color: '#888',
        margin: 0,
    },
};