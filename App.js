import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';

export default function App() {
  return (
    <View>
      {/* <Text style={styles.title}>Principais Criptomoedas</Text>
      <Text style={styles.title}>Cotação do Bitcoin</Text> */}
      <Game randomNumberCount={6} />
      <StatusBar style="auto" />
    </View>
  ); 
}


// make get request to Bitcoin API 
const getFromApi = () => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => response.json()).then((json) => {
    return data.time;
}).catch((error) => {
    console.error(error);
});
}

