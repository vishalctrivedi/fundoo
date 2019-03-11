import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Navigation from './FundooApp/components/appNavigator';
//import Drawer from './FundooApp/components/drawer'
import DashBoard from './FundooApp/pages/dashboard'


export default class App extends Component {
  render() { 
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#199187" barStyle="light-content" />
        <DashBoard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
