import React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen";

export default function AuthStack(props) {

    const {Navigator, Screen} = createStackNavigator();

    return (
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={LoginScreen}/>
        </Navigator>
    )
}