import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { HomeScreen } from './screens/HomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF"}}>
      <HomeScreen/>
    </View>
  );
}
