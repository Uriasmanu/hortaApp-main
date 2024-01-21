// Home.tsx
import React from 'react';
import {  StyleSheet} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Inicio from '../componentes/Inicio';
import { Projetos } from '../routs/Projetos';
import { ScrollView } from 'react-native-gesture-handler';
import Parceiros from '../componentes/Parceiros';

type RootDrawerParamList = {
  Home: undefined;
};

type HomeScreenProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Home'>;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <Inicio />
      <Projetos />
      <Parceiros/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C533C",
  },
});
