import React, { useState } from 'react'
import { Image, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import { Picker } from '@react-native-picker/picker';
import { Surface, Text, TextInput } from 'react-native-paper'
import Header from '../../components/common/Header';
import DropDown from '../../components/common/DropDown'
import ContainedButton from "../../components/buttons/ContainedButton"
import { passes } from "../../utils/data"

const { width, height } = Dimensions.get('window')

export default function PassScreen(props) {

    const theme = {
        colors: {
            background: '#F9F9F9'
        }
    }

    const [pass, setPass] = useState();

    const serviceSlice = useSelector(state => state.services)
    const balanceSlice = useSelector(state => state.balance)

    const dispatch = useDispatch()

    const { selectedServiceName, selectedServiceImage } = serviceSlice;


    let frais = 0;




    return (
        <Surface style={{ flex: 1 }}>
            <Header title={selectedServiceName} stack={true} />
            <Surface style={styles.container}>
                <Image source={{ uri: selectedServiceImage }} style={styles.image} resizeMode="contain" />
                <Text>
                    {selectedServiceName}
                </Text>
            </Surface>
            <Text style={{ marginHorizontal: 40, marginBottom: 5, fontFamily: "Roboto_500Medium" }}>Choisir un pass : </Text>
            <Surface>
                <Surface style={{ borderWidth: 1, borderColor: "gray", marginHorizontal: 40, borderRadius: 2 }}>
                    <Picker
                        label="Montant"
                        mode="dropdown"
                        selectedValue={pass}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setPass(itemValue)
                        }>
                        {passes.map(pass => (<Picker.Item key={pass.id} label={pass.nom} value={pass.id} />
                        ))}

                    </Picker>
                </Surface>
                <Surface style={styles.textSurface}>
                    <Surface>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>Frais</Text>
                        <Text style={[styles.text], { color: "black", fontFamily: "Roboto_500Medium" }}>Total à payer</Text>
                    </Surface>
                    <Surface>
                        <Text style={[styles.text, { textAlign: 'right' }]}>{balanceSlice.amount} DH</Text>
                        <Text style={[styles.text, { textAlign: 'right' }]}>{frais} DH</Text>
                        <Text style={[styles.text, { textAlign: 'right', color: "black", fontFamily: "Roboto_500Medium" }]}>{balanceSlice.amount + frais} DH</Text>
                    </Surface>
                </Surface>
            </Surface>

            <ContainedButton text="Suivant" />
        </Surface>

    )
}

const styles = StyleSheet.create({
    image: {
        width: width / 2.5,
        height: width / 2.5
    },
    container: {
        alignItems: "center",
        marginBottom: 50,
    },
    textInputArea: {
        marginVertical: 10,
        marginHorizontal: 40,
    },
    picker: {
        backgroundColor: "#F9F9F9",
        borderRadius: 5,

    },
    textSurface: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        marginHorizontal: 40,
        marginVertical: 10,
    },
    text: {
        fontSize: 14,
        color: "gray",
        marginVertical: 2,
    }



})
