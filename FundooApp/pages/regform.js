
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Form, ScrollView } from 'react-native';
import { userRegister } from "../services/userServices"

export default class RegForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      //regState:{}
    }
  }

  validateName(text, type) {
    testName = /^[a-zA-Z]*$/
    if (type == 'name') {
      if (testName.test(text)) {
        this.setState({
          name: text
        })
      }
      else {
        this.setState({
          name: false
        })
      }
    }
  }


  validateEmail(text, type) {
    testEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (type == 'email') {
      if (testEmail.test(text)) {
        this.setState({
          email: text
        })
      }
      else {
        this.setState({
          email: false
        })
      }
    }
  }

  validatePassword(text, type) {
    testPassword = /^[a-zA-Z]\w{3,14}$/
    if (type == 'password') {
      if (testPassword.test(text)) {
        this.setState({
          password: text
        })
      }
      else {
        this.setState({
          password: false
        })
      }
    }
  }

  validateConfirmPassword(text, type) {
    testConfirmPassword = /^[a-zA-Z]\w{3,14}$/
    if (type == 'confirmPassword') {
      if (testConfirmPassword.test(text)) {
        this.setState({
          confirmPassword: text
        })
      }
      else {
        this.setState({
          confirmPassword: false
        })
      }
    }
  }

  submit() {
    if (this.state.name == false) {
      alert("Name cannot be empty!");
    }

    else if (this.state.email == false) {
      alert("Email cannot be empty!")
    }

    else if (this.state.password == false) {
      alert("Password cannot be empty!")
    }

    else if (this.state.password != this.state.confirmPassword) {
      alert("Passwords should match!")
    }

    else {
      /*var data={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword
      }*/
      userRegister(this.state)
        .then((res) => {
          //console.log(res);
          this.props.navigation.navigate("Login")
        })
        .catch((err) =>{
          alert("user already present",err)
        })
    }
  }



  static navigationOptions = { header: null }
  render() {
    return (
      <ScrollView>
        <Text style={styles.header}>Register</Text>

        <TextInput style={[styles.inputBox,
        !this.state.name ? styles.error : null]}
          onChangeText={(text) => this.validateName(text, 'name')}
          placeholder="Name"
          placeholderTextColor='#B6B6B6'
        //onChangeText={(name) =>this.setState({name}) }
        />

        <TextInput style={[styles.inputBox,
        !this.state.email ? styles.error : null]}
          onChangeText={(text) => this.validateEmail(text, 'email')}
          placeholder="Email"
          placeholderTextColor='#B6B6B6'
        //onChangeText={(email) =>this.setState({email}) }
        />

        <TextInput style={[styles.inputBox,
        !this.state.password ? styles.error : null]}
          onChangeText={(text) => this.validatePassword(text, 'password')}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor='#B6B6B6'
        //onChangeText={(password) =>this.setState({password}) }
        />

        <TextInput style={[styles.inputBox,
        !this.state.confirmPassword ? styles.error : null]}
          onChangeText={(text) => this.validateConfirmPassword(text, 'confirmPassword')}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor='#B6B6B6'
        //onChangeText={(confirmPassword) =>this.setState({confirmPassword}) }
        />

        <TouchableOpacity style={styles.button}
          onPress={() => this.submit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.loginTextContent}>
          <Text>Already a User?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginPage')}>
            <Text style={styles.loginTextButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 40,
  },

  inputBox: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 29,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 40,
  },

  button: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#199187',
    padding: 20,
    marginTop: 30,
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
  },

  buttonText: {
    alignSelf: 'center',
    color: 'white'
  },

  loginTextContent: {
    alignItems: 'flex-end',
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  loginTextButton: {
    color: '#199187',
    fontSize: 15,
    fontWeight: '500'
  },

  error: {
    borderBottomColor: 'red'
  }

});
