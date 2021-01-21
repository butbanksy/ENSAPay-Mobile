import React from "react"
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from "react-native-paper";
import App from './App'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#56adf0",
    }

};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}