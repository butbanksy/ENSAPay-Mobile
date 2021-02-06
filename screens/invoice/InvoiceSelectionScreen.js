import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Surface, Text, TextInput } from "react-native-paper";
import Header from "./../../components/common/Header";
import ContainedButton from "./../../components/buttons/ContainedButton";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function InvoiceSelectionScreen() {
  const serviceSlice = useSelector((state) => state.services);
  const { selectedServiceImage, selectedServiceName } = serviceSlice;
  const [invoiceID, setInvoiceID] = useState("");
  const navigation=useNavigation();

  const navigateToInvoiceInfo=()=>{
    navigation.navigate("InvoiceInfo",{invoiceID});
  }

  return (
    <Surface style={{ flex: 1 }}>
      <Header title={selectedServiceName} />
      <Surface style={styles.container}>
        <Image
          source={{ uri: selectedServiceImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{selectedServiceName}</Text>
      </Surface>
      <Surface style={styles.formContainer}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="N de facture"
          value={invoiceID}
          autoFocus
          onChangeText={(text) => setInvoiceID(text)}
        />
        <ContainedButton onPress={navigateToInvoiceInfo} style={styles.button} text={"Suivant"} />
      </Surface>
      {/* <ScrollView>
                <InvoiceCardList />
            </ScrollView> */}
    </Surface>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "85%",
  },
  button: {
    marginTop: 20,
    width: "85%",
  },
  container: {
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: width / 2.5,
    height: width / 2.5,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "black",
  },
  imageCard: {
    width: width / 5,
    height: width / 10,
  },
  text: {
    color: "#00000090",
    fontSize: 13,
  },
  textBold: {
    color: "#00000090",
    fontSize: 13,
    fontFamily: "Roboto_700Bold",
  },
  unpaidText: {
    marginLeft: 10,
    fontSize: 13,
    fontFamily: "Roboto_500Medium",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
