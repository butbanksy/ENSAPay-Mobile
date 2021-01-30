import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Surface, Text, Card } from "react-native-paper";
import Header from "../../components/common/Header";
import InvoiceCardList from "../../components/invoices/InvoiceCardList";

const { width } = Dimensions.get("window");

export default function InvoiceSelectionScreen() {
    const serviceSlice = useSelector((state) => state.services);
    const { selectedServiceImage, selectedServiceName } = serviceSlice;

    const [expanded, setExpanded] = React.useState(true);

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
            <ScrollView>
                <InvoiceCardList />
            </ScrollView>
        </Surface>
    );
}

const styles = StyleSheet.create({
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
