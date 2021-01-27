
import React from 'react'
import { Surface, Text, Title, Caption, Paragraph, Drawer, TouchableRipple, useTheme } from "react-native-paper"
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerContent } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window');

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView scrollEnabled={false} {...props} >
            <ImageBackground source={require("../../assets/images/login_background.png")} style={styles.image} resizeMode="cover">

                <Surface opacity={0.74} style={styles.background}>
                    <Surface style={{ backgroundColor: "transparent" }}>
                        <Surface style={styles.userInfoSection}>

                            <Text style={styles.userInfoText}>
                                Bonjour Mr.
                            </Text>
                            <Text style={styles.userInfoName}>
                                Rhazzoul Mahmoud
                            </Text>
                        </Surface>
                    </Surface>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="home-outline"
                                    color="white"
                                    size={size}
                                />
                            )}
                            label="Liste des créanciers"
                            labelStyle={styles.drawerLabel}
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="history"
                                    color="white"
                                    size={size}
                                />
                            )}
                            label="Historique"
                            labelStyle={styles.drawerLabel}
                            onPress={() => { props.navigation.navigate('History') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color="white"
                                    size={size}
                                />
                            )}
                            label="Se déconnecter"
                            labelStyle={styles.drawerLabel}
                            onPress={() => { props.navigation.navigate('Login') }}
                        />
                    </Drawer.Section>
                </Surface>
            </ImageBackground>
        </DrawerContentScrollView>


    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 40,
        paddingVertical: 70,
        backgroundColor: "transparent",
        justifyContent: 'center',
    },
    userInfoText: {
        color: "white",
        fontSize: 20,
        fontFamily: 'Roboto_300Light'
    },
    userInfoName: {
        color: "white",
        fontSize: 20,
        fontFamily: 'Roboto_500Medium'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerLabel: {
        color: "white",
        fontFamily: 'Roboto_300Light'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    image: {
        width,
        height: height + width/10,
        marginTop: -width/10
    },
    background: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1E7AE7"
    },



});