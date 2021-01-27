import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper'
import { AppNavigator } from './navigation/Navigation';
import LoginScreen from "./screens/LoginScreen"


export default function App() {
  return (
    <Surface style={styles.container}>
      <StatusBar hidden={false} translucent={false} style="light" />
      <AppNavigator />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
