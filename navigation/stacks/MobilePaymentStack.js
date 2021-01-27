import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen";
import PhoneScreen from "../../screens/recharge/PhoneScreen";
import PassScreen from "../../screens/recharge/PassScreen";
import InvoiceSelectionScreen from "../../screens/invoice/InvoiceSelectionScreen";
import HomeScreen from "../../screens/HomeScreen";

export default function MobilePaymentStack(props) {

    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Phone" component={PhoneScreen} />
            <Screen name="Invoice" component={InvoiceSelectionScreen} />
            <Screen name="Pass" component={PassScreen} />
        </Navigator>
    )
}