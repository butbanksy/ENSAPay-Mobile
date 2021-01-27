import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Image, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'
import { Surface, Text, TextInput } from 'react-native-paper'
import Header from '../../components/common/Header';
import ContainedButton from "../../components/buttons/ContainedButton"
import { montants } from "../../utils/data"
import { setAmount, setPhoneNumber } from "../../utils/balance"

const { width, height } = Dimensions.get('window')

export default function PhoneScreen(props) {

    const [balanceInformation, setBalanceInformation] = useState({
        phoneNumber: "",
        amount: "",
    })

    const theme = {
        colors: {
            background: '#F9F9F9'
        }
    }

    const navigation = useNavigation();

    const serviceSlice = useSelector(state => state.services)
    const balanceSlice = useSelector(state => state.balance)
    const dispatch = useDispatch()

    const submitInfo = () => {
        dispatch(setAmount(balanceInformation.amount));
        dispatch(setPhoneNumber(balanceInformation.phoneNumber));
        navigation.navigate('Pass');
    }

    const { selectedServiceName, selectedServiceImage } = serviceSlice;
    const { amount } = balanceSlice;

    return (
        <Surface style={{ flex: 1 }}>
            <Header title={selectedServiceName} stack={true} />
            <Surface style={styles.container}>
                <Image source={{ uri: selectedServiceImage }} style={styles.image} resizeMode="contain" />
                <Text style={styles.title}>
                    {selectedServiceName}
                </Text>
            </Surface>
            <Surface>
                <TextInput theme={theme} mode="outlined" style={styles.textInputArea} label="Numéro de téléphone" onChangeText={(text) => setBalanceInformation({ phoneNumber: text })} />
                <Text style={{ marginHorizontal: 40, marginBottom: 5 }}>Choisir un montant</Text>
                <Surface style={{ borderWidth: 1, borderColor: "gray", marginHorizontal: 40, borderRadius: 2 }}>
                    <Picker
                        label="Montant"
                        mode="dropdown"
                        selectedValue={balanceInformation.amount}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setBalanceInformation(prevState => ({
                                ...prevState,
                                amount: itemValue
                            }))
                        }>
                        {montants.map(montant => (<Picker.Item key={montant.id} label={montant.label} value={montant.montant} />
                        ))}

                    </Picker>
                </Surface>

            </Surface>

            <ContainedButton text="Suivant" onPress={submitInfo} />
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
    title: {
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
        color: "black"
    }
})
