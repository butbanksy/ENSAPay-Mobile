import React from "react";
import { Surface, Text, Card } from "react-native-paper";
import { Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function InvoiceCard({
    id,
    reference,
    price,
    date,
    paid,
    image,
}) {
    return (
        <Card elevation={2} onPress={() => {}} style={{ margin: 5 }}>
            <Card.Content style={styles.cardContainer}>
                <Surface>
                    <Text style={styles.text}>
                        Réference facture :{" "}
                        <Text style={styles.textBold}>{reference}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Mois : <Text style={styles.textBold}>{date}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Montant :{" "}
                        <Text
                            style={
                                paid
                                    ? styles.textBold
                                    : [styles.textBold, { color: "tomato" }]
                            }
                        >
                            {price} DH
                        </Text>
                    </Text>
                </Surface>
                <Surface style={{ alignItems: "flex-end" }}>
                    <Image
                        style={styles.imageCard}
                        source={{ uri: image }}
                        resizeMode="contain"
                    />

                    <Text style={styles.textBold}>Facture Redal</Text>
                </Surface>
            </Card.Content>
        </Card>
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
    paymentStatus: {
        marginLeft: 10,
        fontSize: 13,
        fontFamily: "Roboto_500Medium",
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
