import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextosInicio, TextosProjetos } from '../mocks/textos';

const Hortalicas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosInicio.tituloCard6}</Text>
      
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

export default Hortalicas;
