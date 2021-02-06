import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Surface, Text } from "react-native-paper";
import Header from "./../../components/common/Header";
import ContainedButton from "./../../components/buttons/ContainedButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const { width } = Dimensions.get("window");

export default function InvoiceInfo({ route, ...props }) {
  const serviceSlice = useSelector((state) => state.services);
  const { selectedServiceImage, selectedServiceName } = serviceSlice;
  const [invoice, setInvoice] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const { invoiceId } = route.params;
  const navigation = useNavigation();

  const loadInvoiceData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (res.data) {
          setInvoice(res.data);
        } else {
          setInvoice(null);
          setErrorMsg(res.data.title);
        }
      })
      .catch((err) => {
        console.log(err);
        setInvoice(null);
        setErrorMsg("Invalid Invoice ID");
      });
  };

  useEffect(() => {
    loadInvoiceData();
  }, [invoiceId]);

  const navigateToOtp = () => {
    navigation.navigate("otp", { invoice });
  };

  const navigateInvoiceSelect = () => {
    navigation.navigate("Invoice");
  };

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
        {errorMsg != "" ? <Text>{errorMsg}</Text> : null}
        {invoice && (
          <>
            <Surface style={styles.textsContainer}>
              <Text>Taux de facture</Text>
              <Text style={styles.textBold}>340DH</Text>
            </Surface>
            <Surface style={styles.textsContainer}>
              <Text>Taux de TVA</Text>
              <Text style={styles.textBold}>0DH</Text>
            </Surface>
            <Surface style={[styles.textsContainer, styles.divider]}>
              <Text>Total à payer</Text>
              <Text style={styles.textBold}>340DH</Text>
            </Surface>
          </>
        )}

        {invoice ? (
          <ContainedButton
            elevation={1}
            onPress={navigateToOtp}
            style={styles.button}
            text={"Suivant"}
          />
        ) : (
          <ContainedButton
            onPress={navigateInvoiceSelect}
            style={styles.button}
            text={"Retour"}
          />
        )}
      </Surface>
    </Surface>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: "85%",
  },
  text: {
    width: "85%",
  },
  divider: {
    borderTopWidth: 1,
    paddingTop: 10,
    borderTopColor: "lightgray",
  },
  textBold: {
    fontWeight: "bold",
  },
  textsContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "black",
  },
  container: {
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: width / 2.5,
    height: width / 2.5,
  },
});
