import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextosProjetos } from '../mocks/textos';

const ProjetosPrincipais: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosProjetos.titulos}</Text>

      <View>
        <Text style={styles.secao}>{TextosProjetos.horta}</Text>
        <Text style={styles.secao}>{TextosProjetos.sopao}</Text>
        <Text style={styles.secao}>{TextosProjetos.pao}</Text>
        <Text style={styles.secao}>{TextosProjetos.projeto}</Text>
        <Text style={styles.secao}>{TextosProjetos.palestra}</Text>
        <Text style={styles.secao}>{TextosProjetos.cultivo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cor de fundo da tela
    padding: 16, // Espaçamento interno
    marginVertical: 10,
    
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: "center",
  },

  secao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: "5%",
    paddingHorizontal: 16,
    marginVertical: 4,
    height: 82,
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#3C533C',
    color: '#fff',
    fontWeight:"bold",
    fontSize: 20,
    textAlign: "center"
  },
});

export default ProjetosPrincipais;
