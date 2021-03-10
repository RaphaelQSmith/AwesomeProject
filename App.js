import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Game from './components/Game';

export default function App() {
  return (
    <View>
      <Game randomNumberCount={6} />
      <StatusBar style="auto" />
    </View>
  ); 
}


