import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routs/Routers';


function App() {
  return (
    <NavigationContainer>
      <Routers/>
    </NavigationContainer>
  );
}

export default App;
