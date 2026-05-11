// Encabezado.jsx — versión mejorada
// eslint-disable-next-line react/prop-types
export default function Encabezado({ titulo, subtitulo }) {
  return (
    <header style={estilos.encabezado}>
      <h1 style={estilos.titulo}>{titulo}</h1>
      <p style={estilos.subtitulo}>{subtitulo}</p>
    </header>
  )
}

const estilos = {
  encabezado: {
    backgroundColor: '#1F3864',
    paddingVertical: 28,
    paddingHorizontal: 20,
    padding: '28px 20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    margin: 0,
  },
  subtitulo: {
    fontSize: 14,
    color: '#cdd5e0',
    margin: 0,
  },
}