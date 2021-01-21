import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper'
import Login from "./screens/Login"


export default function App() {
  return (
    <Surface style={styles.container}>
      <Login />
      <Text>
        Hello
      </Text>
      <StatusBar style="auto" />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
