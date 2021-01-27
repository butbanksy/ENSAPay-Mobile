import React from 'react'
import { Card, Surface, Text } from 'react-native-paper'
import { StyleSheet, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default function HistoryItem({ transactionId, price, date, name, image }) {
    return (
        <Card elevation={2} onPress={() => { }} style={{ margin: 5 }}>
            <Card.Content style={styles.container}>
                <Surface>
                    <Text style={styles.text}>
                        Transaction ID : <Text style={styles.textBold}>{transactionId}</Text>
                    </Text>
                    <Text style={styles.text}>
                        Montant : <Text style={styles.textBold}>{price}DH</Text>
                    </Text>
                </Surface>
                <Surface style={{ alignItems: "flex-end" }}>
                    <Image
                        style={styles.image}
                        source={{ uri: image  }}
                        resizeMode='contain'
                    />

                    <Text style={styles.textBold}>
                        {name}
                    </Text>
                    <Text style={styles.text}>
                        Le {date}
                    </Text>
                </Surface>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    image: {
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
        fontFamily: "Roboto_700Bold"
    }
});
