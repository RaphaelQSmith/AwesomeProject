import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Principais Criptomoedas</Text>
      <Text style={styles.title}>Cotação do Bitcoin</Text>
      <Button 
      title="Consultar" 
      onPress={() => Alert.alert('This is Bitcoin')}
      color="#841584" />
      <Text style={styles.title}>Cotação do Ethereum</Text>
      <Button 
      title="Consultar"
      onPress={() => Alert.alert('This is Ethereum')}
      color="#841584" />
      <Text style={styles.title}>Cotação do Dogecoin</Text>
      <Button 
      title="Consultar"
      onPress={() => Alert.alert('This is Dogecoin')}
      color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  ); 
}

// To be added later
// function chosenCoin(coin) {
//   if(coin=='bit'){
//     Alert.alert('Bitcoin!')
//   }
//   else if(coin=='ether'){
//     Alert.alert('Ethereum!')
//   }
//   else if(coin=='doge'){
//     Alert.alert('Dogecoin!')
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232A',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 22
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  myBt:{
    color: "#111"
  }
});
