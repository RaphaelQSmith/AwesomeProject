import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Consulte a Cotação das principais Criptomoedas</Text>
      <Button 
      title="Consultar" style={styles.myBt}/>
      <Text>Cotação do Bitcoin hoje</Text>
      <Text>Cotação do Ethereum hoje</Text>
      <Text>Cotação do Dogecoin hoje</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myBt: {
    flex: 1, 
    color: 'black'

  }
});
