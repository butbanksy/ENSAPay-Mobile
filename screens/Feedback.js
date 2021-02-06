import React from "react";
import { Surface, Card, Text } from "react-native-paper";
import { Image, StyleSheet, Dimensions } from "react-native";
import ContainedButton from "../components/buttons/ContainedButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function Feedback({
  success = false,
  text = "The invoice has been paid successfully",
}) {

    const navigation=useNavigation();

    const navigateToHome=()=>{
        navigation.navigate("Home");
    }
  return (
    <Surface style={styles.container}>
      <Image
        style={styles.image}
        source={
          success
            ? require("./../assets/images/success.png")
            : require("./../assets/images/error.png")
        }
      />
      <Text
        style={[styles.text, success ? styles.textSuccess : styles.textError]}
      >
        {text}
      </Text>
      <ContainedButton
      onPress={navigateToHome}
        color={!success ? "red" : null}
        text="Go Home"
      ></ContainedButton>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width / 2,
    height: width / 2,
  },
  text: {
      fontSize:17,
      marginTop:30
  },
  textSuccess: {},
  textError: {},
});
