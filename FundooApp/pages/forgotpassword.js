
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form } from 'react-native';
import { userForgotPassword } from "../services/userServices"


export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
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

  submit(){
    if (this.state.email == false) {
      alert("Enter proper email!");
    }
    else {
      userForgotPassword(this.state)
        .then((res) => {
          alert("Link sent to this email")
        })
        .catch((err) => {
          alert("invalid email!", err)
        })
    }
  }


  static navigationOptions = { header: null }
  render() {
    return (
      <View>
        <Text style={styles.header}>Forgot Password?</Text>

        <TextInput style={[styles.inputBox,
        !this.state.email ? styles.error : null]}
          onChangeText={(text) => this.validateEmail(text, 'email')}
          placeholder="Email"
          placeholderTextColor='#B6B6B6'
        //onChangeText={(email) =>this.setState({email}) }
        />

        <TouchableOpacity style={styles.button}
          onPress={() => this.submit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
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
    marginTop: 130,
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

  error: {
    borderBottomColor: 'red'
  }

});
