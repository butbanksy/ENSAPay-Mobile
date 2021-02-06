import React from "react";
import { Button, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ContainedButton(props) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    buttonLabel: {
      color: props.color === "white" ? colors.primary : "white",
      fontFamily: "Roboto_300Light",
      fontSize: 17,
    },
  });
  return (
    <Button
      mode="contained"
      uppercase={false}
      style={{ margin: 40 }}
      contentStyle={{
        backgroundColor:
          props.color === "white"
            ? "white"
            : props.color === "red"
            ? colors.error
            : colors.primary,
      }}
      labelStyle={styles.buttonLabel}
      {...props}
    >
      {props.text}
    </Button>
  );
}
