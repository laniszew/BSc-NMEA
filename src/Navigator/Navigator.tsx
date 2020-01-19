import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import UnitView from '../Views/UnitView/UnitView';
import Map from '../MainView/MapView/MapView';
import SettingsView from '../Views/SettingsView/SettingsView';

const AppNavigator = createBottomTabNavigator({
    Map: { screen: Map },
    Unit: UnitView,
    Settings: SettingsView
}, {
    initialRouteName: 'Map',
    tabBarOptions: {
        tabStyle: {
            borderWidth: 1,
            borderColor: 'black',
        },
        labelStyle: {
            fontSize: 16,
        }
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;

            const icons = {
                Map: <Ionicons name="md-map" size={20} />,
                Unit: <FontAwesome name="ship" size={20} />,
                Settings: <Ionicons name="md-settings" size={20} />
            };
            return icons[routeName];
        },
    }),
});

const Navigator = createAppContainer(AppNavigator);

export default Navigator;
