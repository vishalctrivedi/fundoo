import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar ,DrawerLayoutAndroid} from 'react-native';
//import Navigation from './FundooApp/components/appNavigator';
//import DashBoard from './FundooApp/pages/dashboard';
//import Navigation from './FundooApp/components/drawerNavigator';
//import DrawerNavigator from './FundooApp/components/'


export default class Navig extends Component {
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}
