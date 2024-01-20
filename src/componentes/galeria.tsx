import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextosProjetos } from '../mocks/textos';

const Galerias: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosProjetos.titulos}</Text>

      <View>
        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.horta}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.sopao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.pao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.projeto}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.palestra}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { /* Lógica ao pressionar o botão */ }}>
          <Text style={styles.secao}>{TextosProjetos.cultivo}</Text>
        </TouchableOpacity>
      </View>
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
  botao: {
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
  },
  secao: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Galerias;
