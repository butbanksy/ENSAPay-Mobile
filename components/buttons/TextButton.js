import React from 'react'
import {StyleSheet} from 'react-native'
import { Button, useTheme } from "react-native-paper"

export default function TextButton(props) {

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        buttonLabel: { color: colors.primary, fontFamily: "Roboto_300Light", fontSize: 17 }

    })
    return (
        <Button mode="text"
            uppercase={false}
            style={{ margin: 25 }}
            labelStyle={[styles.buttonLabel, { color: "white", fontFamily: "Roboto_400Regular", fontSize: 14 }]}
            {...props}
        >
            {props.text}
        </Button>
    )
}
