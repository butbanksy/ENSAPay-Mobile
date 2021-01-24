import React from 'react'
import { Surface } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text } from 'react-native';


export default function HomeScreen(props) {
    return (
        <Surface style={styles.container}>
            <Text>Hello World</Text>
        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})