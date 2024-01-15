import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { TextosAgenda } from '../mocks/textos';
import { ScrollView } from 'react-native-gesture-handler';

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type NotificationsScreenProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function Agenda({ navigation }: NotificationsScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo} >{TextosAgenda.titulo}</Text>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/planta.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.segunda}</Text>
          </View>
          <Text style={styles.descricaoAtividade}>{TextosAgenda.cultivo}</Text>
        </View>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/venda.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.terca}</Text>
          </View>
          <Text style={styles.descricaoAtividade}>{TextosAgenda.venda}</Text>
        </View>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/sopa.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.quarta}</Text>
          </View>
          <Text style={styles.descricaoAtividade}>{TextosAgenda.sopao}</Text>
        </View>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/pao.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.quinta}</Text>
          </View>
          <Text style={styles.descricaoAtividade}>{TextosAgenda.pao}</Text>
        </View>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/familia.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.sabado}</Text>
          </View>
          <Text style={styles.descricaoAtividade}>{TextosAgenda.semando}</Text>
        </View>

        <View style={styles.cardAtividade}>
          <View style={styles.subTituloAtividade}>
            <Image source={require('../../assets/Imagens/cultivo.png')} />
            <Text style={styles.textoAtividade}>{TextosAgenda.domingo}</Text>
          </View>
          <Text style={styles.descricaoAtividade} >{TextosAgenda.trabalho}</Text>
        </View>

   
    </ScrollView>
  );
}

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
  },
  cardAtividade: {
    backgroundColor: '#f2f2f2', // Cor de fundo do cartão
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  subTituloAtividade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textoAtividade: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  descricaoAtividade: {
    fontSize: 20,
  },

});