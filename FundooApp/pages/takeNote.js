
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form, Image, AsyncStorage } from 'react-native';
import { createNote } from "../services/userServices"


export default class TakeNote extends Component {
    //static navigationOptions = { header: null }

    constructor() {
        super();
        this.state = {
            title: null,
            note: null,

        }
    }


    submit() {

        if (this.state.title == null) {
            alert("Title can not be empty")
        }
        else {
            createNote(this.state)
                .then((res) => {
                    this.props.navigation.navigate("Home")
                })
                .catch((err) => {
                    alert(err)
                })
        }

    }


    render() {
        return (
            <View>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.submit()} >
                        <Image style={{ height: 25, width: 25 }} source={require('../assets/images/leftArrow.png')}></Image>
                    </TouchableOpacity>

                    <Text>                                                        </Text>

                    <TouchableOpacity>
                        <Image style={{ height: 22, width: 22, marginRight: 22 }} source={require('../assets/images/pin.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ height: 22, width: 22, marginRight: 22 }} source={require('../assets/images/bell.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ height: 20, width: 20, marginRight: 22, }} source={require('../assets/images/archive.png')}></Image>
                    </TouchableOpacity>
                </View>

                <TextInput style={styles.title} placeholder="Title" placeholderColor="gray"
                    onChangeText={(text) => this.setState({ title: text })} />


                <TextInput style={styles.note} placeholder="Note" placeholderColor="gray"
                    onChangeText={(text) => this.setState({ note: text })} />



                <View style={styles.bottomBar}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Image style={{ height: 28, width: 28, marginLeft: 20 }} source={require('../assets/images/add.png')}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={{ height: 23, width: 23, marginRight: 20 }} source={require('../assets/images/option.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBar: {
        //borderColor: '#C1C1C1',
        //borderRadius: 8,
        //borderWidth: 2,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        paddingTop: 8,
        paddingBottom: 8
    },

    title: {
        fontSize: 22,
        marginLeft: 15
    },

    note: {
        fontSize: 15,
        marginLeft: 15
    },

    bottomBar: {
        flexDirection: 'row',
        position: 'relative',
        bottom: -370,
    }

});
