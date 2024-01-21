import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextosInicio, TextosProjetos } from '../mocks/textos';

const Hortalicas: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosInicio.tituloCard6}</Text>
      
      <Text style={styles.descricaoProjeto}>Num canto remoto do universo, onde as estrelas dançam em harmonia, uma pequena nave espacial navegava pelo cosmos, explorando os segredos do espaço infinito. A tripulação, composta por seres de diferentes galáxias, compartilhava histórias fascinantes sobre os mundos que haviam descoberto.</Text>
      
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
  descricaoProjeto:{
    color: "#3C533C",
    fontSize: 19
  },
});

export default Hortalicas;
