import React from 'react'
import { Surface } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import ServiceCardList from '../components/services/ServiceCardList';
import Header from '../components/common/Header';
import MobilePaymentStack from "../navigation/stacks/MobilePaymentStack"


export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header title="Liste des créanciers" />
            <ServiceCardList />
        </View>


    )
}
