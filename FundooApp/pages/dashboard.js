import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form, DrawerLayoutAndroid, Image} from 'react-native';


var navigationView = (
  <View>  
    <Text>drawer</Text>
  </View>
);

export default class DashBoard extends Component {
  static navigationOptions={header: null}
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
          <TextInput style={styles.inputBox}>
          <Image style={styles.icon}
          source={require('../components/images/optionIcon.png')}/>
          </TextInput>
      </DrawerLayoutAndroid>
    );
  }
}



const styles = StyleSheet.create({

  header: {
    alignSelf: 'stretch',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 110,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 40,
  },

  inputBox: {
    alignSelf: 'stretch',
    height: 40,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  icon:{
    height:20,
    width:20,
   // paddingTop:20
  }
})