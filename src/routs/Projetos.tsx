// Projetos.tsx
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TextosInicio } from '../mocks/textos';

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type BaseProps = {
  // Outras propriedades necessárias para Projetos podem ser adicionadas aqui
};

type ProjetosProps = BaseProps & {
  navigation?: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function Projetos({ navigation }: ProjetosProps) {
  const handleButtonPress = () => {
    // Adicione a lógica desejada que deve ocorrer quando o botão é pressionado
    console.log("Botão pressionado!");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

      <Text style={styles.titulo}>{TextosInicio.subtitulo}</Text>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/medicinal.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/sopao.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard2}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/criancas.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard3}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/doacao.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard4}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/padaria.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard5}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image source={require('../../assets/Imagens/verdura.png')} style={styles.imagem} />
        <Text style={styles.tituloCard}>{TextosInicio.tituloCard6}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotoa}>{TextosInicio.saibaMais}</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollContent: {
    alignItems: 'center',
  },
  titulo: {
    width: '90%',
    fontSize: 23,
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: '#fff',
    width: "95%",
    height: "auto",
    padding: "2%",
    justifyContent: 'center',
    marginVertical: 10,
  },
  imagem: {
    width: "100%",
    height: 300, // Ajuste conforme necessário
  },
  tituloCard: {
    width: '90%',
    fontSize: 18,
    color: "#3C533C",
    marginVertical: 5,
  },
  botao: {
    width: "100%",
    height: 30,
    backgroundColor: '#fed',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    padding: 3,
  },
  textoBotoa: {
    color: '#3C533C',
    fontSize: 16,
  },
});

export default Projetos;
