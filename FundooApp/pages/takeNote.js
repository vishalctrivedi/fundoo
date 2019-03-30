
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form, Image } from 'react-native';


export default class TakeNote extends Component {
    //static navigationOptions = { header: null }
    render() {
        return (
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={{ height: 25, width: 25, marginRight: 175 }} source={require('../assets/images/leftArrow.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/pin.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/bell.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{ height: 20, width: 20, marginRight: 25, marginTop: 3 }} source={require('../assets/images/archive.png')}></Image>
                </TouchableOpacity>

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

});
