import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'; 
import Navigation from './FundooApp/components/appNavigator';
//import DashBoard from './FundooApp/pages/dashboard';
//import Navigation from './FundooApp/components/drawerNavigator';
//import DrawerNavigator from './FundooApp/components/'
import TakeNote from './FundooApp/pages/takeNote'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#199187" barStyle="light-content" />
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
