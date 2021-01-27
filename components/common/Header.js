import React from "react"
import { Text, Surface, Avatar, Divider } from "react-native-paper"
import { StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from '@react-navigation/native'

export default function Header({ title, stack }) {
    const { openDrawer, goBack } = useNavigation();

    if (stack) {
        return (<TouchableWithoutFeedback onPress={() => goBack()}>
            <Surface style={styles.container}>
                <Surface >
                    <Avatar.Icon size={45} icon="arrow-left" color="#6D6767" style={{ backgroundColor: "white" }}
                    />
                </Surface>
                <Text style={styles.text}>
                    {title}
                </Text>
            </Surface>
        </TouchableWithoutFeedback>
        )
    }
    else return (
        <TouchableWithoutFeedback onPress={() => openDrawer()}>
            <Surface style={styles.container}>
                <Surface onPress={() => console.log("Hello world")}>
                    <Avatar.Icon size={45} icon="menu" color="#6D6767" style={{ backgroundColor: "white" }}
                    />
                </Surface>
                <Text style={styles.text}>
                    {title}
                </Text>
            </Surface>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: "Roboto_500Medium"
    }
})