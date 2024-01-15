// NotificationsScreen.tsx

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TextosSobre } from '../mocks/textos';
import { ScrollView } from 'react-native-gesture-handler';


type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type NotificationsScreenProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function SobreNos({ navigation }: NotificationsScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo} >{TextosSobre.titulo}</Text>
      <Image style={styles.imagem} source={require('../../assets/Imagens/sobre.png')} />
      <Text style={styles.texto}>{TextosSobre.paragrafo1}</Text>
      <Text style={styles.texto}>{TextosSobre.paragrafo2}</Text>
      
      <Image style={styles.imagem} source={require('../../assets/Imagens/sobre2.png')} />
      <Text style={styles.texto}>{TextosSobre.paragrafo3}</Text>
      <Text style={styles.texto}>{TextosSobre.paragrafo4}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
   
  },
  titulo:{
    width: '90%',
    fontSize: 30,
    lineHeight: 40,
    color: "#3C533C",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginVertical: 10,
    
  },
  texto:{
    width: '90%',
    fontSize: 20,
    lineHeight: 23,
    color: "#3C533C",
    marginHorizontal: 12,
    marginVertical: 10,
    
  },
  imagem:{
    width: "93%",
    height: 280,
    marginVertical: 16,
    marginHorizontal: 12,
  }
})