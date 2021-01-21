import React from "react"
import { StyleSheet, View } from "react-native";
import { Surface, Text, TextInput, Button } from 'react-native-paper'

export default function Login() {
    return (
        <Surface style={styles.container}>
            <Surface style={styles.textInput}>
                <TextInput mode="outlined" label="Numéro de compte" />
                <TextInput mode="outlined" label="Mot de passe" />
                <Button onPress={() => console.log()}>
                    Se connecter
                </Button>
            </Surface>
            <Image source={require("../assets/images/1.jpeg")} style={{ width: 100, height: 100 }} />

        </Surface>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textInput: {
        margin: 20,
        borderRadius: 20,
    }
})