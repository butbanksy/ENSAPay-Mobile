import React from "react"
import { StyleSheet, Dimensions } from "react-native"
import DropDownPicker from "react-native-dropdown-picker";
import { montant } from '../../utils/data'

const { width, height } = Dimensions.get('window');

export default function DropDown() {
    let data = [{
        value: 'Banana',
    }, {
        value: 'Mango',
    }, {
        value: 'Pear',
    }];

    return (
        <DropDownPicker
            items={montant.map((montant) => ({
                label: montant.montant,
                value: montant.montant,
            }))}
            containerStyle={{ height: 50 }}
            style={styles.dropdown}
            placeholder="Montant"
            labelStyle={styles.label}
            dropDownStyle={styles.dropDownStyle}
            zIndex={2000}
        />
    );
}

const styles = StyleSheet.create({
    label: {
        color: "black",
        alignItems: "flex-start",
        fontSize: 16,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dropdown: {
        backgroundColor: "#F9F9FA",
        marginHorizontal: 40,
        zIndex: 10,
        overflow: "visible"

    },
    dropDownStyle: {
        width: width - 80,
        marginLeft: 40,
        zIndex: 10,

    }
});