
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form ,ScrollView} from 'react-native';


export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  validateEmail(text) {
    testEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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


  validatePassword(text) {
    testPassword = /^[a-zA-Z]\w{3,14}$/
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


  submit() {

    if (this.state.email == false) {
      alert("Invalid email")
    }

    else if (this.state.password == false) {
      alert("Password should contain only letters and numbers")
    }

    else {
      this.props.navigation.navigate('DashBoard')
    }
  }


  static navigationOptions = { header: null }
  render() {
    return (
      <ScrollView>
        <Text style={styles.header}>Login</Text>

        <TextInput style={[styles.inputBox,
        !this.state.email ? styles.error : null]}
          onChangeText={(text) => this.validateEmail(text)}
          placeholder="Email"
          placeholderTextColor='#B6B6B6'
        />

        <TextInput style={[styles.inputBox,
        !this.state.password ? styles.error : null]}
          onChangeText={(text) => this.validatePassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor='#B6B6B6'
        />

        <TouchableOpacity style={styles.button}
          onPress={() => this.submit()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.loginTextContent}>
          <Text>Not yet Registered?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegForm')}>
            <Text style={styles.loginTextButton}>Register</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordTextButton}>Forgot Password</Text>
        </TouchableOpacity>
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
    marginBottom: 110,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 40,
  },

  inputBox: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
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

  forgotPasswordTextButton: {
    color: '#199187',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500'
  },

  error: {
    borderBottomColor: 'red'
  }

});
