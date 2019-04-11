
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Form, Image } from 'react-native';


export default class TakeNote extends Component {
    //static navigationOptions = { header: null }
    render() {
        return (
            <View>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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

                <TextInput style={styles.title} placeholder="Title" placeholderColor="gray"></TextInput>
                <TextInput style={styles.note} placeholder="Note" placeholderColor="gray"></TextInput>

                <View style={styles.bottomBar}>
                    <TouchableOpacity >

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/checkBox.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={{ height: 25, width: 25, marginRight: 25 }} source={require('../assets/images/brush.png')}></Image>
                    </TouchableOpacity>
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
        justifyContent: 'center'
    }

});
