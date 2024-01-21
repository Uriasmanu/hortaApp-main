import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { TextosInicio } from '../mocks/textos';
import { ScrollView } from 'react-native-gesture-handler';

const Padaria: React.FC = () => {
  const imagens = [
    require('../../assets/Imagens/Padaria/padaria.png'),
    require('../../assets/Imagens/Padaria/imagem8.png'),
    require('../../assets/Imagens/Padaria/imagem3.png'),
    require('../../assets/Imagens/Padaria/imagem5.png'),
    require('../../assets/Imagens/Padaria/imagem7.png'),
    require('../../assets/Imagens/Padaria/imagem9.png'),
    require('../../assets/Imagens/Padaria/imagem55.png'),

  ];

  const renderItem = ({ item }: { item: any }) => {
    return <Image source={item} style={styles.image} />;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{TextosInicio.tituloCard5}</Text>

      <Text style={styles.descricaoProjeto}>
        Num canto remoto do universo, onde as estrelas dançam em harmonia, uma pequena nave espacial navegava pelo cosmos, explorando os segredos do espaço infinito. A tripulação, composta por seres de diferentes galáxias, compartilhava histórias fascinantes sobre os mundos que haviam descoberto.
      </Text>

      <FlatList
        data={imagens}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={1}
      />
    </ScrollView>
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
    textAlign: 'center',
  },
  descricaoProjeto: {
    color: '#3C533C',
    fontSize: 19,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,

  },
});

export default Padaria;
