import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ParceirosProps = {};

const Parceiros: React.FC<ParceirosProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Parceiros</Text>
      </View>
      <View style={styles.listaContainer}>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>Toca imóveis</Text>
          <Text style={styles.itemLista}>Padaria Baleias</Text>
          <Text style={styles.itemLista}>Ceagesp</Text>
          <Text style={styles.itemLista}>Marilan</Text>
          <Text style={styles.itemLista}>Dori</Text>
          <Text style={styles.itemLista}>Bell</Text>
          <Text style={styles.itemLista}>Paróquia Santa Antonieta Padre Wilians</Text>

        </View>

        <View style={styles.lista}>
          <Text style={styles.itemLista}>Tauste</Text>
          <Text style={styles.itemLista}>Unimar</Text>
          <Text style={styles.itemLista}>Carino</Text>
          <Text style={styles.itemLista}>Cooperativa Sicredi</Text>
          <Text style={styles.itemLista}>Menin engenharia</Text>
          <Text style={styles.itemLista}>Damila Ifood</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  listaContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  lista: {
    flex: 1, 
    marginBottom: 10,
  },
  itemLista: {
    fontSize: 19,
    color: '#fff',
    marginBottom: 10,
  },
});

export default Parceiros;
