import {createBottomNavigator} from "react-navigation/bottom-tabs";
import React from "react";
import TabNavigator from "/TabNavigator"
import Profile from '.Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
