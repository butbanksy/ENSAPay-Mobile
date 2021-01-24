import React from "react"
import { ActivityIndicator } from "react-native"
import { configureFonts, DefaultTheme, DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';


import App from './App'
import {
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
    useFonts
} from '@expo-google-fonts/roboto'
import DrawerNavigator from "./screens/DrawerNavigator";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#1E7AE7",
    },
    fonts: configureFonts(fontConfig)

};

const fontConfig = {
    ios: {
        regular: {
            fontFamily: "Roboto_400Regular"
        },
    },
    android: {
        regular: {
            fontFamily: "Roboto_400Regular"
        },
    }
}

export default function Main() {

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic
    })

    if (!fontsLoaded) {
        return <ActivityIndicator />
    }

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </PaperProvider>
    )
}