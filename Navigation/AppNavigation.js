import {createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import onBoardingScreen from "../screens/onBoardingScreen";
import DrawerScreen from "../screens/DrawerScreen";
import React from "react";
import SettingsScreen from "../screens/SettingsScreen";
import CataloguesScreen from "../screens/CataloguesScreen";
import CatalogueScreen from "../screens/CatalogueScreen";
import AquariumScreen from "../screens/AquariumScreen";
import ItemScreen from "../screens/ItemScreen";


const AppNavigator = createStackNavigator({
    onBoarding: {
        screen: onBoardingScreen,
        navigationOptions: {
            header: null
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            mode: 'modal'
        }
    },
    Catalogues: {
        screen: CataloguesScreen
    },
    Catalogue: {
        screen: CatalogueScreen
    },
    Aquarium: {
        screen: AquariumScreen
    },
    Item: {
        screen: ItemScreen
    }

}, {
    initialRouteName: 'onBoarding'
})


const DrawerNavigator = createDrawerNavigator({
    App: AppNavigator
}, {
    initialRouteName: 'App',
    contentComponent: DrawerScreen
})


export default createAppContainer(DrawerNavigator)
