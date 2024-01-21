import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextosProjetos } from '../mocks/textos';
import Medicinal from '../galerias/Medicinal';
import { ScrollView } from 'react-native-gesture-handler';
import Sopao from '../galerias/Sopao';
import Padaria from '../galerias/Padaria';
import Semeando from '../galerias/Semeando';
import Palestras from '../galerias/Palestras';
import Hortalicas from '../galerias/Hortalicas';

type BaseProps = {
  // Outras propriedades necessárias para Projetos podem ser adicionadas aqui
  navigation: any; // Adicione a propriedade navigation ao tipo BaseProps
};

type GaleriaProps = BaseProps & {
  // Outras propriedades específicas para Galeria podem ser adicionadas aqui
};

function Galerias({ navigation }: GaleriaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{TextosProjetos.titulos}</Text>

      <ScrollView>
        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('Horta Medicinal') }}>
          <Text style={styles.secao}>{TextosProjetos.horta}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}  onPress={() => { navigation.navigate('Projeto Sopão') }}>
          <Text style={styles.secao}>{TextosProjetos.sopao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('Padaria Comunitaria') }}>
          <Text style={styles.secao}>{TextosProjetos.pao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('Semeando o Futuro') }}>
          <Text style={styles.secao}>{TextosProjetos.projeto}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('Palestras') }}>
          <Text style={styles.secao}>{TextosProjetos.palestra}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('Horta') }}>
          <Text style={styles.secao}>{TextosProjetos.cultivo}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

function GaleriasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Galerias" component={Galerias} />
      <Stack.Screen name="Horta Medicinal" component={Medicinal} /> 
      <Stack.Screen name="Projeto Sopão" component={Sopao} /> 
      <Stack.Screen name="Padaria Comunitaria" component={Padaria} /> 
      <Stack.Screen name="Semeando o Futuro" component={Semeando} /> 
      <Stack.Screen name="Palestras" component={Palestras} /> 
      <Stack.Screen name="Horta" component={Hortalicas} /> 
    </Stack.Navigator>
  );
}

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

export default GaleriasStack;
