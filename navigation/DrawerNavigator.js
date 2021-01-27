import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen"
import HistoryScreen from "../screens/HistoryScreen"
import CustomDrawer from '../components/common/CustomDrawer';
import MobilePaymentStack from './stacks/MobilePaymentStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="MobilePayment" component={MobilePaymentStack} />
            <Drawer.Screen name="History" component={HistoryScreen} />
        </ Drawer.Navigator>
    );
}