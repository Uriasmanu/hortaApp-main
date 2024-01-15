import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/telas/HomeScreen';
import Routers from './src/routs/Routers';


function App() {
  return (
    <NavigationContainer>
      <Routers/>
    </NavigationContainer>
  );
}

export default App;
