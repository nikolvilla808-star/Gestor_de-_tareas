// Encabezado.jsx - Componente de encabezado para la aplicación
import { View, Text, StyleSheet } from 'react-native';

export default function Encabezado({ titulo, subtitulo }) {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.titulo}>{titulo}</Text>
      {subtitulo && <Text style={styles.subtitulo}>{subtitulo}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  encabezado: {
    padding: 20,
    backgroundColor: '#1F3864',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#cdd5e0',
    marginTop: 4,
  },
});