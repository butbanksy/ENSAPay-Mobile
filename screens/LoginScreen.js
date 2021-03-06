import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { Surface, Text, TextInput, TextInputMask, Button, useTheme, DefaultTheme, Provider } from 'react-native-paper'
import ContainedButton from "../components/buttons/ContainedButton"
import TextButton from "../components/buttons/TextButton"
import { login } from "../utils/loginApi";

export default function LoginScreen() {

    const theme = {
        colors: {
            placeholder: 'white', text: 'white', primary: 'white',
            underlineColor: 'transparent', background: '#003489'
        }
    }

    const dispatch = useDispatch();
    const authSlice = useSelector(state => state.auth);

    const handleSubmit = () => {
        dispatch(login())
    }

    const [accountNumber, setAccountNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setVisible] = useState(true)

    const changePasswordVisibility = () => {
        setVisible(!isVisible);
    }

    const { width, height } = Dimensions.get('window');

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        textInput: {
            margin: 20,
            borderRadius: 20,
        },
        image: {
            width,
            height
        },
        background: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: colors.primary,
        },
        insideContainer: {
            flexGrow: 0.5,
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center"

        },
        helloContainer: {
            flexGrow: 0.5,
            backgroundColor: "transparent",

        },
        textHello: {
            paddingTop: 100,
            color: 'white',
            fontSize: 40,
            fontFamily: "Roboto_400Regular"
        },
        textInput: {
            backgroundColor: "transparent",
            color: "white",
            margin: 10,
            marginRight: 25,
            marginLeft: 25,
            fontSize: 15,
        }
    })

    return (
        <Surface style={styles.container}>
            <ImageBackground source={require("../assets/images/login_background.png")} style={styles.image} mode="center">
                <Surface opacity={0.82} style={styles.background}>
                    <Surface style={styles.insideContainer}>
                        <Text style={styles.textHello}>
                            Bienvenue
                        </Text>
                    </Surface>
                    <Surface style={styles.helloContainer} opacity={1}>
                        <TextInput
                            label="Numéro de compte"
                            style={styles.textInput}
                            underlineColor="white"
                            selectionColor="white"
                            theme={theme}
                            onChangeText={accountNumber => setAccountNumber(accountNumber)}

                        />
                        <TextInput
                            label="Mot de passe"
                            style={styles.textInput}
                            underlineColor="white"
                            secureTextEntry={isVisible}
                            theme={theme}
                            onChangeText={password => setPassword(password)}
                            right={<TextInput.Icon size={18} color="white" name="eye" onPress={changePasswordVisibility} />}
                        />
                        <ContainedButton color="white" text="Se connecter" onPress={handleSubmit} loading={authSlice.loading} />
                        <TextButton text="Mot de passe oublié?" />
                    </Surface>
                </Surface>
            </ImageBackground>
        </Surface >
    )
}

