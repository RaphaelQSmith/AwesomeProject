import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlightComponent, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Principais Criptomoedas</Text>
      <Text style={styles.title}>Cotação do Bitcoin</Text>
      <Button 
      title="Consultar" style={styles.title} />
      <Text style={styles.title}>Cotação do Ethereum</Text>
      <Button 
      title="Consultar" style={styles.myBt} />
      <Text style={styles.title}>Cotação do Dogecoin</Text>
      <Button 
      style={styles.myBt}
      title="Consultar" />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
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

  }
});
