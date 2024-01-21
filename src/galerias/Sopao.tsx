import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextosInicio } from '../mocks/textos';

const Sopao: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosInicio.tituloCard2}</Text>
      {/* Adicione o conteúdo do componente aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center",
  },
  // Adicione outros estilos conforme necessário
});

export default Sopao;
