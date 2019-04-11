
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form } from 'react-native';
import { userResetPassword } from "../services/userServices"


export default class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            Password: '',
            confirmPassword: ''
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
        if (this.state.password == false) {
            alert("Password should contain only letters and numbers!");
        }
        else if (this.state.password != this.state.confirmPassword) {
            alert("Passwords should match!")
        }
        else {
            userResetPassword(this.state.password)
                .then((res) => {
                    this.props.navigation.navigate('Home')
                })
                .catch((err) => {
                    alert("Some problem occured!", err)
                })
        }
    }


    static navigationOptions = { header: null }
    render() {
        return (
            <View>
                <Text style={styles.header}>Register</Text>

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

    error: {
        borderBottomColor: 'red'
    }

});
