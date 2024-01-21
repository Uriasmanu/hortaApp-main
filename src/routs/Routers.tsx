import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { HomeScreen } from '../telas/HomeScreen';
import { Login } from './Login';
import { SobreNos } from './SobreNos';
import { Localizacao } from './Localizacao';
import { Agenda } from './Agenda';
import GaleriasStack from '../componentes/galeria';

const Drawer = createDrawerNavigator();

export default function Routers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3C533C",
        },
        headerTintColor: '#fff',
        headerTitle: ' ', 
        
        headerRight: () => (
          <Image
            source={require('../../assets/logos.png')}
            style={{ width: 100, height: 100, marginHorizontal: 1, marginTop:10 }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Agenda" component={Agenda} />
      <Drawer.Screen name="Galerias" component={GaleriasStack} />
      <Drawer.Screen name="Sobre Nós" component={SobreNos} />
      <Drawer.Screen name="Localização" component={Localizacao} />
    </Drawer.Navigator>
  );
}
