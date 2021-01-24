import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper'
import LoginScreen from "./screens/LoginScreen"


export default function App() {
  return (
    <Surface style={styles.container}>
      <LoginScreen />

      <StatusBar hidden={true} />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
