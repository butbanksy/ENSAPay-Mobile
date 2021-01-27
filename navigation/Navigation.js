import React from "react";
import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthStack from "./stacks/AuthStack";
import LoginScreen from "../screens/LoginScreen";

export const AppNavigator = () => {

    const authSlice = useSelector(state => state.auth)

    return (
        <NavigationContainer>
            {authSlice.isLoggedIn ? <DrawerNavigator /> : <LoginScreen />}
        </NavigationContainer>
    );
};