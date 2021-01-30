import React from "react";
import { useDispatch } from "react-redux";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Text, Surface, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { selectService } from "../../utils/servicesApi";
import MobilePaymentStack from "../../navigation/stacks/MobilePaymentStack";

const { width, height } = Dimensions.get("window");

const ServiceCard = ({ invoiceType, image, name }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToInvoice = () => {
    dispatch(selectService({ image, name }));
    if (invoiceType === "recharge") {
      navigation.navigate("Phone");
    } else {
      navigation.navigate("Invoice");
    }
  };

  return (
    <Card elevation={1} style={styles.container} onPress={navigateToInvoice}>
      <Surface>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </Surface>
      <Surface>
        <Text style={styles.text}>{name}</Text>
      </Surface>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,
    height: width / 2.5,
    marginVertical: 10,
    marginHorizontal: -10,
  },
  imageStyle: {
    width: width / 2.6,
    height: width / 3.5,
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto_300Light",
    fontSize: 14,
    paddingTop: 10,
  },
});

export default ServiceCard;
