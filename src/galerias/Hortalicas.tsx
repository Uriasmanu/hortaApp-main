import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { TextosInicio } from '../mocks/textos';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Hortalicas: React.FC = () => {
  const images = [
    require('../../assets/Imagens/hortalicas/imagem1.png'),
    require('../../assets/Imagens/hortalicas/imagem2.png'),
    require('../../assets/Imagens/hortalicas/imagem3.png'),
    require('../../assets/Imagens/hortalicas/imagem4.png'),
    require('../../assets/Imagens/hortalicas/imagem5.png'),
    require('../../assets/Imagens/hortalicas/imagem6.png'),
    require('../../assets/Imagens/hortalicas/imagem7.png'),
    require('../../assets/Imagens/hortalicas/imagem8.png'),
    require('../../assets/Imagens/hortalicas/imagem9.png'),
    require('../../assets/Imagens/hortalicas/imagem10.png'),
    require('../../assets/Imagens/hortalicas/imagem11.png'),
    require('../../assets/Imagens/hortalicas/imagem12.png'),
    require('../../assets/Imagens/hortalicas/imagem13.png'),
    require('../../assets/Imagens/hortalicas/imagem14.png'),
    require('../../assets/Imagens/hortalicas/imagem15.png'),
    require('../../assets/Imagens/hortalicas/imagem16.png'),
    require('../../assets/Imagens/hortalicas/imagem17.png'),
    require('../../assets/Imagens/hortalicas/imagem18.png'),
    require('../../assets/Imagens/hortalicas/imagem19.png'),
    require('../../assets/Imagens/hortalicas/imagem20.png'),
    require('../../assets/Imagens/hortalicas/imagem21.png'),
    require('../../assets/Imagens/hortalicas/imagem22.png'),
    require('../../assets/Imagens/hortalicas/imagem23.png'),
    require('../../assets/Imagens/hortalicas/imagem24.png'),
    require('../../assets/Imagens/hortalicas/imagem25.png'),
    require('../../assets/Imagens/hortalicas/imagem26.png'),
    require('../../assets/Imagens/hortalicas/imagem27.png'),
  ];

  const renderItem = ({ item }: { item: any }) => (
    <Image source={item} style={styles.image} />
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{TextosInicio.tituloCard6}</Text>
      
      <Text style={styles.projectDescription}>
        Num canto remoto do universo, onde as estrelas dançam em harmonia, uma pequena nave espacial navegava pelo cosmos, explorando os segredos do espaço infinito. A tripulação, composta por seres de diferentes galáxias, compartilhava histórias fascinantes sobre os mundos que haviam descoberto.
      </Text>
      
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
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
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  projectDescription: {
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

export default Hortalicas;
