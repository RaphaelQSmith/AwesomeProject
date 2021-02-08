import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulte a Cotação das principais Criptomoedas</Text>
      <Button 
      title="Consultar" style={styles.myBt} />
      <Text style={styles.title}>Cotação do Bitcoin hoje</Text>
      <Text style={styles.title}>Cotação do Ethereum hoje</Text>
      <Text style={styles.title}>Cotação do Dogecoin hoje</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15
  },
 
});
