import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
//import LoginNew from './loginFormNew';
import { TextInput, BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import Navig from '../components/drawerNavigator'



export default class DashBoard extends Component {

  render() {
    return (
      <Navig/>
      /*<ScrollView style={styles.page}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Image style={styles.drawericon} source={require('../assets/images/drawer.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Search for notes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.gridicon} source={require('../assets/images/grid.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.usericon} source={require('../assets/images/user.jpg')} ></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>*/
    );
  }
}





const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },

  drawericon: {
    height: 23,
    width: 23,
    marginLeft:15
  },

  gridicon: {
    height: 23,
    width: 23,
    marginLeft:50
  },

  usericon: {
    height: 26,
    width: 26,
    marginLeft:30,
    borderRadius:60
  },

  topBar: {
    borderColor: '#C1C1C1',
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    paddingTop:8,
    paddingBottom:8
  },

  textInput: {
    fontSize: 18,
    paddingLeft: 15
  },

  buttonText: {
    fontSize: 18,
    paddingLeft: 20
  }







})