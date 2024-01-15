import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import {TextosInicio} from '../mocks/textos';


const Inicio: React.FC = () => {

  return (
      <View>
        <Text style={styles.titulo}>{TextosInicio.titulo}</Text>
        <TouchableOpacity style={styles.botaoInicio}>
           <Text style={styles.textoBotoaInicio}>{TextosInicio.saibaMais}</Text><Svg
          width={35}
          height={35}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3C533C"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M1 12h11M9 7l5 5-4 6" />
        </Svg>
           
        </TouchableOpacity>

        <Image style={styles.imagem} source={require('../../assets/Imagens/inicio.png')} />
        
      </View>

  );
};

const styles = StyleSheet.create({

  titulo:{
    width: '90%',
    fontSize: 30,
    lineHeight: 40,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 12,
    marginVertical: 10,
    
  },
  botaoInicio:{
    width: "92%",
    height: "auto",
    backgroundColor: '#98ff6c',
    marginHorizontal: 12,
    paddingStart: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  textoBotoaInicio:{
    color: '#3C533C',
    fontSize: 18,
    
  },
  imagem:{
    width: "93%",
    height: 280,
    marginVertical: 16,
    marginHorizontal: 12,
  }
});

export default Inicio;
